import React, {Component, PropTypes, Children, cloneElement} from 'react';
import cx from 'classnames';
import uncontrollable from 'uncontrollable/batching';
import isNil from 'lodash/isNil';
import isBlank from 'underscore.string/isBlank';

import styles from './styles.scss';
import joinObjects from '../../util/join-objects';
import Collapse from '../../transitions/collapse';

class AccordionItemControlled extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    contentClassName: PropTypes.string,
    contentStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onToggle: PropTypes.func,
    title: PropTypes.node,
    titleClassName: PropTypes.string,
    titleStyle: PropTypes.object // eslint-disable-line react/forbid-prop-types
  };

  getClassNames = () => {
    const {active} = this.props;

    return joinObjects(styles, {'accordion-item': true, 'is-active': active});
  };

  getTitleClassNames = () => joinObjects(styles, {'accordion-title': true});

  getContentClassNames = () => joinObjects(styles, {'accordion-content': true});

  handleTitleClick = (event) => {
    const {eventKey, onToggle} = this.props;

    event.preventDefault();

    if (onToggle) {
      onToggle(eventKey);
    }
  };

  render() {
    const {
      active,
      children,
      className,
      contentClassName,
      contentStyle,
      id,
      title,
      titleClassName,
      titleStyle
    } = this.props;
    let labelId = null;
    let contentId = null;

    if (!isBlank(id)) {
      labelId = `${id}-label`;
      contentId = `${id}-content`;
    }

    return (
      <li {...this.props} className={cx(className, this.getClassNames())}>
        <a
          aria-controls={contentId}
          aria-expanded={active}
          aria-selected={active}
          className={cx(titleClassName, this.getTitleClassNames())}
          href='#'
          id={labelId}
          onClick={this.handleTitleClick}
          role='tab'
          style={titleStyle}
        >
          {title}
        </a>
        <Collapse in={active}>
          <div>
            <div
              aria-hidden={!active}
              aria-labelledby={labelId}
              className={cx(contentClassName, this.getContentClassNames())}
              id={contentId}
              role='tabpanel'
              style={{...contentStyle, display: 'block'}}
            >
              {children}
            </div>
          </div>
        </Collapse>
      </li>
    );
  }
}

export const AccordionItem = uncontrollable(AccordionItemControlled, {active: 'onToggle'});

AccordionItem.displayName = 'AccordionItem';

export class Accordion extends Component {
  static propTypes = {
    activeKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    ]),
    allowAllClosed: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    defaultActiveKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    ]),
    multiExpand: PropTypes.bool,
    onSelect: PropTypes.func
  };

  constructor(props) {
    super(props);

    const {allowAllClosed, children, defaultActiveKey, multiExpand} = props;
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
        if (isNil(firstChildEventKey) && child.props && !isBlank(child.props.eventKey)) {
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

    this.state = {activeKey};
  }

  shouldComponentUpdate() {
    return !this._isChanging;
  }

  getClassNames = () => joinObjects(styles, {accordion: true});

  handleToggle = (...args) => {
    const {allowAllClosed, multiExpand, onSelect} = this.props;
    const {activeKey: prevActiveKey} = this.state;

    if (onSelect) {
      this._isChanging = true;
      onSelect(...args);
      this._isChanging = false;
    }

    const [selectedKey] = args;

    if (!isBlank(selectedKey)) {
      let activeKey = null;

      if (multiExpand) {
        if (prevActiveKey.includes(selectedKey)) {
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

      this.setState({activeKey});
    }
  };

  render() {
    const {activeKey: propActiveKey, children, className} = this.props;
    const {activeKey: stateActiveKey} = this.state;
    let activeKey = stateActiveKey;

    if (Array.isArray(propActiveKey) || !isBlank(propActiveKey)) {
      activeKey = propActiveKey;
    }

    const newChildren = Children.map(children, (child) => {
      if (child.props && !isBlank(child.props.eventKey)) {
        return cloneElement(child, {
          active:
            Array.isArray(activeKey)
            ? activeKey.includes(child.props.eventKey)
            : activeKey === child.props.eventKey,
          onToggle: this.handleToggle
        });
      }

      return child;
    });

    return (
      <ul {...this.props} className={cx(className, this.getClassNames())} role='tablist'>
        {newChildren}
      </ul>
    );
  }
}
