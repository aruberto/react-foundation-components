import checkStyles from '../../util/check-styles';
import { TEXT_ALIGNMENTS } from '../../util/constants';

export default checkStyles(
  require('./stylesheet.scss'),
  TEXT_ALIGNMENTS.map((alignment) => `text-${alignment}`)
);
