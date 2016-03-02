import { PropTypes } from 'react';

import { COMPONENT_COLORS, COMPONENT_ALTERNATIVE_COLORS } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';

export default function create(styles) {
  const Label = createWrapperComponent({
    displayName: 'Label',
    propTypes: {
      color: PropTypes.oneOf(COMPONENT_COLORS),
    },
    mapPropsToClassNames: ({ color }) => ({
      [styles.label]: true,
      [styles[color]]: COMPONENT_ALTERNATIVE_COLORS.includes(color),
    }),
  });

  return { Label };
}
