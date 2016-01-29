import React, {Component, PropTypes} from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import {COMPONENT_COLORS} from '../../util/constants';
import joinObjects from '../../util/join-objects';

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
    value: PropTypes.number
  };

  static defaultProps = {
    max: 100,
    min: 0,
    value: 0
  };

  getClassNames = () => {
    const {color} = this.props;

    return joinObjects(styles, {
      progress: true,
      [color]: COMPONENT_COLORS.includes(color)
    });
  };

  getMeterClassNames = () => joinObjects(styles, {'progress-meter': true});

  getMeterTextClassNames = () => joinObjects(styles, {'progress-meter-text': true});

  renderMeterText = (...args) => {
    const {labelFormatter, meterTextClassName, meterTextStyle} = this.props;
    let result = null;

    if (labelFormatter) {
      result = (
        <span
          className={cx(meterTextClassName, this.getMeterTextClassNames())}
          style={meterTextStyle}
        >
          {labelFormatter(...args)}
        </span>
      );
    }

    return result;
  };

  render() {
    const {className, max, meterClassName, meterStyle, min, value} = this.props;
    const boundedValue = Math.min(Math.max(min, value), max);
    const percent = Math.round(((boundedValue - min) / (max - min) * 100) * 1000) / 1000;

    return (
      <div
        {...this.props}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={boundedValue}
        className={cx(className, this.getClassNames())}
        role='progressbar'
      >
        <span
          className={cx(meterClassName, this.getMeterClassNames())}
          style={{...meterStyle, width: `${percent}%`}}
        >
          {this.renderMeterText(percent, boundedValue, min, max)}
        </span>
      </div>
    );
  }
}
