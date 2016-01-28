import React, {Component, PropTypes, isValidElement} from 'react';
import cx from 'classnames';
import elementType from 'react-prop-types/lib/elementType';

export function createWrapperComponent({
  displayName = 'Wrapper',
  propTypes = {},
  mapPropsToClassNames = () => ({}),
  mapPropsToProps = (props) => props,
  defaultComponentClass = 'span',
  collapseOnlyChild = true
} = {}) {
  class Wrapper extends Component {
    static displayName = displayName;

    static propTypes = {
      children: PropTypes.node,
      componentClass: elementType,
      ...propTypes
    };

    render() {
      const {children, componentClass: maybeComponentClass, ...restProps} = this.props;
      const ComponentClass = maybeComponentClass || defaultComponentClass;
      const classNames = mapPropsToClassNames(restProps);
      const props = mapPropsToProps(restProps);

      if (collapseOnlyChild && !maybeComponentClass && isValidElement(children)) {
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
}
