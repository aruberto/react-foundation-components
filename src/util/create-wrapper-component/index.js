import React, { PropTypes, Children, cloneElement } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import elementType from 'react-prop-types/lib/elementType';

export default function createWrapperComponent({
  displayName = 'Wrapper',
  styles = {},
  propTypes = {},
  mapPropsToClassNames = () => ({}),
  mapPropsToStyle = () => ({}),
  mapPropsToProps = (props) => props,
  defaultComponentClass = 'span',
} = {}) {
  const cxStyles = cxBinder.bind(styles);
  const Wrapper = ({
    children,
    className,
    componentClass,
    style,
    noWrap,
    ...restProps,
  }) => {
    const ComponentClass = componentClass || defaultComponentClass;
    const mappedProps = mapPropsToProps(restProps);
    const mappedClassNames = cxStyles(mapPropsToClassNames(restProps));
    const mappedStyle = mapPropsToStyle(restProps);

    if (noWrap) {
      const child = Children.only(children);
      const childProps = child.props ? child.props : {};

      return cloneElement(child, {
        ...restProps,
        ...childProps,
        ...mappedProps,
        className: cx(className, child.props.className, mappedClassNames),
        style: { ...style, ...child.props.style, ...mappedStyle },
      });
    }

    return (
      <ComponentClass
        {...restProps}
        {...mappedProps}
        className={cx(className, mappedClassNames)}
        style={{ ...style, ...mappedStyle }}
      >
        {children}
      </ComponentClass>
    );
  };

  Wrapper.displayName = displayName;
  Wrapper.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    componentClass: elementType,
    style: PropTypes.object,
    noWrap: PropTypes.bool,
    ...propTypes,
  };

  return Wrapper;
}
