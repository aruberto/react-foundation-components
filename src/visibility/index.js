import {PropTypes} from 'react';

import style from './style.scss';
import {
  NON_SMALL_SIZES,
  SIZES,
  ORIENTATIONS,
  classNamesMapper,
  createWrapperComponent
} from '../util';

export const ShowForScreenSize = createWrapperComponent({
  displayName: 'ShowForScreenSize',
  propTypes: {size: PropTypes.oneOf(NON_SMALL_SIZES).isRequired},
  mapPropsToClassNames: ({size}) => classNamesMapper(
    style,
    {[`show-for-${size}`]: NON_SMALL_SIZES.includes(size)}
  )
});

export const ShowOnlyForScreenSize = createWrapperComponent({
  displayName: 'ShowOnlyForScreenSize',
  propTypes: {size: PropTypes.oneOf(SIZES).isRequired},
  mapPropsToClassNames: ({size}) => classNamesMapper(
    style,
    {[`show-for-${size}-only`]: SIZES.includes(size)}
  )
});

export const HideForScreenSize = createWrapperComponent({
  displayName: 'HideForScreenSize',
  propTypes: {size: PropTypes.oneOf(NON_SMALL_SIZES).isRequired},
  mapPropsToClassNames: ({size}) => classNamesMapper(
    style,
    {[`hide-for-${size}`]: NON_SMALL_SIZES.includes(size)}
  )
});

export const HideOnlyForScreenSize = createWrapperComponent({
  displayName: 'HideOnlyForScreenSize',
  propTypes: {size: PropTypes.oneOf(SIZES).isRequired},
  mapPropsToClassNames: ({size}) => classNamesMapper(
    style,
    {[`hide-for-${size}-only`]: SIZES.includes(size)}
  )
});

export const Hide = createWrapperComponent({
  displayName: 'Hide',
  mapPropsToClassNames: () => classNamesMapper(style, {hide: true})
});

export const Invisible = createWrapperComponent({
  displayName: 'Invisible',
  mapPropsToClassNames: () => classNamesMapper(style, {invisible: true})
});

export const ShowForScreenOrientation = createWrapperComponent({
  displayName: 'ShowForScreenOrientation',
  propTypes: {orientation: PropTypes.oneOf(ORIENTATIONS).isRequired},
  mapPropsToClassNames: ({orientation}) => classNamesMapper(
    style,
    {[`show-for-${orientation}`]: ORIENTATIONS.includes(orientation)}
  )
});

export const HideForScreenOrientation = createWrapperComponent({
  displayName: 'HideForScreenOrientation',
  propTypes: {orientation: PropTypes.oneOf(ORIENTATIONS).isRequired},
  mapPropsToClassNames: ({orientation}) => classNamesMapper(
    style,
    {[`hide-for-${orientation}`]: ORIENTATIONS.includes(orientation)}
  )
});

export const ShowOnlyForScreenReader = createWrapperComponent({
  displayName: 'ShowOnlyForScreenReader',
  mapPropsToClassNames: () => classNamesMapper(style, {'show-for-sr': true})
});

export const HideOnlyForScreenReader = createWrapperComponent({
  displayName: 'HideOnlyForScreenReader',
  mapPropsToProps: () => ({'aria-hidden': true})
});

export const ShowOnlyOnFocus = createWrapperComponent({
  displayName: 'ShowOnlyOnFocus',
  mapPropsToClassNames: () => classNamesMapper(style, {'show-on-focus': true})
});
