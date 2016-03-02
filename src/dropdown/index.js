import styles from './_styles.scss';
import create from './create';

const { Dropdown, LinkWithDropdown } = create(styles);
Dropdown.LinkWith = LinkWithDropdown;

export default Dropdown;
export { Dropdown, LinkWithDropdown };
