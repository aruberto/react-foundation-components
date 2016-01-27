import {PropTypes} from 'react';

import style from './style.scss';
import {
  NON_SMALL_SIZES,
  SIZES,
  ORIENTATIONS,
  classNamesMapper,
  createWrapperComponent
} from '../util';

export const ShowForScreenSize = createWrapperComponent(
  ({size}) => classNamesMapper(style, {[`show-for-${size}`]: NON_SMALL_SIZES.includes(size)})
)()();

ShowForScreenSize.propTypes = {
  ...ShowForScreenSize.propTypes,
  size: PropTypes.oneOf(NON_SMALL_SIZES).isRequired
};

export const ShowOnlyForScreenSize = createWrapperComponent(
  ({size}) => classNamesMapper(style, {[`show-for-${size}-only`]: SIZES.includes(size)})
)()();

ShowOnlyForScreenSize.propTypes = {
  ...ShowOnlyForScreenSize.propTypes,
  size: PropTypes.oneOf(SIZES).isRequired
};

export const HideForScreenSize = createWrapperComponent(
  ({size}) => classNamesMapper(style, {[`hide-for-${size}`]: NON_SMALL_SIZES.includes(size)})
)()();

HideForScreenSize.propTypes = {
  ...HideForScreenSize.propTypes,
  size: PropTypes.oneOf(NON_SMALL_SIZES).isRequired
};

export const HideOnlyForScreenSize = createWrapperComponent(
  ({size}) => classNamesMapper(style, {[`hide-for-${size}-only`]: SIZES.includes(size)})
)()();

HideOnlyForScreenSize.propTypes = {
  ...HideOnlyForScreenSize.propTypes,
  size: PropTypes.oneOf(SIZES).isRequired
};

export const Hide = createWrapperComponent(() => classNamesMapper(style, {hide: true}))()();

export const Invisible =
  createWrapperComponent(() => classNamesMapper(style, {invisible: true}))()();

export const ShowForScreenOrientation = createWrapperComponent(
  ({orientation}) =>
    classNamesMapper(style, {[`show-for-${orientation}`]: ORIENTATIONS.includes(orientation)})
)()();

ShowForScreenOrientation.propTypes = {
  ...ShowForScreenOrientation.propTypes,
  orientation: PropTypes.oneOf(ORIENTATIONS).isRequired
};

export const HideForScreenOrientation = createWrapperComponent(
  ({orientation}) =>
    classNamesMapper(style, {[`hide-for-${orientation}`]: ORIENTATIONS.includes(orientation)})
)()();

HideForScreenOrientation.propTypes = {
  ...HideForScreenOrientation.propTypes,
  orientation: PropTypes.oneOf(ORIENTATIONS).isRequired
};

export const ShowOnlyForScreenReader = createWrapperComponent(
  () => classNamesMapper(style, {'show-for-sr': true})
)()();

export const HideOnlyForScreenReader = createWrapperComponent()(() => ({'aria-hidden': true}))();

export const ShowOnlyOnFocus = createWrapperComponent(
  () => classNamesMapper(style, {'show-on-focus': true})
)()();
