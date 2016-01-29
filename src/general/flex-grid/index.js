import {PropTypes} from 'react';

import styles from './styles.scss';
import joinObjects from '../../util/join-objects';
import createHigherOrderComponent from '../../util/create-higher-order-component';
import {createGridScreenSizePropTypes, createScreenSizeClassNamesFromProps} from '../../util/grid';

export const GRID_HORIZONTAL_ALIGNMENTS = ['right', 'center', 'justify', 'spaced'];
export const GRID_VERTICAL_ALIGNMENTS = ['top', 'middle', 'bottom', 'stretch'];

const rowClassNameToPropMapping = {
  unstack: {
    basePropName: 'Unstack',
    isNumber: false,
    skipSmall: true
  },
  collapse: {
    basePropName: 'Collapse',
    isNumber: false,
    skipSmall: false
  },
  uncollapse: {
    basePropName: 'Uncollapse',
    isNumber: false,
    skipSmall: false
  }
};
const columnClassNameToPropMapping = {
  '': {
    basePropName: '',
    isNumber: true,
    skipSmall: false
  },
  expand: {
    basePropName: 'Expand',
    isNumber: false,
    skipSmall: true
  },
  offset: {
    basePropName: 'Offset',
    isNumber: true,
    skipSmall: false
  },
  order: {
    basePropName: 'Order',
    isNumber: true,
    skipSmall: false
  }
};
const {rowPropTypes, columnPropTypes} =
  createGridScreenSizePropTypes(rowClassNameToPropMapping, columnClassNameToPropMapping);

rowPropTypes.horizontalAlignment = PropTypes.oneOf(GRID_HORIZONTAL_ALIGNMENTS);
rowPropTypes.verticalAlignment = PropTypes.oneOf(GRID_VERTICAL_ALIGNMENTS);
columnPropTypes.shrink = PropTypes.bool;
columnPropTypes.verticalAlignment = PropTypes.oneOf(GRID_VERTICAL_ALIGNMENTS);

export const Row = createHigherOrderComponent({
  displayName: 'Row',
  propTypes: rowPropTypes,
  mapPropsToClassNames: ({horizontalAlignment, verticalAlignment, ...props}) => {
    const classNames = createScreenSizeClassNamesFromProps(rowClassNameToPropMapping, props);

    classNames.row = true;
    classNames[`align-${horizontalAlignment}`] =
      GRID_HORIZONTAL_ALIGNMENTS.includes(horizontalAlignment);
    classNames[`align-${verticalAlignment}`] = GRID_VERTICAL_ALIGNMENTS.includes(verticalAlignment);

    return joinObjects(styles, classNames);
  },
  defaultComponentClass: 'div',
  collapseOnlyChild: false
});

export const Column = createHigherOrderComponent({
  displayName: 'Column',
  propTypes: columnPropTypes,
  mapPropsToClassNames: ({shrink, verticalAlignment, ...props}) => {
    const classNames = createScreenSizeClassNamesFromProps(columnClassNameToPropMapping, props);

    classNames.column = true;
    classNames.shrink = shrink;
    classNames[`align-${verticalAlignment}`] = GRID_VERTICAL_ALIGNMENTS.includes(verticalAlignment);

    return joinObjects(styles, classNames);
  }
});
