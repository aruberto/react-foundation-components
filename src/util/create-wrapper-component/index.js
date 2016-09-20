import React, { PropTypes, Children, cloneElement } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import elementType from 'react-prop-types/lib/elementType';

export default function createWrapperComponent({
  displayName = 'Wrapper',
  styles = {},
  propTypes = {},
  mapProps = props => ({ props, classNames: {}, style: {} }),
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
    const {
      props: mappedProps,
      classNames: mappedClassNames,
      style: mappedStyle,
    } = mapProps(restProps);

    if (noWrap) {
      const child = Children.only(children);
      const childProps = child.props ? child.props : {};

      return cloneElement(child, {
        ...childProps,
        ...mappedProps,
        className: cx(className, child.props.className, cxStyles(mappedClassNames)),
        style: { ...style, ...child.props.style, ...mappedStyle },
      });
    }

    return (
      <ComponentClass
        {...mappedProps}
        className={cx(className, cxStyles(mappedClassNames))}
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
    style: PropTypes.shape({}),
    noWrap: PropTypes.bool,
    ...propTypes,
  };

  return Wrapper;
}
