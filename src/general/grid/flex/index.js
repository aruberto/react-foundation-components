import styles from './_styles.scss';
import create from './create';
import { FlexParent, FlexChild } from '../../flex';

const Grid = create(styles, FlexParent, FlexChild);
const { Row, Column } = Grid;

export default Grid;
export { Row, Column };
