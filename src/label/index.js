import PropTypes from 'prop-types';
import includes from 'lodash/includes';

import { COMPONENT_COLORS, COMPONENT_ALTERNATIVE_COLORS } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';
import styles from './_styles.scss';

export const Label = createWrapperComponent({
  displayName: 'Label',
  styles,
  propTypes: {
    color: PropTypes.oneOf(COMPONENT_COLORS),
  },
  mapProps: ({ color, ...props }) => ({
    props,
    classNames: ['label', { [color]: includes(COMPONENT_ALTERNATIVE_COLORS, color) }],
  }),
});

export default Label;
