import {PropTypes} from 'react';

import style from './style.scss';
import {SIZES, classNamesMapper, createWrapperComponent} from '../util';

const rowClassNameToPropMapping = {
  collapse: {
    basePropName: 'Collapse',
    isNumber: false
  },
  uncollapse: {
    basePropName: 'Uncollapse',
    isNumber: false
  },
  up: {
    basePropName: 'Up',
    isNumber: true
  }
};
const columnClassNameToPropMapping = {
  '': {
    basePropName: '',
    isNumber: true
  }
};
const rowPropTypes = {};
const columnPropTypes = {};

SIZES.forEach((size) => {
  Object.values(rowClassNameToPropMapping).forEach(({basePropName, isNumber}) =>
    rowPropTypes[`${size}${basePropName}`] = isNumber ? PropTypes.number : PropTypes.bool
  );

  Object.values(columnClassNameToPropMapping).forEach(({basePropName, isNumber}) =>
    columnPropTypes[`${size}${basePropName}`] = isNumber ? PropTypes.number : PropTypes.bool
  );
});

export const Row = createWrapperComponent({
  displayName: 'Row',
  propTypes: rowPropTypes,
  mapPropsToClassNames: ({fluid, ...props}) => {
    const classNames = {
      row: true,
      expanded: fluid
    };

    Object.keys(rowClassNameToPropMapping).forEach((baseClassName) =>
      SIZES.forEach((size) => {
        const {basePropName, isNumber} = rowClassNameToPropMapping[baseClassName];
        const propName = `${size}${basePropName}`;
        const propValue = props[propName];
        const className = size + (baseClassName ? `-${baseClassName}` : '');

        if (isNumber) {
          if (Number.isFinite(propValue) && propValue >= 0) {
            classNames[`${className}-${propValue}`] = true;
          }
        } else {
          classNames[className] = propValue;
        }
      })
    );

    return classNamesMapper(style, classNames);
  },
  defaultComponentClass: 'div'
});

export const Column = createWrapperComponent({
  displayName: 'Column',
  propTypes: columnPropTypes,
  mapPropsToClassNames: (props) => {
    const classNames = {
      column: true
    };

    Object.keys(columnClassNameToPropMapping).forEach((baseClassName) =>
      SIZES.forEach((size) => {
        const {basePropName, isNumber} = columnClassNameToPropMapping[baseClassName];
        const propName = `${size}${basePropName}`;
        const propValue = props[propName];
        const className = size + (baseClassName ? `-${baseClassName}` : '');

        if (isNumber) {
          if (Number.isFinite(propValue) && propValue >= 0) {
            classNames[`${className}-${propValue}`] = true;
          }
        } else {
          classNames[className] = propValue;
        }
      })
    );

    return classNamesMapper(style, classNames);
  },
  defaultComponentClass: 'div'
});
