import styles from './_styles.scss';
import create from './create';
import { HideForScreenReader } from '../visibility';

const { CloseButton } = create(styles, HideForScreenReader);

export default CloseButton;
export { CloseButton };
