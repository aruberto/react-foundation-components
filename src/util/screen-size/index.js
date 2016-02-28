import { PropTypes } from 'react';
import { SCREEN_SIZES, LARGER_SCREEN_SIZES } from '../constants';

function processScreenSizeClassNames(classNameMapping = {}, callback) {
  Object.keys(classNameMapping).forEach((baseClassName) => {
    const { basePropName, range, rangeMin, rangeMax, skipSmall } = classNameMapping[baseClassName];
    SCREEN_SIZES.forEach((size) => {
      if (!skipSmall || LARGER_SCREEN_SIZES.includes(size)) {
        callback({
          baseClassName,
          basePropName,
          range,
          rangeMin,
          rangeMax,
          size,
        });
      }
    });
  });
}

export function createScreenSizeClassNames(classNameMapping) {
  const classNames = [];

  processScreenSizeClassNames(
    classNameMapping,
    ({ baseClassName, range, rangeMin, rangeMax, size }) => {
      const className = size + (baseClassName ? `-${baseClassName}` : '');

      if (range) {
        for (let column = rangeMin; column <= rangeMax; column++) {
          classNames.push(`${className}-${column}`);
        }
      } else {
        classNames.push(className);
      }
    }
  );

  return classNames;
}

export function createScreenSizePropTypes(classNameMapping) {
  const propTypes = {};

  processScreenSizeClassNames(
    classNameMapping,
    ({ basePropName, range, size }) => {
      propTypes[`${size}${basePropName}`] = range ? PropTypes.number : PropTypes.bool;
    }
  );

  return propTypes;
}

export function createScreenSizeClassNamesFromProps(classNameMapping, props = {}, styles = {}) {
  const classNames = {};

  processScreenSizeClassNames(
    classNameMapping,
    ({ baseClassName, basePropName, range, rangeMin, rangeMax, size }) => {
      const propName = `${size}${basePropName}`;
      const propValue = props[propName];
      const className = size + (baseClassName ? `-${baseClassName}` : '');

      if (range) {
        if (styles[`${className}-${propValue}`]) {
          classNames[styles[`${className}-${propValue}`]] =
            Number.isInteger(propValue) && propValue >= rangeMin && propValue <= rangeMax;
        }
      } else if (styles[className]) {
        classNames[styles[className]] = propValue;
      }
    }
  );

  return classNames;
}
