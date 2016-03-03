import styles from './_styles.scss';
import create from './create';

const Print = create(styles);
const { ShowOnlyForPrint, HideOnlyForPrint } = Print;

export default Print;
export { ShowOnlyForPrint, HideOnlyForPrint };
