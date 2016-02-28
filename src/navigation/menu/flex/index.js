import baseStyles from './_styles.scss';
import create from '../create';
import { FlexParent, FlexChild } from '../../../general/flex';

const styles = { ...baseStyles };
delete styles['menu-centered'];

const { Menu, MenuItem } = create(styles, FlexParent, FlexChild);
Menu.Item = MenuItem;

export default Menu;
export { Menu, MenuItem };
