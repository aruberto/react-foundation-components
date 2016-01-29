import {PropTypes} from 'react';

import styles from './styles.scss';
import joinObjects from '../../util/join-objects';
import createHigherOrderComponent from '../../util/create-higher-order-component';
import {createGridScreenSizePropTypes, createScreenSizeClassNamesFromProps} from '../../util/grid';

const rowClassNameToPropMapping = {
  collapse: {
    basePropName: 'Collapse',
    isNumber: false,
    skipSmall: false
  },
  uncollapse: {
    basePropName: 'Uncollapse',
    isNumber: false,
    skipSmall: false
  },
  up: {
    basePropName: 'Up',
    isNumber: true,
    skipSmall: false
  }
};
const columnClassNameToPropMapping = {
  '': {
    basePropName: '',
    isNumber: true,
    skipSmall: false
  },
  offset: {
    basePropName: 'Offset',
    isNumber: true,
    skipSmall: false
  },
  centered: {
    basePropName: 'Centered',
    isNumber: false,
    skipSmall: false
  },
  uncentered: {
    basePropName: 'Uncentered',
    isNumber: false,
    skipSmall: false
  },
  push: {
    basePropName: 'Push',
    isNumber: true,
    skipSmall: false
  },
  pull: {
    basePropName: 'Pull',
    isNumber: true,
    skipSmall: false
  }
};

const {rowPropTypes, columnPropTypes} =
  createGridScreenSizePropTypes(rowClassNameToPropMapping, columnClassNameToPropMapping);

rowPropTypes.expanded = PropTypes.bool;
columnPropTypes.end = PropTypes.bool;

export const Row = createHigherOrderComponent({
  displayName: 'Row',
  propTypes: rowPropTypes,
  mapPropsToClassNames: ({expanded, ...props}) => {
    const classNames = createScreenSizeClassNamesFromProps(rowClassNameToPropMapping, props);

    classNames.row = true;
    classNames.expanded = expanded;

    return joinObjects(styles, classNames);
  },
  collapseOnlyChild: false
});

export const Column = createHigherOrderComponent({
  displayName: 'Column',
  propTypes: columnPropTypes,
  mapPropsToClassNames: ({end, ...props}) => {
    const classNames = createScreenSizeClassNamesFromProps(columnClassNameToPropMapping, props);

    classNames.column = true;
    classNames.end = end;

    return joinObjects(styles, classNames);
  },
  collapseOnlyChild: false
});
