import {PropTypes} from 'react';

import style from './style.scss';
import {
  SCREEN_SIZES,
  SMALLER_SCREEN_SIZES,
  GRID_HORIZONTAL_ALIGNMENTS,
  GRID_VERTICAL_ALIGNMENTS
} from '../util/constants';
import joinObjects from '../util/join-objects';
import createHigherOrderComponent from '../util/create-higher-order-component';

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
const rowPropTypes = {
  horizontalAlignment: PropTypes.oneOf(GRID_HORIZONTAL_ALIGNMENTS),
  verticalAlignment: PropTypes.oneOf(GRID_VERTICAL_ALIGNMENTS)
};
const columnPropTypes = {
  shrink: PropTypes.bool,
  verticalAlignment: PropTypes.oneOf(GRID_VERTICAL_ALIGNMENTS)
};

SCREEN_SIZES.forEach((size) => {
  Object.values(rowClassNameToPropMapping).forEach(({basePropName, isNumber, skipSmall}) => {
    if (!skipSmall || !SMALLER_SCREEN_SIZES.includes(size)) {
      rowPropTypes[`${size}${basePropName}`] = isNumber ? PropTypes.number : PropTypes.bool;
    }
  });

  Object.values(columnClassNameToPropMapping).forEach(({basePropName, isNumber, skipSmall}) => {
    if (!skipSmall || !SMALLER_SCREEN_SIZES.includes(size)) {
      columnPropTypes[`${size}${basePropName}`] = isNumber ? PropTypes.number : PropTypes.bool;
    }
  });
});

function getSizeClassNames(classNameToPropMapping, props) {
  const classNames = {};

  Object.keys(classNameToPropMapping).forEach((baseClassName) =>
    SCREEN_SIZES.forEach((size) => {
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

export const Row = createHigherOrderComponent({
  displayName: 'Row',
  propTypes: rowPropTypes,
  mapPropsToClassNames: ({horizontalAlignment, verticalAlignment, ...props}) => {
    const classNames = getSizeClassNames(rowClassNameToPropMapping, props);

    classNames.row = true;
    classNames[`align-${horizontalAlignment}`] =
      GRID_HORIZONTAL_ALIGNMENTS.includes(horizontalAlignment);
    classNames[`align-${verticalAlignment}`] = GRID_VERTICAL_ALIGNMENTS.includes(verticalAlignment);

    return joinObjects(style, classNames);
  },
  defaultComponentClass: 'div',
  collapseOnlyChild: false
});

export const Column = createHigherOrderComponent({
  displayName: 'Column',
  propTypes: columnPropTypes,
  mapPropsToClassNames: ({shrink, verticalAlignment, ...props}) => {
    const classNames = getSizeClassNames(columnClassNameToPropMapping, props);

    classNames.column = true;
    classNames.shrink = shrink;
    classNames[`align-${verticalAlignment}`] = GRID_VERTICAL_ALIGNMENTS.includes(verticalAlignment);

    return joinObjects(style, classNames);
  },
  defaultComponentClass: 'div',
  collapseOnlyChild: false
});
