import keyMirrorArray from '../../util/key-mirror-array';
import { MEDIA_OBJECT_SECTION_ALIGNMENTS } from '../../util/constants';
import baseStyles from '../styles';

const styles = {
  ...baseStyles,
  ...keyMirrorArray(['main-section']),
};

MEDIA_OBJECT_SECTION_ALIGNMENTS.forEach((alignment) => delete styles[alignment]);

export default styles;
