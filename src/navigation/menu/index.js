import styles from './_styles.scss';
import create from './create';

const { Menu, MenuItem } = create(styles);
Menu.Item = MenuItem;

export default Menu;
export { Menu, MenuItem };
