import baseStyles from './_styles.scss';
import create from '../create';
import { MENU_ALIGNMENTS } from '../../../util/constants';
import { FlexParent, FlexChild } from '../../../general/flex';

const styles = { ...baseStyles };
delete styles['menu-centered'];
MENU_ALIGNMENTS.forEach((alignment) => delete styles[`align-${alignment}`]);

const { Menu, MenuItem } = create(styles, FlexParent, FlexChild);
Menu.Item = MenuItem;

export default Menu;
export { Menu, MenuItem };
