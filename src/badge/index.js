import { PropTypes } from 'react';
import includes from 'lodash/includes';

import { COMPONENT_COLORS, COMPONENT_ALTERNATIVE_COLORS } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';
import styles from './_styles.scss';

export const Badge = createWrapperComponent({
  displayName: 'Badge',
  styles,
  propTypes: {
    color: PropTypes.oneOf(COMPONENT_COLORS),
  },
  mapPropsToClassNames:
    ({ color }) => ['badge', { [color]: includes(COMPONENT_ALTERNATIVE_COLORS, color) }],
});

export default Badge;
