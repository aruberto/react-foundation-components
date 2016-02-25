import keyMirrorArray from '../../../util/key-mirror-array';
import { COMPONENT_SIZES, COMPONENT_COLORS } from '../../../util/constants';

const styles =
  ['button-group', 'button', 'expanded', 'hollow', 'stacked', 'stacked-for-small']
    .concat(COMPONENT_SIZES)
    .concat(COMPONENT_COLORS);

export default keyMirrorArray(styles);
