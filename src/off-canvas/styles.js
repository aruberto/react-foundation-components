import keyMirrorArray from '../util/key-mirror-array';
import { LARGER_SCREEN_SIZES, OFF_CANVAS_POSITIONS } from '../util/constants';

const styles = [
  'off-canvas',
  'off-canvas-wrapper',
  'off-canvas-wrapper-inner',
  'off-canvas-content',
  'js-off-canvas-exit',
]
  .concat(OFF_CANVAS_POSITIONS.map((position) => `position-${position}`))
  .concat(OFF_CANVAS_POSITIONS.map((position) => `is-open-${position}`))
  .concat(LARGER_SCREEN_SIZES.map((size) => `reveal-for-${size}`));

export default keyMirrorArray(styles);
