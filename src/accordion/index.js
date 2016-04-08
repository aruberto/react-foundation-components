import React, { PropTypes, Children, cloneElement, isValidElement } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import uncontrollable from 'uncontrollable/batching';
import includes from 'lodash/includes';
import noop from 'lodash/noop';
import isBlank from 'underscore.string/isBlank';

import { Collapse } from '../collapse';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

const AccordionItemControlled = ({
  active,
  children,
  className,
  contentClassName,
  contentStyle,
  eventKey,
  id,
  onClick,
  onSelect,
  onToggle,
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

  const onTitleClick = (...args) => {
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
  };

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
};

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

const AccordionControlled = ({
  allowAllClosed,
  children,
  className,
  multiExpand,
  activeKey: maybeActiveKey = multiExpand ? [] : null,
  onSelect,
  ...restProps,
}) => {
  let activeKey = maybeActiveKey;

  if (!allowAllClosed && (multiExpand && activeKey.length === 0 || isBlank(activeKey))) {
    const childArray =
      Children.toArray(children)
        .filter((child) => isValidElement(child) && !isBlank(child.props.eventKey));

    if (childArray.length >= 1) {
      const firstKey = childArray[0].props.eventKey;
      activeKey = multiExpand ? [firstKey] : firstKey;
    }
  }

  const onChildSelect = (eventKey, ...args) => {
    if (multiExpand) {
      if (includes(activeKey, eventKey)) {
        const filtered = activeKey.filter((item) => item !== eventKey);

        if (!allowAllClosed && filtered.length === 0) {
          onSelect([eventKey], ...args);
        } else {
          onSelect(filtered, ...args);
        }
      } else {
        onSelect([...activeKey, eventKey], ...args);
      }
    } else {
      if (allowAllClosed && activeKey === eventKey) {
        onSelect(null, ...args);
      } else {
        onSelect(eventKey, ...args);
      }
    }
  };

  const classNames = cx(className, cxStyles('accordion'));
  const clonedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        active:
          multiExpand
          ? includes(activeKey, child.props.eventKey)
          : activeKey === child.props.eventKey,
        onSelect: onChildSelect,
        onToggle: noop,
      });
    }

    return child;
  });

  return <ul {...restProps} className={classNames} role="tablist">{clonedChildren}</ul>;
};

AccordionControlled.propTypes = {
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

export const Accordion = uncontrollable(AccordionControlled, { activeKey: 'onSelect' });
Accordion.displayName = 'Accordion';

Accordion.Item = AccordionItem;

export default Accordion;
