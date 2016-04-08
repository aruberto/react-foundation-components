import React, { PropTypes, Children, cloneElement, isValidElement } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import uncontrollable from 'uncontrollable/batching';
import isBlank from 'underscore.string/isBlank';

import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const Tab = ({
  active,
  className,
  id,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('tabs-panel', { 'is-active': active }));

  return (
    <div
      {...restProps}
      aria-hidden={!active}
      aria-labelledby={isBlank(id) ? null : `${id}Label`}
      className={classNames}
      id={id}
      role="tabpanel"
    />
  );
};

Tab.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const TabTitle = ({
  active,
  containerClassName,
  containerStyle,
  eventKey,
  onSelect,
  tabId,
  ...restProps,
}) => {
  const classNames = cx(containerClassName, cxStyles('tabs-title', { 'is-active': active }));
  const onClick = (...args) => {
    const [event] = args;

    event.preventDefault();

    if (onSelect && !isBlank(eventKey)) {
      onSelect(eventKey, ...args);
    }
  };

  return (
    <li
      className={classNames}
      role="presentation"
      style={containerStyle}
    >
      <a
        {...restProps}
        aria-controls={tabId}
        aria-selected={active}
        href={`#${isBlank(tabId) ? '' : tabId}`}
        onClick={onClick}
        role="tab"
      />
    </li>
  );
};

TabTitle.propTypes = {
  active: PropTypes.bool,
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelect: PropTypes.func,
  tabId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const TabsHeader = ({
  className,
  vertical,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('tabs', { vertical }));

  return <div {...restProps} className={classNames} />;
};

TabsHeader.propTypes = {
  className: PropTypes.string,
  vertical: PropTypes.bool,
};

const TabsContent = ({
  className,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('tabs-content'));

  return <div {...restProps} className={classNames} />;
};

TabsContent.propTypes = {
  className: PropTypes.string,
};

const TabsControlled = ({
  activeKey,
  children,
  contentClassName,
  contentStyle,
  headerClassName,
  headerStyle,
  onSelect,
  vertical,
  ...restProps,
}) => {
  const headerChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return (
        <TabTitle
          {...child.props}
          active={child.props.eventKey === activeKey}
          id={isBlank(child.props.id) ? null : `${child.props.id}Title`}
          onSelect={onSelect}
          tabId={child.props.id}
        >
          {child.props.title}
        </TabTitle>
      );
    }

    return null;
  });
  const contentChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { active: activeKey === child.props.eventKey });
    }

    return child;
  });

  return (
    <div {...restProps}>
      <TabsHeader className={headerClassName} style={headerStyle} vertical={vertical}>
        {headerChildren}
      </TabsHeader>
      <TabsContent className={contentClassName} style={contentStyle}>
        {contentChildren}
      </TabsContent>
    </div>
  );
};

TabsControlled.propTypes = {
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  contentClassName: PropTypes.string,
  contentStyle: PropTypes.object,
  headerClassName: PropTypes.string,
  headerStyle: PropTypes.object,
  onSelect: PropTypes.func,
  vertical: PropTypes.bool,
};

export const Tabs = uncontrollable(TabsControlled, { activeKey: 'onSelect' });
Tabs.displayName = 'Tabs';

Tabs.Tab = Tab;

export default Tabs;
