import { PropTypes } from 'react';
import { GRID_COLUMN_MIN, GRID_COLUMN_MAX, SCREEN_SIZES, LARGER_SCREEN_SIZES } from '../constants';

export function createScreenSizeClassNames(classNameMapping = {}) {
  const classNames = [];

  Object.keys(classNameMapping).forEach((baseClassName) => {
    const { isNumber, skipSmall } = classNameMapping[baseClassName];

    SCREEN_SIZES.forEach((size) => {
      if (!skipSmall || LARGER_SCREEN_SIZES.includes(size)) {
        const className = size + (baseClassName ? `-${baseClassName}` : '');

        if (isNumber) {
          for (let column = GRID_COLUMN_MIN; column <= GRID_COLUMN_MAX; column += 1) {
            classNames.push(`${className}-${column}`);
          }
        } else {
          classNames.push(className);
        }
      }
    });
  });

  return classNames;
}

export function createScreenSizePropTypes(classNameMapping = {}) {
  const propTypes = {};

  SCREEN_SIZES.forEach((size) => {
    Object.values(classNameMapping).forEach(({ basePropName, isNumber, skipSmall }) => {
      if (!skipSmall || LARGER_SCREEN_SIZES.includes(size)) {
        propTypes[`${size}${basePropName}`] = isNumber ? PropTypes.number : PropTypes.bool;
      }
    });
  });

  return propTypes;
}

export function createScreenSizeClassNamesFromProps(
  classNameMapping = {},
  props = {},
  styles = {}
) {
  const classNames = {};

  Object.keys(classNameMapping).forEach((baseClassName) => {
    const { basePropName, isNumber, skipSmall } = classNameMapping[baseClassName];

    SCREEN_SIZES.forEach((size) => {
      if (!skipSmall || LARGER_SCREEN_SIZES.includes(size)) {
        const propName = `${size}${basePropName}`;
        const propValue = props[propName];
        const className = size + (baseClassName ? `-${baseClassName}` : '');

        if (isNumber) {
          if (styles[`${className}-${propValue}`]) {
            classNames[styles[`${className}-${propValue}`]] =
              Number.isFinite(propValue)
              && propValue >= GRID_COLUMN_MIN
              && propValue <= GRID_COLUMN_MAX;
          }
        } else if (styles[className]) {
          classNames[styles[className]] = propValue;
        }
      }
    });
  });

  return classNames;
}
