import keyMirrorArray from '../util/key-mirror-array';
import { FLEX_PARENT_CLASS_NAMES, FLEX_CHILD_CLASS_NAMES } from '../util/constants';
import { createScreenSizeClassNames } from '../util/screen-size';

const styles =
  createScreenSizeClassNames(FLEX_PARENT_CLASS_NAMES)
    .concat(createScreenSizeClassNames(FLEX_CHILD_CLASS_NAMES));

export default keyMirrorArray(styles);
