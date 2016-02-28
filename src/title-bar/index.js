import styles from './_styles.scss';
import create from './create';
import MenuIcon from '../menu-icon';

const { TitleBar, TitleBarItem, TitleBarTitle, TitleBarMenuIcon } = create(styles, MenuIcon);
TitleBar.Item = TitleBarItem;
TitleBar.Title = TitleBarTitle;
TitleBar.MenuIcon = TitleBarMenuIcon;

export default TitleBar;
export { TitleBar, TitleBarItem, TitleBarTitle, TitleBarMenuIcon };
