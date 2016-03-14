import { PropTypes } from 'react';
import includes from 'lodash/includes';

import { SCREEN_SIZES, LARGER_SCREEN_SIZES, SCREEN_ORIENTATIONS } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';
import styles from './_styles.scss';

export const ShowForScreenSize = createWrapperComponent({
  displayName: 'ShowForScreenSize',
  styles,
  propTypes: {
    screenSize: PropTypes.oneOf(SCREEN_SIZES).isRequired,
  },
  mapPropsToClassNames: ({ screenSize }) => ({
    [`show-for-${screenSize}`]: includes(LARGER_SCREEN_SIZES, screenSize),
  }),
});

export const ShowOnlyForScreenSize = createWrapperComponent({
  displayName: 'ShowOnlyForScreenSize',
  styles,
  propTypes: {
    screenSize: PropTypes.oneOf(SCREEN_SIZES).isRequired,
  },
  mapPropsToClassNames: ({ screenSize }) => ({
    [`show-for-${screenSize}-only`]: includes(SCREEN_SIZES, screenSize),
  }),
});

export const HideForScreenSize = createWrapperComponent({
  displayName: 'HideForScreenSize',
  styles,
  propTypes: {
    screenSize: PropTypes.oneOf(SCREEN_SIZES).isRequired,
  },
  mapPropsToClassNames: ({ screenSize }) => ({
    hide: !includes(LARGER_SCREEN_SIZES, screenSize) && includes(SCREEN_SIZES, screenSize),
    [`hide-for-${screenSize}`]: includes(LARGER_SCREEN_SIZES, screenSize),
  }),
});

export const HideOnlyForScreenSize = createWrapperComponent({
  displayName: 'HideOnlyForScreenSize',
  styles,
  propTypes: {
    screenSize: PropTypes.oneOf(SCREEN_SIZES).isRequired,
  },
  mapPropsToClassNames: ({ screenSize }) => ({
    [`hide-for-${screenSize}-only`]: includes(SCREEN_SIZES, screenSize),
  }),
});

export const Hide = createWrapperComponent({
  displayName: 'Hide',
  styles,
  mapPropsToClassNames: () => 'hide',
});

export const Invisible = createWrapperComponent({
  displayName: 'Invisible',
  styles,
  mapPropsToClassNames: () => 'invisible',
});

export const ShowForScreenOrientation = createWrapperComponent({
  displayName: 'ShowForScreenOrientation',
  styles,
  propTypes: {
    screenOrientation: PropTypes.oneOf(SCREEN_ORIENTATIONS).isRequired,
  },
  mapPropsToClassNames: ({ screenOrientation }) => ({
    [`show-for-${screenOrientation}`]: includes(SCREEN_ORIENTATIONS, screenOrientation),
  }),
});

export const HideForScreenOrientation = createWrapperComponent({
  displayName: 'HideForScreenOrientation',
  styles,
  propTypes: {
    screenOrientation: PropTypes.oneOf(SCREEN_ORIENTATIONS).isRequired,
  },
  mapPropsToClassNames: ({ screenOrientation }) => ({
    [`hide-for-${screenOrientation}`]: includes(SCREEN_ORIENTATIONS, screenOrientation),
  }),
});

export const ShowForScreenReader = createWrapperComponent({
  displayName: 'ShowForScreenReader',
  styles,
  mapPropsToClassNames: () => 'show-for-sr',
});

export const HideForScreenReader = createWrapperComponent({
  displayName: 'HideForScreenReader',
  styles,
  mapPropsToProps: () => ({ 'aria-hidden': true }),
});

export const ShowOnFocus = createWrapperComponent({
  displayName: 'ShowOnFocus',
  styles,
  mapPropsToClassNames: () => 'show-on-focus',
});

export const Visibility = {
  ShowForScreenSize,
  ShowOnlyForScreenSize,
  HideForScreenSize,
  HideOnlyForScreenSize,
  Hide,
  Invisible,
  ShowForScreenOrientation,
  HideForScreenOrientation,
  ShowForScreenReader,
  HideForScreenReader,
  ShowOnFocus,
};

export default Visibility;
