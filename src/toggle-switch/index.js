import React, { PropTypes, Children, cloneElement, isValidElement } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import uncontrollable from 'uncontrollable/batching';

import { COMPONENT_COLORS } from '../util/constants';
import { ClearFix } from '../float';
import { Callout } from '../callout';
import { Button } from '../button';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const ToggleSwitchItem = ({
  className,
  eventKey,
  onClick,
  onSelect,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('switch-toggle-item'));
  const onTitleClick = (...args) => {
    if (onClick) {
      onClick(...args);
    }

    if (onSelect) {
      onSelect(eventKey);
    }
  };

  return <div {...restProps} className={classNames} onClick={onTitleClick} />;
};

ToggleSwitchItem.propTypes = {
  className: PropTypes.string,
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
};

const ToggleSwitchControlled = ({
  activeKey,
  children,
  className,
  onSelect,
  paddleClassName,
  paddleColor,
  paddleStyle,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('switch-toggle'));
  const paddleClassNames = cx(paddleClassName, cxStyles('switch-toggle-paddle'));
  const childrenCount = Children.count(children);
  const width = childrenCount > 0 ? 100 / childrenCount : 0;
  let paddle = null;
  let selectedIndex = null;
  const clonedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      if (child.props.eventKey === activeKey) {
        selectedIndex = index;
      }

      return cloneElement(child, { onSelect, style: { ...child.props.style, width: `${width}%` } });
    }

    return child;
  });

  if (Number.isInteger(selectedIndex)) {
    paddle = (
      <Button
        className={paddleClassNames}
        color={paddleColor}
        style={{ ...paddleStyle, width: `${width}%`, left: `${width * selectedIndex}%` }}
      />
    );
  }

  return (
    <ClearFix noWrap>
      <Callout {...restProps} className={classNames}>
        {clonedChildren}
        {paddle}
      </Callout>
    </ClearFix>
  );
};

ToggleSwitchControlled.propTypes = {
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  className: PropTypes.string,
  onSelect: PropTypes.func,
  paddleClassName: PropTypes.string,
  paddleColor: PropTypes.oneOf(COMPONENT_COLORS),
  paddleStyle: PropTypes.object,
};

export const ToggleSwitch = uncontrollable(ToggleSwitchControlled, { activeKey: 'onSelect' });
ToggleSwitch.displayName = 'ToggleSwitch';

ToggleSwitch.Item = ToggleSwitchItem;

export default ToggleSwitch;
