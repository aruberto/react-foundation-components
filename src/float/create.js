import { PropTypes } from 'react';

import { FLOAT_POSITIONS } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';

export default function create(styles) {
  const Float = createWrapperComponent({
    displayName: 'Float',
    propTypes: {
      position: PropTypes.oneOf(FLOAT_POSITIONS).isRequired,
    },
    mapPropsToClassNames: ({ position }) => ({
      [styles[`float-${position}`]]: FLOAT_POSITIONS.includes(position),
    }),
    defaultComponentClass: 'div',
  });

  const ClearFix = createWrapperComponent({
    displayName: 'ClearFix',
    mapPropsToClassNames: () => styles.clearfix,
    defaultComponentClass: 'div',
  });

  return { Float, ClearFix };
}
