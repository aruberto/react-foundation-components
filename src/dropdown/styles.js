import keyMirrorArray from '../util/key-mirror-array';
import { COMPONENT_SIZES, OVERLAY_POSITIONS_INTERNAL } from '../util/constants';

const styles =
  ['dropdown-pane', 'is-open'].concat(COMPONENT_SIZES).concat(OVERLAY_POSITIONS_INTERNAL);

export default keyMirrorArray(styles);
