import keyMirrorArray from '../../util/key-mirror-array';
import { MODAL_SIZES } from '../../util/constants';

const styles = ['reveal', 'reveal-overlay', 'reveal-container'].concat(MODAL_SIZES);

export default keyMirrorArray(styles);
