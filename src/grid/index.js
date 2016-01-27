import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import elementType from 'react-prop-types/lib/elementType';

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

export class Row extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    componentClass: elementType,
    fluid: PropTypes.bool
  };

  static defaultProps = {
    componentClass: 'div'
  };

  getClassNames = () => {
    const {fluid} = this.props;
    const classNames = {
      row: true,
      expanded: fluid
    };

    Object.keys(rowClassNameToPropMapping).forEach((baseClassName) =>
      SIZES.forEach((size) => {
        const {basePropName, isNumber} = rowClassNameToPropMapping[baseClassName];
        const propName = `${size}${basePropName}`;
        const propValue = this.props[propName];
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
  };

  render() {
    const {children, className, componentClass: ComponentClass} = this.props;

    return (
      <ComponentClass className={cx(className, this.getClassNames())}>
        {children}
      </ComponentClass>
    );
  }
}

Object.values(rowClassNameToPropMapping).forEach(({basePropName, isNumber}) =>
  SIZES.forEach((size) =>
    Row.propTypes[`${size}${basePropName}`] = isNumber ? PropTypes.number : PropTypes.bool
  )
);

export const Column = createWrapperComponent(
  (props) => {
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
  }
)()();

Column.propTypes = {
  ...Column.propTypes
};

Column.displayName = 'Column';

Object.values(columnClassNameToPropMapping).forEach(({basePropName, isNumber}) =>
  SIZES.forEach((size) =>
    Column.propTypes[`${size}${basePropName}`] = isNumber ? PropTypes.number : PropTypes.bool
  )
);
