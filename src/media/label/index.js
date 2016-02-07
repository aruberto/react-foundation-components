import { PropTypes } from 'react';

import styles from './styles';
import { COMPONENT_COLORS } from '../../util/constants';
import createHigherOrderComponent from '../../util/create-higher-order-component';

export default createHigherOrderComponent({
  displayName: 'Label',
  propTypes: {
    color: PropTypes.oneOf(COMPONENT_COLORS),
  },
  mapPropsToClassNames: ({ color }) => ({
    [styles.label]: true,
    [styles[color]]: COMPONENT_COLORS.includes(color),
  }),
  collapseOnlyChild: false,
});
