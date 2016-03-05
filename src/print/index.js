import styles from './_styles.scss';
import create from './create';

const { Print, ShowForPrint, HideForPrint } = create(styles);

export default Print;
export { ShowForPrint, HideForPrint };
