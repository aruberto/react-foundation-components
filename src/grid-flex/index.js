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
  createScreenSizeProps,
  createScreenSizePropTypes,
  createScreenSizeClassNames,
} from '../util/screen-size';
import { FlexParent, FlexChild } from '../flex';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

const rowProps = createScreenSizeProps(FLEX_GRID_ROW_CLASS_NAMES);
const columnProps = createScreenSizeProps(FLEX_GRID_COLUMN_CLASS_NAMES);

export const Row = ({
  className,
  collapse,
  expanded,
  unstack,
  ...restProps,
}) => {
  const {
    classNames: screenSizeClassNames,
    props,
  } = createScreenSizeClassNames(rowProps, restProps);
  const classNames =
    cx(
      className,
      cxStyles(
        'row',
        {
          ...screenSizeClassNames,
          collapse,
          expanded,
          [`${unstack}-unstack`]: includes(LARGER_SCREEN_SIZES, unstack),
        }
      )
    );

  return <FlexParent {...props} className={classNames} />;
};

Row.propTypes = {
  ...createScreenSizePropTypes(rowProps),
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
  const {
    classNames: screenSizeClassNames,
    props,
  } = createScreenSizeClassNames(columnProps, restProps);
  const classNames =
    cx(
      className,
      cxStyles(
        'column',
        {
          ...screenSizeClassNames,
          [`${expand}-expand`]: includes(LARGER_SCREEN_SIZES, expand),
          shrink,
        }
      )
    );

  return <FlexChild {...props} className={classNames} />;
};

Column.propTypes = {
  ...createScreenSizePropTypes(columnProps),
  className: PropTypes.string,
  shrink: PropTypes.bool,
  expand: PropTypes.oneOf(SCREEN_SIZES),
};

export const Grid = { Row, Column };

export default Grid;
