import React, { Component, PropTypes } from 'react';
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

  class Wrapper extends Component {
    static displayName = displayName;

    static propTypes = {
      className: PropTypes.string,
      componentClass: elementType,
      style: PropTypes.object,
      ...propTypes,
    };

    render() {
      const {
        className: baseClassName,
        componentClass: maybeComponentClass,
        style: baseStyle,
        ...restProps,
      } = this.props;
      const ComponentClass = maybeComponentClass || defaultComponentClass;
      const classNames = cx(baseClassName, cxStyles(mapPropsToClassNames(restProps)));
      const style = { ...baseStyle, ...mapPropsToStyle(restProps) };
      const props = { ...restProps, ...mapPropsToProps(restProps) };

      return (
        <ComponentClass {...props} className={classNames} style={style} />
      );
    }
  }

  return Wrapper;
}
