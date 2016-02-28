import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import { COMPONENT_COLORS } from '../util/constants';

export default function create(styles) {
  class ProgressBar extends Component {
    static propTypes = {
      className: PropTypes.string,
      color: PropTypes.oneOf(COMPONENT_COLORS),
      labelFormatter: PropTypes.func,
      max: PropTypes.number,
      meterClassName: PropTypes.string,
      meterStyle: PropTypes.object,
      meterTextClassName: PropTypes.string,
      meterTextStyle: PropTypes.object,
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
      const percent = (boundedValue - min) / (max - min);
      const width = Math.round((percent * 100) * 1000) / 1000;
      const label = this.renderMeterText(percent, boundedValue, min, max);

      return (
        <div
          {...this.props}
          aria-valuemax={max}
          aria-valuemin={min}
          aria-valuenow={boundedValue}
          aria-valuetext={label}
          className={classNames}
          role="progressbar"
        >
          <span className={meterClassNames} style={{ ...meterStyle, width: `${width}%` }}>
            {label}
          </span>
        </div>
      );
    }
  }

  return { ProgressBar };
}
