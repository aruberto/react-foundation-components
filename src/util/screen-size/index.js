import { PropTypes } from 'react';
import { CLASS_NAME_TYPES, SCREEN_SIZES, LARGER_SCREEN_SIZES } from '../constants';

function processScreenSizeClassNames(classNameMapping = [], callback) {
  classNameMapping.forEach(({ baseClassName, basePropName, type, min, max, values, largeOnly }) => {
    SCREEN_SIZES.forEach((size) => {
      if (!largeOnly || LARGER_SCREEN_SIZES.includes(size)) {
        callback({ baseClassName, basePropName, type, min, max, values, size });
      }
    });
  });
}

export function createScreenSizeClassNames(classNameMapping) {
  const classNames = [];

  processScreenSizeClassNames(
    classNameMapping,
    ({ baseClassName, type, min, max, values, size }) => {
      const className = size + (baseClassName ? `-${baseClassName}` : '');

      if (type === CLASS_NAME_TYPES.RANGE) {
        for (let i = min; i <= max; i++) {
          classNames.push(`${className}-${i}`);
        }
      } else if (type === CLASS_NAME_TYPES.ENUM) {
        values.forEach((value) => classNames.push(`${className}-${value}`));
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
    ({ basePropName, type, values, size }) => {
      let propType = PropTypes.bool;
      if (type === CLASS_NAME_TYPES.RANGE) {
        propType = PropTypes.number;
      } else if (type === CLASS_NAME_TYPES.ENUM) {
        propType = PropTypes.oneOf(values);
      }

      propTypes[`${size}${basePropName}`] = propType;
    }
  );

  return propTypes;
}

export function createScreenSizeClassNamesFromProps(classNameMapping, props = {}, styles = {}) {
  const classNames = {};

  processScreenSizeClassNames(
    classNameMapping,
    ({ baseClassName, basePropName, type, min, max, values, size }) => {
      const propName = `${size}${basePropName}`;
      const propValue = props[propName];
      const className = size + (baseClassName ? `-${baseClassName}` : '');

      if (type === CLASS_NAME_TYPES.RANGE) {
        if (styles[`${className}-${propValue}`]) {
          classNames[styles[`${className}-${propValue}`]] =
            Number.isInteger(propValue) && propValue >= min && propValue <= max;
        }
      } else if (type === CLASS_NAME_TYPES.ENUM) {
        if (styles[`${className}-${propValue}`]) {
          classNames[styles[`${className}-${propValue}`]] = values.includes(propValue);
        }
      } else if (styles[className]) {
        classNames[styles[className]] = propValue;
      }
    }
  );

  return classNames;
}
