import checkStyles from '../../util/check-styles';
import { MEDIA_OBJECT_SECTION_ALIGNMENTS } from '../../util/constants';

export default checkStyles(
  require('./stylesheet.scss'),
  ['media-object', 'media-object-section', 'stack-for-small']
    .concat(MEDIA_OBJECT_SECTION_ALIGNMENTS)
);
