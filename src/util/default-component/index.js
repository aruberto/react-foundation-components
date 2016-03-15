import React from 'react';
import elementType from 'react-prop-types/lib/elementType';

export const DefaultComponent = ({
  componentClass: ComponentClass,
  ...restProps,
}) => <ComponentClass {...restProps} />;

DefaultComponent.propTypes = {
  componentClass: elementType,
};
DefaultComponent.defaultProps = {
  componentClass: 'div',
};

export default DefaultComponent;
