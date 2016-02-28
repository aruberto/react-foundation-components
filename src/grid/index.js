import styles from './_styles.scss';
import create from './create';

const Grid = create(styles);
const { Row, Column } = Grid;

export default Grid;
export { Row, Column };
