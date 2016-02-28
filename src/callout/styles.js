import keyMirrorArray from '../util/key-mirror-array';
import { CALLOUT_SIZES, COMPONENT_COLORS } from '../util/constants';

const styles = ['callout'].concat(CALLOUT_SIZES).concat(COMPONENT_COLORS);

export default keyMirrorArray(styles);
