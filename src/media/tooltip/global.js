import styles from './styles';
import create from './create';
import Fade from '../../transitions/fade/global';

const { Tooltip, HasTooltip } = create(styles, Fade);
Tooltip.Has = HasTooltip;

export default Tooltip;
export { Tooltip, HasTooltip };
