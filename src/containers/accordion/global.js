import styles from './styles';
import create from './create';
import Collapse from '../../transitions/collapse/global';

const { Accordion, AccordionItem } = create(styles, Collapse);
Accordion.Item = AccordionItem;

export default Accordion;
export { Accordion, AccordionItem };
