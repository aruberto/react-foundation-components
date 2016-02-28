import keyMirrorArray from '../../util/key-mirror-array';
import {
  FLEX_HORIZONTAL_ALIGNMENTS_INTERNAL,
  FLEX_VERTICAL_ALIGNMENTS,
  FLEX_CHILD_CLASS_NAMES,
} from '../../util/constants';
import { createScreenSizeClassNames } from '../../util/screen-size';

const styles =
  []
    .concat(FLEX_HORIZONTAL_ALIGNMENTS_INTERNAL.map((align) => `align-${align}`))
    .concat(FLEX_VERTICAL_ALIGNMENTS.map((align) => `align-${align}`))
    .concat(FLEX_VERTICAL_ALIGNMENTS.map((align) => `align-self-${align}`))
    .concat(createScreenSizeClassNames(FLEX_CHILD_CLASS_NAMES));

export default keyMirrorArray(styles);
