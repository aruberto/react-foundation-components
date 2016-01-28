import {PropTypes} from 'react';

import style from './style.scss';
import {SIZES, NON_SMALL_SIZES, ORIENTATIONS} from '../util/constants';
import joinObjects from '../util/join-objects';
import {createWrapperComponent} from '../util';

export const ShowForScreenSize = createWrapperComponent({
  displayName: 'ShowForScreenSize',
  propTypes: {size: PropTypes.oneOf(NON_SMALL_SIZES).isRequired},
  mapPropsToClassNames: ({size}) => joinObjects(
    style,
    {[`show-for-${size}`]: NON_SMALL_SIZES.includes(size)}
  )
});

export const ShowOnlyForScreenSize = createWrapperComponent({
  displayName: 'ShowOnlyForScreenSize',
  propTypes: {size: PropTypes.oneOf(SIZES).isRequired},
  mapPropsToClassNames: ({size}) => joinObjects(
    style,
    {[`show-for-${size}-only`]: SIZES.includes(size)}
  )
});

export const HideForScreenSize = createWrapperComponent({
  displayName: 'HideForScreenSize',
  propTypes: {size: PropTypes.oneOf(NON_SMALL_SIZES).isRequired},
  mapPropsToClassNames: ({size}) => joinObjects(
    style,
    {[`hide-for-${size}`]: NON_SMALL_SIZES.includes(size)}
  )
});

export const HideOnlyForScreenSize = createWrapperComponent({
  displayName: 'HideOnlyForScreenSize',
  propTypes: {size: PropTypes.oneOf(SIZES).isRequired},
  mapPropsToClassNames: ({size}) => joinObjects(
    style,
    {[`hide-for-${size}-only`]: SIZES.includes(size)}
  )
});

export const Hide = createWrapperComponent({
  displayName: 'Hide',
  mapPropsToClassNames: () => joinObjects(style, {hide: true})
});

export const Invisible = createWrapperComponent({
  displayName: 'Invisible',
  mapPropsToClassNames: () => joinObjects(style, {invisible: true})
});

export const ShowForScreenOrientation = createWrapperComponent({
  displayName: 'ShowForScreenOrientation',
  propTypes: {orientation: PropTypes.oneOf(ORIENTATIONS).isRequired},
  mapPropsToClassNames: ({orientation}) => joinObjects(
    style,
    {[`show-for-${orientation}`]: ORIENTATIONS.includes(orientation)}
  )
});

export const HideForScreenOrientation = createWrapperComponent({
  displayName: 'HideForScreenOrientation',
  propTypes: {orientation: PropTypes.oneOf(ORIENTATIONS).isRequired},
  mapPropsToClassNames: ({orientation}) => joinObjects(
    style,
    {[`hide-for-${orientation}`]: ORIENTATIONS.includes(orientation)}
  )
});

export const ShowOnlyForScreenReader = createWrapperComponent({
  displayName: 'ShowOnlyForScreenReader',
  mapPropsToClassNames: () => joinObjects(style, {'show-for-sr': true})
});

export const HideOnlyForScreenReader = createWrapperComponent({
  displayName: 'HideOnlyForScreenReader',
  mapPropsToProps: (props) => ({'aria-hidden': true, ...props})
});

export const ShowOnlyOnFocus = createWrapperComponent({
  displayName: 'ShowOnlyOnFocus',
  mapPropsToClassNames: () => joinObjects(style, {'show-on-focus': true})
});
