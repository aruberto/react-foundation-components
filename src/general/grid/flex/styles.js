import keyMirrorArray from '../../../util/key-mirror-array';
import { FLEX_GRID_ROW_CLASS_NAMES, FLEX_GRID_COLUMN_CLASS_NAMES } from '../../../util/constants';
import { createScreenSizeClassNames } from '../../../util/screen-size';

const styles =
  ['row', 'column', 'collapse', 'expanded', 'shrink']
    .concat(createScreenSizeClassNames(FLEX_GRID_ROW_CLASS_NAMES))
    .concat(createScreenSizeClassNames(FLEX_GRID_COLUMN_CLASS_NAMES));

export default keyMirrorArray(styles);
