import React, { Component, PropTypes } from 'react';
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

export class Row extends Component {
  static propTypes = {
    ...createScreenSizePropTypes(FLEX_GRID_ROW_CLASS_NAMES),
    className: PropTypes.string,
    collapse: PropTypes.bool,
    expanded: PropTypes.bool,
    unstack: PropTypes.oneOf(SCREEN_SIZES),
  };

  render() {
    const { className, collapse, expanded, unstack } = this.props;
    const classNames =
      cx(
        className,
        cxStyles(
          'row',
          createScreenSizeClassNamesFromProps(FLEX_GRID_ROW_CLASS_NAMES, this.props),
          {
            collapse,
            expanded,
            [`${unstack}-unstack`]: includes(LARGER_SCREEN_SIZES, unstack),
          }
        )
      );

    return <FlexParent {...this.props} className={classNames} />;
  }
}

export class Column extends Component {
  static propTypes = {
    ...createScreenSizePropTypes(FLEX_GRID_COLUMN_CLASS_NAMES),
    className: PropTypes.string,
    shrink: PropTypes.bool,
    expand: PropTypes.oneOf(SCREEN_SIZES),
  };

  render() {
    const { className, expand, shrink } = this.props;
    const classNames =
      cx(
        className,
        cxStyles(
          'column',
          createScreenSizeClassNamesFromProps(FLEX_GRID_COLUMN_CLASS_NAMES, this.props),
          {
            [`${expand}-expand`]: includes(LARGER_SCREEN_SIZES, expand),
            shrink,
          }
        )
      );

    return <FlexChild {...this.props} className={classNames} />;
  }
}

export const Grid = { Row, Column };

export default Grid;
