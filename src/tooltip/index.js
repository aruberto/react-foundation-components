import styles from './_styles.scss';
import create from './create';
import Fade from '../fade';

const { Tooltip, LinkWithTooltip } = create(styles, Fade);

export default Tooltip;
export { Tooltip, LinkWithTooltip };
