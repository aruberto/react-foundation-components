import styles from './_styles.scss';
import create from '../create';

const { TopBar, TopBarContent, TopBarItem, TopBarTitle } = create(styles);
TopBar.Content = TopBarContent;
TopBar.Item = TopBarItem;
TopBar.Title = TopBarTitle;

export default TopBar;
export { TopBar, TopBarContent, TopBarItem, TopBarTitle };
