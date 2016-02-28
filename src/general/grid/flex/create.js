import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import {
  FLEX_GRID_ROW_CLASS_NAMES,
  FLEX_GRID_COLUMN_CLASS_NAMES,
} from '../../../util/constants';
import {
  createScreenSizePropTypes,
  createScreenSizeClassNamesFromProps,
} from '../../../util/screen-size';
import DefaultComponent from '../../../util/default-component';

const rowPropTypes = createScreenSizePropTypes(FLEX_GRID_ROW_CLASS_NAMES);
rowPropTypes.className = PropTypes.string;
rowPropTypes.collapse = PropTypes.bool;
rowPropTypes.expanded = PropTypes.bool;

const columnPropTypes = createScreenSizePropTypes(FLEX_GRID_COLUMN_CLASS_NAMES);
columnPropTypes.className = PropTypes.string;
columnPropTypes.shrink = PropTypes.bool;

export default function create(
  styles,
  FlexParent = DefaultComponent,
  FlexChild = DefaultComponent
) {
  class Row extends Component {
    static propTypes = rowPropTypes;

    render() {
      const { className, collapse, expanded } = this.props;
      const classNames = cx(
        className,
        styles.row,
        createScreenSizeClassNamesFromProps(FLEX_GRID_ROW_CLASS_NAMES, this.props, styles),
        {
          [styles.collapse]: collapse,
          [styles.expanded]: expanded,
        }
      );

      return <FlexParent {...this.props} className={classNames} componentClass="div"/>;
    }
  }

  class Column extends Component {
    static propTypes = columnPropTypes;

    render() {
      const { className, shrink } = this.props;
      const classNames = cx(
        className,
        styles.column,
        createScreenSizeClassNamesFromProps(FLEX_GRID_COLUMN_CLASS_NAMES, this.props, styles),
        {
          [styles.shrink]: shrink,
        }
      );

      return <FlexChild {...this.props} className={classNames}/>;
    }
  }

  return { Row, Column };
}
