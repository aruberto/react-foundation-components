import { PropTypes } from 'react';

import { COMPONENT_COLORS, COMPONENT_ALTERNATIVE_COLORS } from '../../util/constants';
import createHigherOrderComponent from '../../util/create-higher-order-component';

export default function create(styles) {
  const Badge = createHigherOrderComponent({
    displayName: 'Badge',
    propTypes: {
      color: PropTypes.oneOf(COMPONENT_COLORS),
    },
    mapPropsToClassNames: ({ color }) => ({
      [styles.badge]: true,
      [styles[color]]: COMPONENT_ALTERNATIVE_COLORS.includes(color),
    }),
    mergeSingleChild: false,
  });

  return { Badge };
}
