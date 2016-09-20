import { PropTypes } from 'react';
import includes from 'lodash/includes';

import { FLOAT_POSITIONS } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';
import styles from './_styles.scss';

export const Float = createWrapperComponent({
  displayName: 'Float',
  styles,
  propTypes: {
    position: PropTypes.oneOf(FLOAT_POSITIONS).isRequired,
  },
  mapProps: ({ position, ...props }) => ({
    props,
    classNames: {
      [`float-${position}`]: includes(FLOAT_POSITIONS, position),
    },
  }),
  defaultComponentClass: 'div',
});

export const ClearFix = createWrapperComponent({
  displayName: 'ClearFix',
  styles,
  mapProps: props => ({ props, classNames: 'clearfix' }),
  defaultComponentClass: 'div',
});

Float.ClearFix = ClearFix;

export default Float;
