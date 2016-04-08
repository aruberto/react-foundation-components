import React, { PropTypes, Children, cloneElement, isValidElement } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import uncontrollable from 'uncontrollable/batching';
import includes from 'lodash/includes';
import noop from 'lodash/noop';

import { COMPONENT_SIZES } from '../util/constants';
import { ShowForScreenReader, HideForScreenReader } from '../visibility';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

function createCheckedLabel(baseClassName, displayName = 'SwitchCheckedLabelBase') {
  const SwitchCheckedLabelBase = ({
    className,
    ...restProps,
  }) => {
    const classNames = cx(className, cxStyles(baseClassName));

    return <HideForScreenReader {...restProps} className={classNames} />;
  };

  SwitchCheckedLabelBase.displayName = displayName;
  SwitchCheckedLabelBase.propTypes = {
    className: PropTypes.string,
  };

  return SwitchCheckedLabelBase;
}

export const SwitchCheckedLabel = createCheckedLabel('switch-active', 'SwitchCheckedLabel');

export const SwitchUncheckedLabel = createCheckedLabel('switch-inactive', 'SwitchUncheckedLabel');

export const SwitchPadelLabel = (props) => <ShowForScreenReader {...props} />;

const SwitchControlled = ({
  checked,
  children,
  className,
  containerClassName,
  containerStyle,
  eventKey,
  id,
  onChange,
  onSelect,
  onToggle,
  paddleClassName,
  paddleStyle,
  size,
  ...restProps,
}) => {
  const containerClassNames =
    cx(containerClassName, cxStyles('switch', { [size]: includes(COMPONENT_SIZES, size) }));
  const classNames = cx(className, cxStyles('switch-input'));
  const paddleClassNames = cx(paddleClassName, cxStyles('switch-paddle'));
  const onInputChange = (...args) => {
    if (onChange) {
      onChange(...args);
    }

    if (onToggle) {
      onToggle(!checked, ...args);
    }

    if (onSelect) {
      onSelect(eventKey, ...args);
    }
  };
  const onLabelClick = (...args) => {
    const [event] = args;

    event.preventDefault();

    onInputChange(...args);
  };

  return (
    <div className={containerClassNames} style={containerStyle}>
      <input
        {...restProps}
        checked={checked}
        className={classNames}
        id={id}
        onChange={onInputChange}
        type="checkbox"
      />
      <label
        className={paddleClassNames}
        htmlFor={id}
        onClick={onLabelClick}
        style={paddleStyle}
      >
        {children}
      </label>
    </div>
  );
};

SwitchControlled.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  onToggle: PropTypes.func,
  paddleClassName: PropTypes.string,
  paddleStyle: PropTypes.object,
  size: PropTypes.oneOf(COMPONENT_SIZES),
};

export const Switch = uncontrollable(SwitchControlled, { checked: 'onToggle' });
Switch.displayName = 'Switch';

const RadioSwitchControlled = ({
  activeKey,
  children,
  onSelect,
  size,
  ...restProps,
}) => {
  const clonedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        checked: child.props.eventKey === activeKey,
        onSelect,
        onToggle: noop,
        size,
      });
    }

    return child;
  });

  return <div {...restProps}>{clonedChildren}</div>;
};

RadioSwitchControlled.propTypes = {
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  onSelect: PropTypes.func,
  size: PropTypes.oneOf(COMPONENT_SIZES),
};

export const RadioSwitch = uncontrollable(RadioSwitchControlled, { activeKey: 'onSelect' });
RadioSwitch.displayName = 'RadioSwitch';

Switch.Radio = RadioSwitch;
Switch.CheckedLabel = SwitchCheckedLabel;
Switch.UncheckedLabel = SwitchUncheckedLabel;
Switch.PadelLabel = SwitchPadelLabel;

export default Switch;
