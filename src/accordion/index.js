import React, { Component, PropTypes, Children, cloneElement, isValidElement } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import { mapPropsOnChange } from 'recompose';
import uncontrollable from 'uncontrollable/batching';
import includes from 'lodash/includes';
import isNil from 'lodash/isNil';
import noop from 'lodash/noop';
import isBlank from 'underscore.string/isBlank';

import { Collapse } from '../collapse';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

const AccordionItemControlled =
  mapPropsOnChange(
    ['active', 'eventKey', 'onClick', 'onSelect', 'onToggle'],
    ({ active, eventKey, onClick, onSelect, onToggle, ...restProps }) => {
      function onTitleClick(...args) {
        const [event] = args;

        event.preventDefault();

        if (onClick) {
          onClick(...args);
        }

        if (onToggle) {
          onToggle(!active, ...args);
        }

        if (onSelect) {
          onSelect(eventKey, ...args);
        }
      }

      return {
        ...restProps,
        active,
        onTitleClick,
      };
    },
    ({
      active,
      children,
      className,
      contentClassName,
      contentStyle,
      id,
      onTitleClick,
      title,
      titleClassName,
      titleStyle,
      ...restProps,
    }) => {
      const classNames = cx(className, cxStyles('accordion-item', { 'is-active': active }));
      const titleClassNames = cx(titleClassName, cxStyles('accordion-title'));
      const contentClassNames = cx(contentClassName, cxStyles('accordion-content'));
      let titleId = null;
      let contentId = null;

      if (!isBlank(id)) {
        titleId = `${id}Title`;
        contentId = `${id}Content`;
      }

      return (
        <li {...restProps} className={classNames} id={id}>
          <a
            aria-controls={contentId}
            aria-expanded={active}
            aria-selected={active}
            className={titleClassNames}
            href="#"
            id={titleId}
            onClick={onTitleClick}
            role="tab"
            style={titleStyle}
          >
            {title}
          </a>
          <Collapse in={active}>
            <div>
              <div
                aria-hidden={!active}
                aria-labelledby={titleId}
                className={contentClassNames}
                id={contentId}
                role="tabpanel"
                style={{ ...contentStyle, display: 'block' }}
              >
                {children}
              </div>
            </div>
          </Collapse>
        </li>
      );
    }
  );

AccordionItemControlled.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  contentStyle: PropTypes.object,
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  onToggle: PropTypes.func,
  title: PropTypes.node,
  titleClassName: PropTypes.string,
  titleStyle: PropTypes.object,
};

export const AccordionItem = uncontrollable(AccordionItemControlled, { active: 'onToggle' });
AccordionItem.displayName = 'AccordionItem';

function getActiveKeyFromProps(props) {
  const { allowAllClosed, children, defaultActiveKey, multiExpand } = props;
  let activeKey = null;

  if (multiExpand) {
    if (Array.isArray(defaultActiveKey)) {
      activeKey = defaultActiveKey;
    } else if (isBlank(defaultActiveKey)) {
      activeKey = [];
    } else {
      activeKey = [defaultActiveKey];
    }
  } else if (Array.isArray(defaultActiveKey)) {
    if (defaultActiveKey.length > 0) {
      activeKey = defaultActiveKey[0];
    } else {
      activeKey = null;
    }
  } else if (isBlank(defaultActiveKey)) {
    activeKey = null;
  } else {
    activeKey = defaultActiveKey;
  }

  if (!allowAllClosed && ((multiExpand && activeKey.length === 0) || isNil(activeKey))) {
    let firstChildEventKey = null;

    Children.forEach(children, (child) => {
      if (isNil(firstChildEventKey)
          && isValidElement(child)
          && !isBlank(child.props.eventKey)) {
        firstChildEventKey = child.props.eventKey;
      }
    });

    if (!isBlank(firstChildEventKey)) {
      if (multiExpand) {
        activeKey = [firstChildEventKey];
      } else {
        activeKey = firstChildEventKey;
      }
    }
  }

  return activeKey;
}

export class Accordion extends Component {
  static propTypes = {
    activeKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    ]),
    allowAllClosed: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    defaultActiveKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    ]),
    multiExpand: PropTypes.bool,
    onSelect: PropTypes.func,
  };

  state = { activeKey: getActiveKeyFromProps(this.props) };

  shouldComponentUpdate() {
    return !this._isChanging;
  }

  handleToggle = (...args) => {
    const { allowAllClosed, multiExpand, onSelect } = this.props;
    const { activeKey: prevActiveKey } = this.state;

    if (onSelect) {
      this._isChanging = true;
      onSelect(...args);
      this._isChanging = false;
    }

    const [selectedKey] = args;

    if (!isBlank(selectedKey)) {
      let activeKey = null;

      if (multiExpand) {
        if (includes(prevActiveKey, selectedKey)) {
          if (prevActiveKey.length > 1 || allowAllClosed) {
            activeKey = prevActiveKey.filter((item) => item !== selectedKey);
          } else {
            activeKey = prevActiveKey;
          }
        } else {
          activeKey = prevActiveKey.concat([selectedKey]);
        }
      } else if (prevActiveKey === selectedKey) {
        if (allowAllClosed) {
          activeKey = null;
        } else {
          activeKey = selectedKey;
        }
      } else {
        activeKey = selectedKey;
      }

      this.setState({ activeKey });
    }
  };

  render() {
    const { activeKey: propActiveKey, children, className } = this.props;
    const { activeKey: stateActiveKey } = this.state;
    const classNames = cx(className, cxStyles('accordion'));
    let activeKey = stateActiveKey;

    if (Array.isArray(propActiveKey) || !isBlank(propActiveKey)) {
      activeKey = propActiveKey;
    }

    const newChildren = Children.map(children, (child) => {
      if (isValidElement(child) && !isBlank(child.props.eventKey)) {
        return cloneElement(child, {
          active:
            Array.isArray(activeKey)
            ? includes(activeKey, child.props.eventKey)
            : activeKey === child.props.eventKey,
          onSelect: this.handleToggle,
          onToggle: noop,
        });
      }

      return child;
    });

    return (
      <ul {...this.props} className={classNames} role="tablist">
        {newChildren}
      </ul>
    );
  }
}

Accordion.Item = AccordionItem;

export default Accordion;
