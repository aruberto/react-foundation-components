import keyMirrorArray from '../../util/key-mirror-array';
import { FLOAT_POSITIONS } from '../../util/constants';

const styles = ['clearfix'].concat(FLOAT_POSITIONS.map((position) => `float-${position}`));

export default keyMirrorArray(styles);
