import styles from './_styles.scss';
import create from './create';
import Fade from '../fade';

const { Tooltip, HasTooltip, LinkWithTooltip } = create(styles, Fade);
Tooltip.Has = HasTooltip;
Tooltip.LinkWith = LinkWithTooltip;

export default Tooltip;
export { Tooltip, LinkWithTooltip };
