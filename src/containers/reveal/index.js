import styles from './_styles.scss';
import create from './create';
import Fade from '../../transitions/fade';

const { Reveal } = create(styles, Fade);

export default Reveal;
export { Reveal };
