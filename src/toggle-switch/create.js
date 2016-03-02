import React, { Component, PropTypes, Children, cloneElement, isValidElement } from 'react';
import cx from 'classnames';
import uncontrollable from 'uncontrollable/batching';
import isNil from 'lodash/isNil';
import isBlank from 'underscore.string/isBlank';

import { COMPONENT_COLORS } from '../util/constants';
import DefaultComponent from '../util/default-component';

export default function create(
  styles,
  Callout = DefaultComponent,
  Button = DefaultComponent,
) {
  class ToggleSwitchItem extends Component {
    static propTypes = {
      checked: PropTypes.bool,
      children: PropTypes.node,
      className: PropTypes.string,
      containerClassName: PropTypes.string,
      containerStyle: PropTypes.object,
      eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      labelClassName: PropTypes.string,
      labelStyle: PropTypes.object,
      onChange: PropTypes.func,
      onToggle: PropTypes.func,
    };

    setInputRef = (inputRef) => this._inputRef = inputRef;

    handleLabelClick = (...args) => {
      const { checked, eventKey, id, onChange, onToggle } = this.props;

      if (onChange) {
        onChange(...args);
      }

      if (isBlank(id)) {
        if (isNil(checked)) {
          this._inputRef.click();
        } else if (onToggle) {
          onToggle(eventKey);
        }
      }
    };

    handleInputChange = (...args) => {
      const { eventKey, id, onChange, onToggle } = this.props;

      if (onChange) {
        onChange(...args);
      }

      if (!isBlank(id) && onToggle) {
        onToggle(eventKey);
      }
    };

    render() {
      const {
        children,
        className,
        containerClassName,
        containerStyle,
        id,
        labelClassName,
        labelStyle,
      } = this.props;
      const classNames = cx(className, styles['switch-toggle-input']);
      const labelClassNames = cx(labelClassName, styles['switch-toggle-label']);

      return (
        <div className={containerClassName} style={containerStyle}>
          <input
            {...this.props}
            children={null}
            className={classNames}
            onChange={this.handleInputChange}
            ref={this.setInputRef}
            type="checkbox"
          />
          <label
            className={labelClassNames}
            htmlFor={id}
            onClick={this.handleLabelClick}
            style={labelStyle}
          >
            {children}
          </label>
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
      const classNames = cx(className, styles['switch-toggle']);
      const paddleClassNames = cx(paddleClassName, styles['switch-toggle-paddle']);
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
              labelStyle: { ...child.props.labelStyle, width: `${width}%` },
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
        <Callout {...this.props} className={classNames}>
          {newChildren}
          {paddle}
        </Callout>
      );
    }
  }

  const ToggleSwitch = uncontrollable(ToggleSwitchControlled, { activeKey: 'onSelect' });
  ToggleSwitch.displayName = 'ToggleSwitch';

  return { ToggleSwitch, ToggleSwitchItem };
}
