import { PropTypes } from 'react';

import { FLOAT_POSITIONS } from '../../util/constants';
import createHigherOrderComponent from '../../util/create-higher-order-component';

export default function create(styles) {
  const Float = createHigherOrderComponent({
    displayName: 'Float',
    propTypes: {
      position: PropTypes.oneOf(FLOAT_POSITIONS).isRequired,
    },
    mapPropsToClassNames: ({ position }) => ({
      [styles[`float-${position}`]]: FLOAT_POSITIONS.includes(position),
    }),
  });

  const ClearFix = createHigherOrderComponent({
    displayName: 'ClearFix',
    mapPropsToClassNames: () => styles.clearfix,
    defaultComponentClass: 'div',
    mergeSingleChild: false,
  });

  return { Float, ClearFix };
}
