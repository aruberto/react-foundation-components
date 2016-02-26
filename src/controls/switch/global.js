import styles from './styles';
import create from './create';
import { ShowOnlyForScreenReader, HideOnlyForScreenReader } from '../../general/visibility/global';

const {
  Switch,
  RadioSwitch,
  SwitchCheckedLabel,
  SwitchUncheckedLabel,
  SwitchPadelLabel,
} = create(styles, ShowOnlyForScreenReader, HideOnlyForScreenReader);
Switch.Radio = RadioSwitch;
Switch.CheckedLabel = SwitchCheckedLabel;
Switch.UncheckedLabel = SwitchUncheckedLabel;
Switch.PadelLabel = SwitchPadelLabel;

export default Switch;
export { Switch, RadioSwitch, SwitchCheckedLabel, SwitchUncheckedLabel, SwitchPadelLabel };
