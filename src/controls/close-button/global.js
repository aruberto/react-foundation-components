import styles from './styles';
import create from './create';
import { HideOnlyForScreenReader } from '../../general/visibility/global';

const { CloseButton } = create(styles, HideOnlyForScreenReader);

export default CloseButton;
export { CloseButton };
