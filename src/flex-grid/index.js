import {PropTypes} from 'react';

import style from './style.scss';
import {SIZES, classNamesMapper, createWrapperComponent} from '../util';

const HORIZONTAL_ALIGNMENTS = ['right', 'center', 'justify', 'spaced'];
const VERTICAL_ALIGNMENTS = ['top', 'middle', 'bottom', 'stretch'];

// unstack and expand should skip small ...

const rowClassNameToPropMapping = {
  unstack: {
    basePropName: 'Unstack',
    isNumber: false
  },
  collapse: {
    basePropName: 'Collapse',
    isNumber: false
  },
  uncollapse: {
    basePropName: 'Uncollapse',
    isNumber: false
  }
};
const columnClassNameToPropMapping = {
  '': {
    basePropName: '',
    isNumber: true
  },
  expand: {
    basePropName: 'Expand',
    isNumber: false
  },
  offset: {
    basePropName: 'Offset',
    isNumber: true
  },
  order: {
    basePropName: 'Order',
    isNumber: true
  }
};
const rowPropTypes = {
  horizontalAlignment: PropTypes.oneOf(HORIZONTAL_ALIGNMENTS),
  verticalAlignment: PropTypes.oneOf(VERTICAL_ALIGNMENTS)
};
const columnPropTypes = {
  shrink: PropTypes.bool,
  verticalAlignment: PropTypes.oneOf(VERTICAL_ALIGNMENTS)
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
  mapPropsToClassNames: ({horizontalAlignment, verticalAlignment, ...props}) => {
    const classNames = getSizeClassNames(rowClassNameToPropMapping, props);

    classNames.row = true;
    classNames[`align-${horizontalAlignment}`] =
      HORIZONTAL_ALIGNMENTS.includes(horizontalAlignment);
    classNames[`align-${verticalAlignment}`] = VERTICAL_ALIGNMENTS.includes(verticalAlignment);

    return classNamesMapper(style, classNames);
  },
  defaultComponentClass: 'div',
  collapseOnlyChild: false
});

export const Column = createWrapperComponent({
  displayName: 'Column',
  propTypes: columnPropTypes,
  mapPropsToClassNames: ({shrink, verticalAlignment, ...props}) => {
    const classNames = getSizeClassNames(columnClassNameToPropMapping, props);

    classNames.column = true;
    classNames.shrink = shrink;
    classNames[`align-${verticalAlignment}`] = VERTICAL_ALIGNMENTS.includes(verticalAlignment);

    return classNamesMapper(style, classNames);
  },
  defaultComponentClass: 'div',
  collapseOnlyChild: false
});
