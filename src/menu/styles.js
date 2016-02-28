import keyMirrorArray from '../util/key-mirror-array';
import { LARGER_SCREEN_SIZES } from '../util/constants';

const styles = [
  'menu',
  'vertical',
  'simple',
  'expanded',
  'icon-top',
  'nested',
  'active',
  'menu-text',
  'menu-centered',
]
  .concat(LARGER_SCREEN_SIZES.map((size) => `${size}-horizontal`))
  .concat(LARGER_SCREEN_SIZES.map((size) => `${size}-vertical`));

export default keyMirrorArray(styles);
