import styles from './_styles.scss';
import create from './create';
import { HideOnlyForScreenReader } from '../../general/visibility';

const { CloseButton } = create(styles, HideOnlyForScreenReader);

export default CloseButton;
export { CloseButton };
