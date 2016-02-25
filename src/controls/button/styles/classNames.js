import keyMirrorArray from '../../../util/key-mirror-array';
import { COMPONENT_SIZES, COMPONENT_COLORS } from '../../../util/constants';

const styles =
  ['button', 'disabled', 'dropdown', 'arrow-only', 'expanded', 'hollow']
    .concat(COMPONENT_SIZES)
    .concat(COMPONENT_COLORS);

export default keyMirrorArray(styles);
