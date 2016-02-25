import { PropTypes } from 'react';

import styles from './styles';
import { FLOAT_POSITIONS } from '../../util/constants';
import createHigherOrderComponent from '../../util/create-higher-order-component';

export const Float = createHigherOrderComponent({
  displayName: 'Float',
  propTypes: {
    position: PropTypes.oneOf(FLOAT_POSITIONS).isRequired,
  },
  mapPropsToClassNames: ({ position }) => ({
    [styles[`float-${position}`]]: FLOAT_POSITIONS.includes(position),
  }),
});

export const ClearFix = createHigherOrderComponent({
  displayName: 'ClearFix',
  mapPropsToClassNames: () => styles.clearfix,
  defaultComponentClass: 'div',
  mergeSingleChild: false,
});
