import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import isNil from 'lodash/isNil';

import styles from './styles.scss';
import {COMPONENT_SIZES} from '../../util/constants';
import joinObjects from '../../util/join-objects';
import createHigherOrderComponent from '../../util/create-higher-order-component';
import {ShowOnlyForScreenReader, HideOnlyForScreenReader} from '../../general/visibility';

const CheckedLabel = createHigherOrderComponent({
  displayName: 'CheckedLabel',
  mapPropsToClassNames: () => joinObjects(styles, {'switch-active': true}),
  defaultComponentClass: 'span'
});

const UncheckedLabel = createHigherOrderComponent({
  displayName: 'UncheckedLabel',
  mapPropsToClassNames: () => joinObjects(styles, {'switch-inactive': true}),
  defaultComponentClass: 'span'
});

export default class Switch extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    checkedLabel: React.PropTypes.node,
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    containerStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    paddleClassName: PropTypes.string,
    paddleLabel: React.PropTypes.node,
    paddleStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    size: PropTypes.oneOf(COMPONENT_SIZES),
    uncheckedLabel: React.PropTypes.node
  };

  handleInputRef = (inputRef) => this.inputRef = inputRef;

  handleLabelClick = (event) => {
    const {checked, id, onChange} = this.props;

    if (!id) {
      if (isNil(checked)) {
        this.inputRef.click();
      } else if (onChange) {
        onChange(event);
      }
    }
  };

  handleInputChange = (event) => {
    const {id, onChange} = this.props;

    if (id && onChange) {
      onChange(event);
    }
  };

  getClassNames = () => {
    const {size} = this.props;

    return joinObjects(styles, {
      switch: true,
      [size]: COMPONENT_SIZES.includes(size)
    });
  };

  getInputClassNames = () => joinObjects(styles, {'switch-input': true});

  getPaddleClassNames = () => joinObjects(styles, {'switch-paddle': true});

  getCheckedLabelClassNames = () => joinObjects(styles, {'switch-active': true});

  getUncheckedLabelClassNames = () => joinObjects(styles, {'switch-inactive': true});

  renderPaddleLabel = () => {
    const {paddleLabel} = this.props;
    let result = null;

    if (paddleLabel) {
      result = <ShowOnlyForScreenReader>{paddleLabel}</ShowOnlyForScreenReader>;
    }

    return result;
  };

  renderCheckedLabel = () => {
    const {checkedLabel} = this.props;
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
    const {uncheckedLabel} = this.props;
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
      paddleStyle
    } = this.props;

    return (
      <div className={cx(containerClassName, this.getClassNames())} style={containerStyle}>
        <input
          {...this.props}
          className={cx(className, this.getInputClassNames())}
          onChange={this.handleInputChange}
          ref={this.handleInputRef}
          size={null}
          type='checkbox'
        />
        <label
          className={cx(paddleClassName, this.getPaddleClassNames())}
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
