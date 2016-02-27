import styles from './styles';
import create from './create';
import Fade from '../../transitions/fade/global';

const { Tooltip, LinkWithTooltip } = create(styles, Fade);
Tooltip.LinkWith = LinkWithTooltip;

export default Tooltip;
export { Tooltip, LinkWithTooltip };
