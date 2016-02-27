import styles from './_styles.scss';
import create from './create';

const { Tab, TabTitle, TabsContent, TabsHeader, Tabs } = create(styles);
Tab.Title = TabTitle;
Tabs.Tab = Tab;
Tabs.Header = TabsHeader;
Tabs.Content = TabsContent;

export default Tabs;
export { Tab, TabTitle, TabsContent, TabsHeader, Tabs };
