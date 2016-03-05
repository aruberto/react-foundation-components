import styles from './_styles.scss';
import create from './create';

const {
  Visibility,
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
} = create(styles);

export default Visibility;
export {
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
