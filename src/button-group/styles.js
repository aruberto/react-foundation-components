import keyMirrorArray from '../util/key-mirror-array';
import {
  COMPONENT_SIZES,
  COMPONENT_COLORS,
  BUTTON_GROUP_STACK_SCREEN_SIZES,
} from '../util/constants';

const styles =
  ['button-group', 'button', 'expanded', 'hollow', 'stacked']
    .concat(COMPONENT_SIZES)
    .concat(COMPONENT_COLORS)
    .concat(BUTTON_GROUP_STACK_SCREEN_SIZES.map((size) => `stacked-for-${size}`));

export default keyMirrorArray(styles);
