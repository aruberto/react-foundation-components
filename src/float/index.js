import styles from './_styles.scss';
import create from './create';

const { Float, ClearFix } = create(styles);
Float.ClearFix = ClearFix;

export default Float;
export { Float, ClearFix };
