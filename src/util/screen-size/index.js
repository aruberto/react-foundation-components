import { PropTypes } from 'react';
import includes from 'lodash/includes';
import mapValues from 'lodash/mapValues';
import decapitalize from 'underscore.string/decapitalize';

import { CLASS_NAME_TYPES, SCREEN_SIZES, SCREEN_SIZE_SMALL } from '../constants';

export function createScreenSizeProps(classNameMapping = []) {
  return classNameMapping.reduce(
    (columnAgg, { baseClassName, basePropName, flattenSmall, ...column }) => {
      const props =
        SCREEN_SIZES.reduce(
          (sizeAgg, size) => {
            let className = '';
            let propName = '';

            if (flattenSmall && size === SCREEN_SIZE_SMALL) {
              className = baseClassName;
              propName = decapitalize(basePropName);
            } else {
              className = size + (baseClassName ? `-${baseClassName}` : '');
              propName = `${size}${basePropName}`;
            }

            return {
              ...sizeAgg,
              [propName]: {
                ...column,
                className,
              },
            };
          },
          {}
        );

      return { ...columnAgg, ...props };
    },
    {}
  );
}

export function createScreenSizePropTypes(screenSizeProps = {}) {
  return mapValues(screenSizeProps, ({ type, values }) => {
    if (type === CLASS_NAME_TYPES.RANGE) {
      return PropTypes.number;
    } else if (type === CLASS_NAME_TYPES.ENUM) {
      return PropTypes.oneOf(values);
    }

    return PropTypes.bool;
  });
}

export function createScreenSizeClassNames(screenSizeProps = {}, props = {}) {
  const classNames = {};
  const remainingProps = {};

  Object.keys(props).forEach((prop) => {
    const propValue = props[prop];

    if (screenSizeProps[prop]) {
      const { className, type, min, max, values } = screenSizeProps[prop];

      if (type === CLASS_NAME_TYPES.RANGE) {
        classNames[`${className}-${propValue}`] =
          Number.isInteger(propValue) && propValue >= min && propValue <= max;
      } else if (type === CLASS_NAME_TYPES.ENUM) {
        classNames[`${className}-${propValue}`] = includes(values, propValue);
      } else {
        classNames[className] = propValue;
      }
    } else {
      remainingProps[prop] = propValue;
    }
  });

  return { classNames, props: remainingProps };
}
