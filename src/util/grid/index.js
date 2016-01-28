import {PropTypes} from 'react';
import {SCREEN_SIZES, SMALLER_SCREEN_SIZES} from '../constants';

export function createGridScreenSizePropTypes(rowMapping = {}, columnMapping = {}) {
  const rowPropTypes = {};
  const columnPropTypes = {};

  SCREEN_SIZES.forEach((size) => {
    Object.values(rowMapping).forEach(({basePropName, isNumber, skipSmall}) => {
      if (!skipSmall || !SMALLER_SCREEN_SIZES.includes(size)) {
        rowPropTypes[`${size}${basePropName}`] = isNumber ? PropTypes.number : PropTypes.bool;
      }
    });

    Object.values(columnMapping).forEach(({basePropName, isNumber, skipSmall}) => {
      if (!skipSmall || !SMALLER_SCREEN_SIZES.includes(size)) {
        columnPropTypes[`${size}${basePropName}`] = isNumber ? PropTypes.number : PropTypes.bool;
      }
    });
  });

  return {rowPropTypes, columnPropTypes};
}

export function createScreenSizeClassNamesFromProps(classNameMapping = {}, props = {}) {
  const classNames = {};

  Object.keys(classNameMapping).forEach((baseClassName) =>
    SCREEN_SIZES.forEach((size) => {
      const {basePropName, isNumber} = classNameMapping[baseClassName];
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
