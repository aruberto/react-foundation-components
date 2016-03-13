import { PropTypes } from 'react';

import { FLOAT_POSITIONS } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';
import styles from './_styles.scss';

export const Float = createWrapperComponent({
  displayName: 'Float',
  styles,
  propTypes: {
    position: PropTypes.oneOf(FLOAT_POSITIONS).isRequired,
  },
  mapPropsToClassNames: ({ position }) => ({
    [`float-${position}`]: FLOAT_POSITIONS.includes(position),
  }),
  defaultComponentClass: 'div',
});

export const ClearFix = createWrapperComponent({
  displayName: 'ClearFix',
  styles,
  mapPropsToClassNames: () => 'clearfix',
  defaultComponentClass: 'div',
});

Float.ClearFix = ClearFix;

export default Float;
