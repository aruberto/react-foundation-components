import styles from './styles';
import create from './create';

const {
  Switch,
  RadioSwitch,
  SwitchCheckedLabel,
  SwitchUncheckedLabel,
  SwitchPadelLabel,
} = create(styles);

export default Switch;
export { Switch, RadioSwitch, SwitchCheckedLabel, SwitchUncheckedLabel, SwitchPadelLabel };
