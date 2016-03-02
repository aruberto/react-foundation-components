import { PropTypes } from 'react';

import { SCREEN_SIZES, LARGER_SCREEN_SIZES, SCREEN_ORIENTATIONS } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';

export default function create(styles) {
  const ShowForScreenSize = createWrapperComponent({
    displayName: 'ShowForScreenSize',
    propTypes: {
      screenSize: PropTypes.oneOf(SCREEN_SIZES).isRequired,
    },
    mapPropsToClassNames: ({ screenSize }) => ({
      [styles[`show-for-${screenSize}`]]: LARGER_SCREEN_SIZES.includes(screenSize),
    }),
  });

  const ShowOnlyForScreenSize = createWrapperComponent({
    displayName: 'ShowOnlyForScreenSize',
    propTypes: {
      screenSize: PropTypes.oneOf(SCREEN_SIZES).isRequired,
    },
    mapPropsToClassNames: ({ screenSize }) => ({
      [styles[`show-for-${screenSize}-only`]]: SCREEN_SIZES.includes(screenSize),
    }),
  });

  const HideForScreenSize = createWrapperComponent({
    displayName: 'HideForScreenSize',
    propTypes: {
      screenSize: PropTypes.oneOf(SCREEN_SIZES).isRequired,
    },
    mapPropsToClassNames: ({ screenSize }) => ({
      [styles.hide]: !LARGER_SCREEN_SIZES.includes(screenSize) && SCREEN_SIZES.includes(screenSize),
      [styles[`hide-for-${screenSize}`]]: LARGER_SCREEN_SIZES.includes(screenSize),
    }),
  });

  const HideOnlyForScreenSize = createWrapperComponent({
    displayName: 'HideOnlyForScreenSize',
    propTypes: {
      screenSize: PropTypes.oneOf(SCREEN_SIZES).isRequired,
    },
    mapPropsToClassNames: ({ screenSize }) => ({
      [styles[`hide-for-${screenSize}-only`]]: SCREEN_SIZES.includes(screenSize),
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
      screenOrientation: PropTypes.oneOf(SCREEN_ORIENTATIONS).isRequired,
    },
    mapPropsToClassNames: ({ screenOrientation }) => ({
      [styles[`show-for-${screenOrientation}`]]: SCREEN_ORIENTATIONS.includes(screenOrientation),
    }),
  });

  const HideForScreenOrientation = createWrapperComponent({
    displayName: 'HideForScreenOrientation',
    propTypes: {
      screenOrientation: PropTypes.oneOf(SCREEN_ORIENTATIONS).isRequired,
    },
    mapPropsToClassNames: ({ screenOrientation }) => ({
      [styles[`hide-for-${screenOrientation}`]]: SCREEN_ORIENTATIONS.includes(screenOrientation),
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
