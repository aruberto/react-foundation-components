import styles from './_styles.scss';
import create from './create';
import Collapse from '../collapse';

const { Accordion, AccordionItem } = create(styles, Collapse);

export default Accordion;
export { Accordion, AccordionItem };
