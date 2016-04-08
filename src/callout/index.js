import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';

import { CALLOUT_SIZES, COMPONENT_COLORS } from '../util/constants';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const Callout = ({
  className,
  color,
  size,
  ...restProps,
}) => {
  const classNames =
    cx(
      className,
      cxStyles(
        'callout',
        {
          [color]: includes(COMPONENT_COLORS, color),
          [size]: includes(CALLOUT_SIZES, size),
        }
      )
    );

  return <div {...restProps} className={classNames} />;
};

Callout.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(COMPONENT_COLORS),
  size: PropTypes.oneOf(CALLOUT_SIZES),
};

export default Callout;
