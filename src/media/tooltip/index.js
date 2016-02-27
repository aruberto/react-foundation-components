import styles from './_styles.scss';
import create from './create';
import Fade from '../../transitions/fade';

const { Tooltip, LinkWithTooltip } = create(styles, Fade);
Tooltip.LinkWith = LinkWithTooltip;

export default Tooltip;
export { Tooltip, LinkWithTooltip };
