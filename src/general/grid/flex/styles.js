import keyMirrorArray from '../../../util/key-mirror-array';
import {
  FLEX_HORIZONTAL_ALIGNMENTS,
  FLEX_VERTICAL_ALIGNMENTS,
  FLEX_GRID_ROW_CLASS_NAMES,
  FLEX_GRID_COLUMN_CLASS_NAMES,
} from '../../../util/constants';
import { createScreenSizeClassNames } from '../../../util/screen-size';

const styles =
  ['row', 'column', 'expanded', 'shrink']
    .concat(FLEX_HORIZONTAL_ALIGNMENTS.map((align) => `align-${align}`))
    .concat(FLEX_VERTICAL_ALIGNMENTS.map((align) => `align-${align}`))
    .concat(FLEX_VERTICAL_ALIGNMENTS.map((align) => `align-self-${align}`))
    .concat(createScreenSizeClassNames(FLEX_GRID_ROW_CLASS_NAMES))
    .concat(createScreenSizeClassNames(FLEX_GRID_COLUMN_CLASS_NAMES));

export default keyMirrorArray(styles);
