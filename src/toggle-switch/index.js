import styles from './_styles.scss';
import create from './create';
import { Callout } from '../callout';
import { Button } from '../button';

const { ToggleSwitch, ToggleSwitchItem } = create(styles, Callout, Button);

export default ToggleSwitch;
export { ToggleSwitch, ToggleSwitchItem };
