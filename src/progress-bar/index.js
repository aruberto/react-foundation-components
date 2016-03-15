import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';

import { COMPONENT_COLORS } from '../util/constants';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const ProgressBar = ({
  className,
  color,
  labelFormatter,
  max,
  meterClassName,
  meterStyle,
  meterTextClassName,
  meterTextStyle,
  min,
  value,
  ...restProps,
}) => {
  const classNames =
    cx(className, cxStyles('progress', { [color]: includes(COMPONENT_COLORS, color) }));
  const meterClassNames = cx(meterClassName, cxStyles('progress-meter'));
  const boundedValue = Math.min(Math.max(min, value), max);
  const percent = (boundedValue - min) / (max - min);
  const width = Math.round((percent * 100) * 1000) / 1000;
  let label = null;

  if (labelFormatter) {
    const meterTextClassNames = cx(meterTextClassName, cxStyles('progress-meter-text'));

    label = (
      <span className={meterTextClassNames} style={meterTextStyle}>
        {labelFormatter(percent, boundedValue, min, max)}
      </span>
    );
  }

  return (
    <div
      {...restProps}
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
};

ProgressBar.propTypes = {
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
ProgressBar.defaultProps = {
  max: 100,
  min: 0,
  value: 0,
};

export default ProgressBar;
