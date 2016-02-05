import {PropTypes} from 'react';

import styles from './styles';
import {COMPONENT_COLORS} from '../../util/constants';
import createHigherOrderComponent from '../../util/create-higher-order-component';

export default createHigherOrderComponent({
  displayName: 'Badge',
  propTypes: {color: PropTypes.oneOf(COMPONENT_COLORS)},
  mapPropsToClassNames: ({color}) => ({
    [styles.badge]: true,
    [styles[color]]: COMPONENT_COLORS.includes(color)
  }),
  collapseOnlyChild: false
});
