import keyMirrorArray from '../util/key-mirror-array';
import { TEXT_ALIGNMENT_CLASS_NAMES } from '../util/constants';
import { createScreenSizeClassNames } from '../util/screen-size';

const styles = createScreenSizeClassNames(TEXT_ALIGNMENT_CLASS_NAMES);

export default keyMirrorArray(styles);
