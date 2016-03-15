import React, { PropTypes, Children, cloneElement, isValidElement } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import { mapPropsOnChange } from 'recompose';
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
  let labelId = null;

  if (!isBlank(id)) {
    labelId = `${id}Label`;
  }

  return (
    <div
      {...restProps}
      aria-hidden={!active}
      aria-labelledby={labelId}
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

const TabTitle =
  mapPropsOnChange(
    ['eventKey', 'onSelect'],
    ({ eventKey, onSelect, ...restProps }) => ({
      ...restProps,
      onClick(...args) {
        const [event] = args;

        event.preventDefault();

        if (onSelect && !isBlank(eventKey)) {
          onSelect(eventKey, ...args);
        }
      },
    }),
    ({
      active,
      containerClassName,
      containerStyle,
      onClick,
      tabId,
      ...restProps,
    }) => {
      const classNames = cx(containerClassName, cxStyles('tabs-title', { 'is-active': active }));

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
    }
  );

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
    const childProps = child.props ? child.props : {};
    let id = null;
    let tabId = null;

    if (!isBlank(childProps.id)) {
      tabId = child.props.id;
      id = `${tabId}Label`;
    }

    return (
      <TabTitle
        {...childProps}
        id={id}
        tabId={tabId}
        active={childProps.eventKey === activeKey}
        onSelect={onSelect}
      >
        {childProps.title}
      </TabTitle>
    );
  });
  const contentChildren = Children.map(children, (child) => {
    if (isValidElement(child) && child.props && !isBlank(child.props.eventKey)) {
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
