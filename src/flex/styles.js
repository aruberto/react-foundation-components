import keyMirrorArray from '../util/key-mirror-array';
import {
  FLEX_HORIZONTAL_ALIGNMENTS_INTERNAL,
  FLEX_VERTICAL_ALIGNMENTS,
  FLEX_PARENT_CLASS_NAMES,
  FLEX_CHILD_CLASS_NAMES,
} from '../util/constants';
import { createScreenSizeClassNames } from '../util/screen-size';

const styles =
  FLEX_HORIZONTAL_ALIGNMENTS_INTERNAL.map((align) => `align-${align}`)
    .concat(FLEX_VERTICAL_ALIGNMENTS.map((align) => `align-${align}`))
    .concat(FLEX_VERTICAL_ALIGNMENTS.map((align) => `align-self-${align}`))
    .concat(createScreenSizeClassNames(FLEX_PARENT_CLASS_NAMES))
    .concat(createScreenSizeClassNames(FLEX_CHILD_CLASS_NAMES));

export default keyMirrorArray(styles);
