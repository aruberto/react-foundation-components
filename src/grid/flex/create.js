import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import {
  SCREEN_SIZES,
  LARGER_SCREEN_SIZES,
  FLEX_GRID_ROW_CLASS_NAMES,
  FLEX_GRID_COLUMN_CLASS_NAMES,
} from '../../util/constants';
import {
  createScreenSizePropTypes,
  createScreenSizeClassNamesFromProps,
} from '../../util/screen-size';
import DefaultComponent from '../../util/default-component';

export default function create(
  styles,
  FlexParent = DefaultComponent,
  FlexChild = DefaultComponent,
) {
  class Row extends Component {
    static propTypes = {
      ...createScreenSizePropTypes(FLEX_GRID_ROW_CLASS_NAMES),
      className: PropTypes.string,
      collapse: PropTypes.bool,
      expanded: PropTypes.bool,
      unstack: PropTypes.oneOf(SCREEN_SIZES),
    };

    render() {
      const { className, collapse, expanded, unstack } = this.props;

      const classNames = cx(
        className,
        styles.row,
        createScreenSizeClassNamesFromProps(FLEX_GRID_ROW_CLASS_NAMES, this.props, styles),
        {
          [styles.collapse]: collapse,
          [styles.expanded]: expanded,
          [styles[`${unstack}-unstack`]]: LARGER_SCREEN_SIZES.includes(unstack),
        }
      );

      return <FlexParent {...this.props} className={classNames}/>;
    }
  }

  class Column extends Component {
    static propTypes = {
      ...createScreenSizePropTypes(FLEX_GRID_COLUMN_CLASS_NAMES),
      className: PropTypes.string,
      shrink: PropTypes.bool,
      expand: PropTypes.oneOf(SCREEN_SIZES),
    };

    render() {
      const { className, expand, shrink } = this.props;
      const classNames = cx(
        className,
        styles.column,
        createScreenSizeClassNamesFromProps(FLEX_GRID_COLUMN_CLASS_NAMES, this.props, styles),
        {
          [styles[`${expand}-expand`]]: LARGER_SCREEN_SIZES.includes(expand),
          [styles.shrink]: shrink,
        }
      );

      return <FlexChild {...this.props} className={classNames}/>;
    }
  }

  return { Row, Column };
}
