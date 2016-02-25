import keyMirrorArray from '../../../util/key-mirror-array';
import { COMPONENT_SIZES } from '../../../util/constants';

const styles =
  ['switch', 'switch-input', 'switch-paddle', 'switch-active', 'switch-inactive']
    .concat(COMPONENT_SIZES);

export default keyMirrorArray(styles);
