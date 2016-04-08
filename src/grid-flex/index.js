import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';

import {
  SCREEN_SIZES,
  LARGER_SCREEN_SIZES,
  FLEX_GRID_ROW_CLASS_NAMES,
  FLEX_GRID_COLUMN_CLASS_NAMES,
} from '../util/constants';
import {
  createScreenSizePropTypes,
  createScreenSizeClassNamesFromProps,
} from '../util/screen-size';
import { FlexParent, FlexChild } from '../flex';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const Row = ({
  className,
  collapse,
  expanded,
  unstack,
  ...restProps,
}) => {
  const classNames =
    cx(
      className,
      cxStyles(
        'row',
        createScreenSizeClassNamesFromProps(FLEX_GRID_ROW_CLASS_NAMES, restProps),
        {
          collapse,
          expanded,
          [`${unstack}-unstack`]: includes(LARGER_SCREEN_SIZES, unstack),
        }
      )
    );

  return <FlexParent {...restProps} className={classNames} />;
};

Row.propTypes = {
  ...createScreenSizePropTypes(FLEX_GRID_ROW_CLASS_NAMES),
  className: PropTypes.string,
  collapse: PropTypes.bool,
  expanded: PropTypes.bool,
  unstack: PropTypes.oneOf(SCREEN_SIZES),
};

export const Column = ({
  className,
  expand,
  shrink,
  ...restProps,
}) => {
  const classNames =
    cx(
      className,
      cxStyles(
        'column',
        createScreenSizeClassNamesFromProps(FLEX_GRID_COLUMN_CLASS_NAMES, restProps),
        {
          [`${expand}-expand`]: includes(LARGER_SCREEN_SIZES, expand),
          shrink,
        }
      )
    );

  return <FlexChild {...restProps} className={classNames} />;
};

Column.propTypes = {
  ...createScreenSizePropTypes(FLEX_GRID_COLUMN_CLASS_NAMES),
  className: PropTypes.string,
  shrink: PropTypes.bool,
  expand: PropTypes.oneOf(SCREEN_SIZES),
};

export const Grid = { Row, Column };

export default Grid;
