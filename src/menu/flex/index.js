import baseStyles from './_styles.scss';
import create from '../create';
import { MENU_ALIGNMENTS } from '../../util/constants';
import { FlexParent, FlexChild } from '../../flex';

const styles = { ...baseStyles };
delete styles['menu-centered'];
MENU_ALIGNMENTS.forEach((alignment) => delete styles[`align-${alignment}`]);

const { Menu, MenuItem, MenuText } = create(styles, FlexParent, FlexChild);
Menu.Item = MenuItem;
Menu.Text = MenuText;

export default Menu;
export { Menu, MenuItem, MenuText };
