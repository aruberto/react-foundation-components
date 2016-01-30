import {PropTypes} from 'react';

import styles from './styles.scss';
import {SCREEN_SIZES, LARGER_SCREEN_SIZES} from '../../util/constants';
import joinObjects from '../../util/join-objects';
import createHigherOrderComponent from '../../util/create-higher-order-component';

export const SCREEN_ORIENTATIONS = ['landscape', 'portrait'];

export const ShowForScreenSize = createHigherOrderComponent({
  displayName: 'ShowForScreenSize',
  propTypes: {size: PropTypes.oneOf(LARGER_SCREEN_SIZES).isRequired},
  mapPropsToClassNames: ({size}) => joinObjects(
    styles,
    {[`show-for-${size}`]: LARGER_SCREEN_SIZES.includes(size)}
  )
});

export const ShowOnlyForScreenSize = createHigherOrderComponent({
  displayName: 'ShowOnlyForScreenSize',
  propTypes: {size: PropTypes.oneOf(SCREEN_SIZES).isRequired},
  mapPropsToClassNames: ({size}) => joinObjects(
    styles,
    {[`show-for-${size}-only`]: SCREEN_SIZES.includes(size)}
  )
});

export const HideForScreenSize = createHigherOrderComponent({
  displayName: 'HideForScreenSize',
  propTypes: {size: PropTypes.oneOf(LARGER_SCREEN_SIZES).isRequired},
  mapPropsToClassNames: ({size}) => joinObjects(
    styles,
    {[`hide-for-${size}`]: LARGER_SCREEN_SIZES.includes(size)}
  )
});

export const HideOnlyForScreenSize = createHigherOrderComponent({
  displayName: 'HideOnlyForScreenSize',
  propTypes: {size: PropTypes.oneOf(SCREEN_SIZES).isRequired},
  mapPropsToClassNames: ({size}) => joinObjects(
    styles,
    {[`hide-for-${size}-only`]: SCREEN_SIZES.includes(size)}
  )
});

export const Hide = createHigherOrderComponent({
  displayName: 'Hide',
  mapPropsToClassNames: () => joinObjects(styles, {hide: true})
});

export const Invisible = createHigherOrderComponent({
  displayName: 'Invisible',
  mapPropsToClassNames: () => joinObjects(styles, {invisible: true})
});

export const ShowForScreenOrientation = createHigherOrderComponent({
  displayName: 'ShowForScreenOrientation',
  propTypes: {orientation: PropTypes.oneOf(SCREEN_ORIENTATIONS).isRequired},
  mapPropsToClassNames: ({orientation}) => joinObjects(
    styles,
    {[`show-for-${orientation}`]: SCREEN_ORIENTATIONS.includes(orientation)}
  )
});

export const HideForScreenOrientation = createHigherOrderComponent({
  displayName: 'HideForScreenOrientation',
  propTypes: {orientation: PropTypes.oneOf(SCREEN_ORIENTATIONS).isRequired},
  mapPropsToClassNames: ({orientation}) => joinObjects(
    styles,
    {[`hide-for-${orientation}`]: SCREEN_ORIENTATIONS.includes(orientation)}
  )
});

export const ShowOnlyForScreenReader = createHigherOrderComponent({
  displayName: 'ShowOnlyForScreenReader',
  mapPropsToClassNames: () => joinObjects(styles, {'show-for-sr': true})
});

export const HideOnlyForScreenReader = createHigherOrderComponent({
  displayName: 'HideOnlyForScreenReader',
  mapPropsToProps: (props) => ({...props, 'aria-hidden': true})
});

export const ShowOnlyOnFocus = createHigherOrderComponent({
  displayName: 'ShowOnlyOnFocus',
  mapPropsToClassNames: () => joinObjects(styles, {'show-on-focus': true})
});
