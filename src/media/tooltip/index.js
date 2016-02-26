import styles from './_styles.scss';
import create from './create';
import Fade from '../../transitions/fade';

const { Tooltip, HasTooltip } = create(styles, Fade);
Tooltip.Has = HasTooltip;

export default Tooltip;
export { Tooltip, HasTooltip };
