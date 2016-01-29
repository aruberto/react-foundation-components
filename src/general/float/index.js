import {PropTypes} from 'react';

import styles from './styles.scss';
import joinObjects from '../../util/join-objects';
import createHigherOrderComponent from '../../util/create-higher-order-component';

export const FLOAT_POSITIONS = ['left', 'right', 'center'];

export const Float = createHigherOrderComponent({
  displayName: 'Float',
  propTypes: {position: PropTypes.oneOf(FLOAT_POSITIONS).isRequired},
  mapPropsToClassNames: ({position}) => joinObjects(
    styles,
    {[`float-${position}`]: FLOAT_POSITIONS.includes(position)}
  )
});

export const ClearFix = createHigherOrderComponent({
  displayName: 'ClearFix',
  mapPropsToClassNames: () => joinObjects(styles, {clearfix: true})
});
