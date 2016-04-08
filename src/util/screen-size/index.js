import { PropTypes } from 'react';
import includes from 'lodash/includes';
import decapitalize from 'underscore.string/decapitalize';

import { CLASS_NAME_TYPES, SCREEN_SIZES, SCREEN_SIZE_SMALL } from '../constants';

function processScreenSizeClassNames(classNameMapping = [], callback) {
  classNameMapping.forEach(
    ({ baseClassName, basePropName, type, min, max, values, flattenSmall }) =>
      SCREEN_SIZES.forEach((size) => {
        let className = '';
        let propName = '';

        if (flattenSmall && size === SCREEN_SIZE_SMALL) {
          className = baseClassName;
          propName = decapitalize(basePropName);
        } else {
          className = size + (baseClassName ? `-${baseClassName}` : '');
          propName = `${size}${basePropName}`;
        }

        callback({ className, propName, type, min, max, values });
      })
  );
}

export function createScreenSizeClassNames(classNameMapping) {
  const classNames = [];

  processScreenSizeClassNames(
    classNameMapping,
    ({ className, type, min, max, values }) => {
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
    ({ propName, type, values }) => {
      let propType = PropTypes.bool;
      if (type === CLASS_NAME_TYPES.RANGE) {
        propType = PropTypes.number;
      } else if (type === CLASS_NAME_TYPES.ENUM) {
        propType = PropTypes.oneOf(values);
      }

      propTypes[propName] = propType;
    }
  );

  return propTypes;
}

export function createScreenSizeClassNamesFromProps(classNameMapping, props = {}) {
  const classNames = {};

  processScreenSizeClassNames(
    classNameMapping,
    ({ className, propName, type, min, max, values }) => {
      const propValue = props[propName];

      if (type === CLASS_NAME_TYPES.RANGE) {
        classNames[`${className}-${propValue}`] =
          Number.isInteger(propValue) && propValue >= min && propValue <= max;
      } else if (type === CLASS_NAME_TYPES.ENUM) {
        classNames[`${className}-${propValue}`] = includes(values, propValue);
      } else {
        classNames[className] = propValue;
      }
    }
  );

  return classNames;
}
