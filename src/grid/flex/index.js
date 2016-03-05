import styles from './_styles.scss';
import create from './create';
import { FlexParent, FlexChild } from '../../flex';

const { Grid, Row, Column } = create(styles, FlexParent, FlexChild);

export default Grid;
export { Grid, Row, Column };
