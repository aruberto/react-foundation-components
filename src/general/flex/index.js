import styles from './_styles.scss';
import create from './create';

const Flex = create(styles);
const {
  Parent: FlexParent,
  Child: FlexChild,
} = Flex;

export default Flex;
export { FlexParent, FlexChild };
