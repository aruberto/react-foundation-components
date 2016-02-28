import keyMirrorArray from '../util/key-mirror-array';
import { SCREEN_SIZES, TOP_BAR_POSITIONS } from '../util/constants';

const styles =
  ['top-bar', 'top-bar-title']
    .concat(TOP_BAR_POSITIONS.map((position) => `top-bar-${position}`))
    .concat(SCREEN_SIZES.map((size) => `stacked-for-${size}`));

export default keyMirrorArray(styles);
