import keyMirrorArray from '../../util/key-mirror-array';
import { createScreenSizeClassNames } from '../../util/grid';
import { FLOAT_GRID_ROW_CLASS_NAMES, FLOAT_GRID_COLUMN_CLASS_NAMES } from '../../util/constants';

const styles =
  ['row', 'column', 'expanded', 'end']
    .concat(createScreenSizeClassNames(FLOAT_GRID_ROW_CLASS_NAMES))
    .concat(createScreenSizeClassNames(FLOAT_GRID_COLUMN_CLASS_NAMES));

export default keyMirrorArray(styles);
