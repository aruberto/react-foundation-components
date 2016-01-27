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
  },
  offset: {
    basePropName: 'Offset',
    isNumber: true
  },
  centered: {
    basePropName: 'Centered',
    isNumber: false
  },
  uncentered: {
    basePropName: 'Uncentered',
    isNumber: false
  },
  push: {
    basePropName: 'Push',
    isNumber: true
  },
  pull: {
    basePropName: 'Pull',
    isNumber: true
  }
};
const rowPropTypes = {
  fluid: PropTypes.bool
};
const columnPropTypes = {
  end: PropTypes.bool
};

SIZES.forEach((size) => {
  Object.values(rowClassNameToPropMapping).forEach(({basePropName, isNumber}) =>
    rowPropTypes[`${size}${basePropName}`] = isNumber ? PropTypes.number : PropTypes.bool
  );

  Object.values(columnClassNameToPropMapping).forEach(({basePropName, isNumber}) =>
    columnPropTypes[`${size}${basePropName}`] = isNumber ? PropTypes.number : PropTypes.bool
  );
});

function getSizeClassNames(classNameToPropMapping, props) {
  const classNames = {};

  Object.keys(classNameToPropMapping).forEach((baseClassName) =>
    SIZES.forEach((size) => {
      const {basePropName, isNumber} = classNameToPropMapping[baseClassName];
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

  return classNames;
}

export const Row = createWrapperComponent({
  displayName: 'Row',
  propTypes: rowPropTypes,
  mapPropsToClassNames: ({fluid, ...props}) => {
    const classNames = getSizeClassNames(rowClassNameToPropMapping, props);

    classNames.row = true;
    classNames.expanded = fluid;

    return classNamesMapper(style, classNames);
  },
  defaultComponentClass: 'div',
  collapseOnlyChild: false
});

export const Column = createWrapperComponent({
  displayName: 'Column',
  propTypes: columnPropTypes,
  mapPropsToClassNames: ({end, ...props}) => {
    const classNames = getSizeClassNames(columnClassNameToPropMapping, props);

    classNames.column = true;
    classNames.end = end;

    return classNamesMapper(style, classNames);
  },
  defaultComponentClass: 'div',
  collapseOnlyChild: false
});
