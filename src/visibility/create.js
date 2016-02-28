import { PropTypes } from 'react';

import { SCREEN_SIZES, LARGER_SCREEN_SIZES, SCREEN_ORIENTATIONS } from '../util/constants';
import createHigherOrderComponent from '../util/create-higher-order-component';

export default function create(styles) {
  const ShowForScreenSize = createHigherOrderComponent({
    displayName: 'ShowForScreenSize',
    propTypes: {
      size: PropTypes.oneOf(SCREEN_SIZES).isRequired,
    },
    mapPropsToClassNames: ({ size }) => ({
      [styles[`show-for-${size}`]]: LARGER_SCREEN_SIZES.includes(size),
    }),
  });

  const ShowOnlyForScreenSize = createHigherOrderComponent({
    displayName: 'ShowOnlyForScreenSize',
    propTypes: {
      size: PropTypes.oneOf(SCREEN_SIZES).isRequired,
    },
    mapPropsToClassNames: ({ size }) => ({
      [styles[`show-for-${size}-only`]]: SCREEN_SIZES.includes(size),
    }),
  });

  const HideForScreenSize = createHigherOrderComponent({
    displayName: 'HideForScreenSize',
    propTypes: {
      size: PropTypes.oneOf(SCREEN_SIZES).isRequired,
    },
    mapPropsToClassNames: ({ size }) => ({
      [styles.hide]: !LARGER_SCREEN_SIZES.includes(size) && SCREEN_SIZES.includes(size),
      [styles[`hide-for-${size}`]]: LARGER_SCREEN_SIZES.includes(size),
    }),
  });

  const HideOnlyForScreenSize = createHigherOrderComponent({
    displayName: 'HideOnlyForScreenSize',
    propTypes: {
      size: PropTypes.oneOf(SCREEN_SIZES).isRequired,
    },
    mapPropsToClassNames: ({ size }) => ({
      [styles[`hide-for-${size}-only`]]: SCREEN_SIZES.includes(size),
    }),
  });

  const Hide = createHigherOrderComponent({
    displayName: 'Hide',
    mapPropsToClassNames: () => ({
      [styles.hide]: true,
    }),
  });

  const Invisible = createHigherOrderComponent({
    displayName: 'Invisible',
    mapPropsToClassNames: () => ({
      [styles.invisible]: true,
    }),
  });

  const ShowForScreenOrientation = createHigherOrderComponent({
    displayName: 'ShowForScreenOrientation',
    propTypes: {
      orientation: PropTypes.oneOf(SCREEN_ORIENTATIONS).isRequired,
    },
    mapPropsToClassNames: ({ orientation }) => ({
      [styles[`show-for-${orientation}`]]: SCREEN_ORIENTATIONS.includes(orientation),
    }),
  });

  const HideForScreenOrientation = createHigherOrderComponent({
    displayName: 'HideForScreenOrientation',
    propTypes: {
      orientation: PropTypes.oneOf(SCREEN_ORIENTATIONS).isRequired,
    },
    mapPropsToClassNames: ({ orientation }) => ({
      [styles[`hide-for-${orientation}`]]: SCREEN_ORIENTATIONS.includes(orientation),
    }),
  });

  const ShowOnlyForScreenReader = createHigherOrderComponent({
    displayName: 'ShowOnlyForScreenReader',
    mapPropsToClassNames: () => ({
      [styles['show-for-sr']]: true,
    }),
  });

  const HideOnlyForScreenReader = createHigherOrderComponent({
    displayName: 'HideOnlyForScreenReader',
    mapPropsToProps: (props) => ({
      ...props,
      'aria-hidden': true,
    }),
  });

  const ShowOnlyOnFocus = createHigherOrderComponent({
    displayName: 'ShowOnlyOnFocus',
    mapPropsToClassNames: () => ({
      [styles['show-on-focus']]: true,
    }),
  });

  return {
    ShowForScreenSize,
    ShowOnlyForScreenSize,
    HideForScreenSize,
    HideOnlyForScreenSize,
    Hide,
    Invisible,
    ShowForScreenOrientation,
    HideForScreenOrientation,
    ShowOnlyForScreenReader,
    HideOnlyForScreenReader,
    ShowOnlyOnFocus,
  };
}
