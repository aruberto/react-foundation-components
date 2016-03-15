import React, { Component, PropTypes, Children, cloneElement, isValidElement } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import uncontrollable from 'uncontrollable/batching';
import isBlank from 'underscore.string/isBlank';

import { COMPONENT_COLORS } from '../util/constants';
import { ClearFix } from '../float';
import { Callout } from '../callout';
import { Button } from '../button';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export class ToggleSwitchItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func,
    onToggle: PropTypes.func,
  };

  handleLabelClick = (...args) => {
    const { eventKey, onClick, onToggle } = this.props;

    if (onClick) {
      onClick(...args);
    }

    if (onToggle) {
      onToggle(eventKey);
    }
  };

  render() {
    const {
      children,
      className,
    } = this.props;
    const classNames = cx(className, cxStyles('switch-toggle-item'));

    return (
      <div {...this.props} className={classNames} onClick={this.handleLabelClick}>
        {children}
      </div>
    );
  }
}

class ToggleSwitchControlled extends Component {
  static propTypes = {
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node,
    className: PropTypes.string,
    onSelect: PropTypes.func,
    paddleClassName: PropTypes.string,
    paddleColor: PropTypes.oneOf(COMPONENT_COLORS),
    paddleStyle: PropTypes.object,
  };

  handleToggle = (...args) => {
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(...args);
    }
  };

  render() {
    const {
      activeKey,
      children,
      className,
      paddleClassName,
      paddleColor,
      paddleStyle,
    } = this.props;
    const classNames = cx(className, cxStyles('switch-toggle'));
    const paddleClassNames = cx(paddleClassName, cxStyles('switch-toggle-paddle'));
    const childrenCount = Children.count(children);
    let newChildren = null;
    let paddle = null;

    if (childrenCount > 0) {
      const width = 100 / childrenCount;
      let selectedIndex = null;

      newChildren = Children.map(children, (child, index) => {
        if (isValidElement(child) && !isBlank(child.props.eventKey)) {
          const checked = child.props.eventKey === activeKey;

          if (checked) {
            selectedIndex = index;
          }

          return cloneElement(child, {
            checked,
            onToggle: this.handleToggle,
            style: { ...child.props.style, width: `${width}%` },
          });
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
    }

    return (
      <ClearFix {...this.props} componentClass={Callout} className={classNames}>
        {newChildren}
        {paddle}
      </ClearFix>
    );
  }
}

export const ToggleSwitch = uncontrollable(ToggleSwitchControlled, { activeKey: 'onSelect' });
ToggleSwitch.displayName = 'ToggleSwitch';

ToggleSwitch.Item = ToggleSwitchItem;

export default ToggleSwitch;
