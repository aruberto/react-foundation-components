import React, {Component, PropTypes, isValidElement} from 'react';
import cx from 'classnames';
import elementType from 'react-prop-types/lib/elementType';

export default function createHigherOrderComponent({
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
      forceWrap: PropTypes.bool,
      ...propTypes
    };

    render() {
      const {children, componentClass: maybeComponentClass, forceWrap, ...restProps} = this.props;
      const ComponentClass = maybeComponentClass || defaultComponentClass;
      const classNames = mapPropsToClassNames(restProps);
      const props = mapPropsToProps(restProps);

      if (!forceWrap && collapseOnlyChild && isValidElement(children)) {
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
