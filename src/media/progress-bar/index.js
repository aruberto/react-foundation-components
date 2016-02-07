import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import styles from './styles';
import { COMPONENT_COLORS } from '../../util/constants';

export default class ProgressBar extends Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(COMPONENT_COLORS),
    labelFormatter: PropTypes.func,
    max: PropTypes.number,
    meterClassName: PropTypes.string,
    meterStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    meterTextClassName: PropTypes.string,
    meterTextStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    min: PropTypes.number,
    value: PropTypes.number,
  };

  static defaultProps = {
    max: 100,
    min: 0,
    value: 0,
  };

  renderMeterText = (...args) => {
    const { labelFormatter, meterTextClassName, meterTextStyle } = this.props;
    let result = null;

    if (labelFormatter) {
      const meterTextClassNames = cx(meterTextClassName, styles['progress-meter-text']);

      result = (
        <span className={meterTextClassNames} style={meterTextStyle}>
          {labelFormatter(...args)}
        </span>
      );
    }

    return result;
  };

  render() {
    const { className, color, max, meterClassName, meterStyle, min, value } = this.props;
    const classNames = cx(
      className,
      styles.progress,
      {
        [styles[color]]: COMPONENT_COLORS.includes(color),
      }
    );
    const meterClassNames = cx(meterClassName, styles['progress-meter']);
    const boundedValue = Math.min(Math.max(min, value), max);
    const percent = Math.round(((boundedValue - min) / (max - min) * 100) * 1000) / 1000;

    return (
      <div
        {...this.props}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={boundedValue}
        className={classNames}
        role="progressbar"
      >
        <span className={meterClassNames} style={{ ...meterStyle, width: `${percent}%` }}>
          {this.renderMeterText(percent, boundedValue, min, max)}
        </span>
      </div>
    );
  }
}
