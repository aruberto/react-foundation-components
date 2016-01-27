import React, {Component, PropTypes, isValidElement} from 'react';
import cx from 'classnames';
import elementType from 'react-prop-types/lib/elementType';

export const NON_SMALL_SIZES = ['medium', 'large', 'xlarge', 'xxlarge'];
export const SIZES = ['small'].concat(NON_SMALL_SIZES);
export const ORIENTATIONS = ['landscape', 'portrait'];

export function classNamesMapper(lookup, classNames) {
  if (lookup && Object.keys(lookup).length) {
    const mappedClassNames = {};

    for (const [key, value] of Object.entries(classNames)) {
      if (lookup[key]) {
        mappedClassNames[lookup[key]] = value;
      }
    }

    return mappedClassNames;
  }

  return classNames;
}

export function createWrapperComponent(mapPropsToClassNames = () => ({})) {
  return function (mapPropsToProps = () => ({})) {
    return function (defaultComponentClass = 'span') {
      class Wrapper extends Component {
        static propTypes = {
          children: PropTypes.node,
          componentClass: elementType
        };

        render() {
          const {children, componentClass: maybeComponentClass, ...restProps} = this.props;
          const ComponentClass = maybeComponentClass || defaultComponentClass;
          const classNames = mapPropsToClassNames(restProps);
          const props = mapPropsToProps(restProps);

          if (!maybeComponentClass && isValidElement(children)) {
            return React.cloneElement(children, {
              ...props,
              className: cx(children.props.className, classNames)
            });
          }

          return (
            <ComponentClass {...props} className={cx(classNames)}>
              {children}
            </ComponentClass>
          );
        }
      }

      return Wrapper;
    };
  };
}
