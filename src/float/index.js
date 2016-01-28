import {PropTypes} from 'react';

import style from './style.scss';
import {FLOAT_POSITIONS} from '../util/constants';
import joinObjects from '../util/join-objects';
import createHigherOrderComponent from '../util/create-higher-order-component';

export const Float = createHigherOrderComponent({
  displayName: 'Float',
  propTypes: {position: PropTypes.oneOf(FLOAT_POSITIONS).isRequired},
  mapPropsToClassNames: ({position}) => joinObjects(
    style,
    {[`float-${position}`]: FLOAT_POSITIONS.includes(position)}
  )
});

export const ClearFix = createHigherOrderComponent({
  displayName: 'ClearFix',
  mapPropsToClassNames: () => joinObjects(style, {clearfix: true}),
  defaultComponentClass: 'div'
});
