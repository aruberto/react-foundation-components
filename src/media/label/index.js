import {PropTypes} from 'react';

import styles from './styles.scss';
import {COMPONENT_COLORS} from '../../util/constants';
import joinObjects from '../../util/join-objects';
import createHigherOrderComponent from '../../util/create-higher-order-component';

export default createHigherOrderComponent({
  displayName: 'Label',
  propTypes: {color: PropTypes.oneOf(COMPONENT_COLORS)},
  mapPropsToClassNames: ({color}) => joinObjects(
    styles,
    {label: true, [color]: COMPONENT_COLORS.includes(color)}
  ),
  collapseOnlyChild: false
});
