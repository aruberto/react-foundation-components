import keyMirrorArray from '../util/key-mirror-array';
import { MEDIA_OBJECT_SECTION_ALIGNMENTS } from '../util/constants';

const styles =
  ['media-object', 'media-object-section', 'stack-for-small']
    .concat(MEDIA_OBJECT_SECTION_ALIGNMENTS);

export default keyMirrorArray(styles);
