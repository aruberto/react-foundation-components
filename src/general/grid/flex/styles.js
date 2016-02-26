import keyMirrorArray from '../../../util/key-mirror-array';
import { createScreenSizeClassNames } from '../../../util/grid';
import {
  FLEX_GRID_ROW_CLASS_NAMES,
  FLEX_GRID_COLUMN_CLASS_NAMES,
  FLEX_GRID_HORIZONTAL_ALIGNMENTS,
  FLEX_GRID_VERTICAL_ALIGNMENTS,
} from '../../../util/constants';

const styles =
  ['row', 'column', 'expanded', 'shrink']
    .concat(createScreenSizeClassNames(FLEX_GRID_ROW_CLASS_NAMES))
    .concat(createScreenSizeClassNames(FLEX_GRID_COLUMN_CLASS_NAMES))
    .concat(FLEX_GRID_HORIZONTAL_ALIGNMENTS.map((align) => `align-${align}`))
    .concat(FLEX_GRID_VERTICAL_ALIGNMENTS.map((align) => `align-${align}`));

export default keyMirrorArray(styles);
