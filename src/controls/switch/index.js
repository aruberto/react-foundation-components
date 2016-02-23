import React, { Component, PropTypes, Children, cloneElement, isValidElement } from 'react';
import cx from 'classnames';
import uncontrollable from 'uncontrollable/batching';
import isNil from 'lodash/isNil';
import isBlank from 'underscore.string/isBlank';

import styles from './styles';
import { COMPONENT_SIZES } from '../../util/constants';
import createHigherOrderComponent from '../../util/create-higher-order-component';
import { ShowOnlyForScreenReader, HideOnlyForScreenReader } from '../../general/visibility';

const CheckedLabel = createHigherOrderComponent({
  displayName: 'CheckedLabel',
  mapPropsToClassNames: () => styles['switch-active'],
});

const UncheckedLabel = createHigherOrderComponent({
  displayName: 'UncheckedLabel',
  mapPropsToClassNames: () => styles['switch-inactive'],
});

export class Switch extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    checkedLabel: React.PropTypes.node,
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    containerStyle: PropTypes.object,
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    onToggle: PropTypes.func,
    paddleClassName: PropTypes.string,
    paddleLabel: React.PropTypes.node,
    paddleStyle: PropTypes.object,
    size: PropTypes.oneOf(COMPONENT_SIZES),
    uncheckedLabel: React.PropTypes.node,
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

  renderPaddleLabel = () => {
    const { paddleLabel } = this.props;
    let result = null;

    if (paddleLabel) {
      result = <ShowOnlyForScreenReader>{paddleLabel}</ShowOnlyForScreenReader>;
    }

    return result;
  };

  renderCheckedLabel = () => {
    const { checkedLabel } = this.props;
    let result = null;

    if (checkedLabel) {
      result = (
        <HideOnlyForScreenReader>
          <CheckedLabel>{checkedLabel}</CheckedLabel>
        </HideOnlyForScreenReader>
      );
    }

    return result;
  };

  renderUncheckedLabel = () => {
    const { uncheckedLabel } = this.props;
    let result = null;

    if (uncheckedLabel) {
      result = (
        <HideOnlyForScreenReader>
          <UncheckedLabel>{uncheckedLabel}</UncheckedLabel>
        </HideOnlyForScreenReader>
      );
    }

    return result;
  };

  render() {
    const {
      className,
      containerClassName,
      containerStyle,
      id,
      paddleClassName,
      paddleStyle,
      size,
    } = this.props;
    const containerClassNames = cx(
      containerClassName,
      styles.switch,
      {
        [styles[size]]: COMPONENT_SIZES.includes(size),
      }
    );
    const classNames = cx(className, styles['switch-input']);
    const paddleClassNames = cx(paddleClassName, styles['switch-paddle']);

    return (
      <div className={containerClassNames} style={containerStyle}>
        <input
          {...this.props}
          className={classNames}
          onChange={this.handleInputChange}
          ref={this.setInputRef}
          size={null}
          type="checkbox"
        />
        <label
          className={paddleClassNames}
          htmlFor={id}
          onClick={this.handleLabelClick}
          style={paddleStyle}
        >
          {this.renderPaddleLabel()}
          {this.renderCheckedLabel()}
          {this.renderUncheckedLabel()}
        </label>
      </div>
    );
  }
}

class RadioSwitchControlled extends Component {
  static propTypes = {
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    size: PropTypes.oneOf(COMPONENT_SIZES),
  };

  handleChange = (...args) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(...args);
    }
  };

  handleToggle = (...args) => {
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(...args);
    }
  };

  render() {
    const { activeKey, children, size } = this.props;
    const newChildren = Children.map(children, (child) => {
      if (isValidElement(child) && !isBlank(child.props.eventKey)) {
        return cloneElement(child, {
          checked: child.props.eventKey === activeKey,
          onChange: this.handleChange,
          onToggle: this.handleToggle,
          size,
        });
      }

      return child;
    });

    return (
      <div {...this.props}>{newChildren}</div>
    );
  }
}

export const RadioSwitch = uncontrollable(RadioSwitchControlled, { activeKey: 'onSelect' });

RadioSwitch.displayName = 'RadioSwitch';
