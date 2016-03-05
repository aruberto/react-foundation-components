import styles from './_styles.scss';
import create from './create';
import { ShowForScreenReader, HideForScreenReader } from '../visibility';

const {
  Switch,
  RadioSwitch,
  SwitchCheckedLabel,
  SwitchUncheckedLabel,
  SwitchPadelLabel,
} = create(styles, ShowForScreenReader, HideForScreenReader);

export default Switch;
export { Switch, RadioSwitch, SwitchCheckedLabel, SwitchUncheckedLabel, SwitchPadelLabel };
