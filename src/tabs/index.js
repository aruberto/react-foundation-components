import styles from './_styles.scss';
import create from './create';

const { Tabs, TabsHeader, TabsContent, Tab, TabTitle } = create(styles);
Tab.Title = TabTitle;
Tabs.Tab = Tab;
Tabs.Header = TabsHeader;
Tabs.Content = TabsContent;

export default Tabs;
export { Tabs, TabsHeader, TabsContent, Tab, TabTitle };
