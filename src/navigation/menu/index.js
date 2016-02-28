import styles from './_styles.scss';
import create from './create';

const { Menu, MenuItem, MenuText } = create(styles);
Menu.Item = MenuItem;
Menu.Text = MenuText;

export default Menu;
export { Menu, MenuItem, MenuText };
