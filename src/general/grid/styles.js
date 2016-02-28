import keyMirrorArray from '../../util/key-mirror-array';
import { GRID_ROW_CLASS_NAMES, GRID_COLUMN_CLASS_NAMES } from '../../util/constants';
import { createScreenSizeClassNames } from '../../util/screen-size';

const styles =
  ['row', 'column', 'expanded', 'end']
    .concat(createScreenSizeClassNames(GRID_ROW_CLASS_NAMES))
    .concat(createScreenSizeClassNames(GRID_COLUMN_CLASS_NAMES));

export default keyMirrorArray(styles);
