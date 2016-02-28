import keyMirrorArray from '../util/key-mirror-array';
import { OVERLAY_POSITIONS_INTERNAL } from '../util/constants';

const styles = ['tooltip', 'has-tip'].concat(OVERLAY_POSITIONS_INTERNAL);

export default keyMirrorArray(styles);
