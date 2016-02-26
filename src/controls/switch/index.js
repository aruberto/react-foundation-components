import styles from './_styles.scss';
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
