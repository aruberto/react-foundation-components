import { PropTypes } from 'react';

import { SCREEN_SIZES, LARGER_SCREEN_SIZES, SCREEN_ORIENTATIONS } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';

export default function create(styles) {
  const ShowForScreenSize = createWrapperComponent({
    displayName: 'ShowForScreenSize',
    propTypes: {
      size: PropTypes.oneOf(SCREEN_SIZES).isRequired,
    },
    mapPropsToClassNames: ({ size }) => ({
      [styles[`show-for-${size}`]]: LARGER_SCREEN_SIZES.includes(size),
    }),
  });

  const ShowOnlyForScreenSize = createWrapperComponent({
    displayName: 'ShowOnlyForScreenSize',
    propTypes: {
      size: PropTypes.oneOf(SCREEN_SIZES).isRequired,
    },
    mapPropsToClassNames: ({ size }) => ({
      [styles[`show-for-${size}-only`]]: SCREEN_SIZES.includes(size),
    }),
  });

  const HideForScreenSize = createWrapperComponent({
    displayName: 'HideForScreenSize',
    propTypes: {
      size: PropTypes.oneOf(SCREEN_SIZES).isRequired,
    },
    mapPropsToClassNames: ({ size }) => ({
      [styles.hide]: !LARGER_SCREEN_SIZES.includes(size) && SCREEN_SIZES.includes(size),
      [styles[`hide-for-${size}`]]: LARGER_SCREEN_SIZES.includes(size),
    }),
  });

  const HideOnlyForScreenSize = createWrapperComponent({
    displayName: 'HideOnlyForScreenSize',
    propTypes: {
      size: PropTypes.oneOf(SCREEN_SIZES).isRequired,
    },
    mapPropsToClassNames: ({ size }) => ({
      [styles[`hide-for-${size}-only`]]: SCREEN_SIZES.includes(size),
    }),
  });

  const Hide = createWrapperComponent({
    displayName: 'Hide',
    mapPropsToClassNames: () => ({
      [styles.hide]: true,
    }),
  });

  const Invisible = createWrapperComponent({
    displayName: 'Invisible',
    mapPropsToClassNames: () => ({
      [styles.invisible]: true,
    }),
  });

  const ShowForScreenOrientation = createWrapperComponent({
    displayName: 'ShowForScreenOrientation',
    propTypes: {
      orientation: PropTypes.oneOf(SCREEN_ORIENTATIONS).isRequired,
    },
    mapPropsToClassNames: ({ orientation }) => ({
      [styles[`show-for-${orientation}`]]: SCREEN_ORIENTATIONS.includes(orientation),
    }),
  });

  const HideForScreenOrientation = createWrapperComponent({
    displayName: 'HideForScreenOrientation',
    propTypes: {
      orientation: PropTypes.oneOf(SCREEN_ORIENTATIONS).isRequired,
    },
    mapPropsToClassNames: ({ orientation }) => ({
      [styles[`hide-for-${orientation}`]]: SCREEN_ORIENTATIONS.includes(orientation),
    }),
  });

  const ShowOnlyForScreenReader = createWrapperComponent({
    displayName: 'ShowOnlyForScreenReader',
    mapPropsToClassNames: () => ({
      [styles['show-for-sr']]: true,
    }),
  });

  const HideOnlyForScreenReader = createWrapperComponent({
    displayName: 'HideOnlyForScreenReader',
    mapPropsToProps: (props) => ({
      ...props,
      'aria-hidden': true,
    }),
  });

  const ShowOnlyOnFocus = createWrapperComponent({
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
