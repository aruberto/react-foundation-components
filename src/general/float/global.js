import styles from './styles';
import create from './create';

const { Float, ClearFix } = create(styles);
Float.ClearFix = ClearFix;

export default Float;
export { Float, ClearFix };
