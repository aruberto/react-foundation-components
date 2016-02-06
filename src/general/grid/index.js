import {PropTypes} from 'react';

import styles from './styles';
import {FLOAT_GRID_ROW_CLASS_NAMES, FLOAT_GRID_COLUMN_CLASS_NAMES} from '../../util/constants';
import createHigherOrderComponent from '../../util/create-higher-order-component';
import {createScreenSizePropTypes, createScreenSizeClassNamesFromProps} from '../../util/grid';

const rowPropTypes = createScreenSizePropTypes(FLOAT_GRID_ROW_CLASS_NAMES);
const columnPropTypes = createScreenSizePropTypes(FLOAT_GRID_COLUMN_CLASS_NAMES);

rowPropTypes.expanded = PropTypes.bool;
columnPropTypes.end = PropTypes.bool;

export const Row = createHigherOrderComponent({
  displayName: 'Row',
  propTypes: rowPropTypes,
  mapPropsToClassNames: (props) => {
    const {expanded} = props;
    const classNames =
      createScreenSizeClassNamesFromProps(FLOAT_GRID_ROW_CLASS_NAMES, props, styles);

    classNames[styles.row] = true;
    classNames[styles.expanded] = expanded;

    return classNames;
  },
  defaultComponentClass: 'div',
  collapseOnlyChild: false
});

export const Column = createHigherOrderComponent({
  displayName: 'Column',
  propTypes: columnPropTypes,
  mapPropsToClassNames: (props) => {
    const {end} = props;
    const classNames =
      createScreenSizeClassNamesFromProps(FLOAT_GRID_COLUMN_CLASS_NAMES, props, styles);

    classNames[styles.column] = true;
    classNames[styles.end] = end;

    return classNames;
  }
});
