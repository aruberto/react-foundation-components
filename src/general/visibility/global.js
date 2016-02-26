import styles from './styles';
import create from './create';

const Visibility = create(styles);
const {
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
} = Visibility;

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
  ShowOnlyForScreenReader,
  HideOnlyForScreenReader,
  ShowOnlyOnFocus,
};
