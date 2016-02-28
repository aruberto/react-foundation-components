import styles from './_styles.scss';
import create from './create';

const { Dropdown, HasDropdown, LinkWithDropdown } = create(styles);
Dropdown.Has = HasDropdown;
Dropdown.LinkWith = LinkWithDropdown;

export default Dropdown;
export { Dropdown, HasDropdown, LinkWithDropdown };
