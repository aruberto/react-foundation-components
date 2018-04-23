import React from 'react';
import elementType from 'prop-types-extra/lib/elementType';

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
