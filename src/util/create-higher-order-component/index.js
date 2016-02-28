import React, { Component, PropTypes, isValidElement } from 'react';
import cx from 'classnames';
import elementType from 'react-prop-types/lib/elementType';

export default function createHigherOrderComponent({
  displayName = 'Wrapper',
  propTypes = {},
  mapPropsToClassNames = () => ({}),
  mapPropsToStyle = () => ({}),
  mapPropsToProps = (props) => props,
  defaultComponentClass = 'span',
  mergeSingleChild = true,
} = {}) {
  class Wrapper extends Component {
    static displayName = displayName;

    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      componentClass: elementType,
      ...propTypes,
    };

    render() {
      const {
        children,
        className,
        componentClass: maybeComponentClass,
        style: baseStyle,
        ...restProps,
      } = this.props;
      const ComponentClass = maybeComponentClass || defaultComponentClass;
      const classNames = mapPropsToClassNames(restProps);
      const style = { ...baseStyle, ...mapPropsToStyle(restProps) };
      const props = mapPropsToProps(restProps);

      if (mergeSingleChild && !maybeComponentClass && isValidElement(children)) {
        return React.cloneElement(children, {
          ...props,
          className: cx(children.props.className, className, classNames),
          style,
        });
      }

      return (
        <ComponentClass {...props} className={cx(className, classNames)} style={style}>
          {children}
        </ComponentClass>
      );
    }
  }

  return Wrapper;
}
