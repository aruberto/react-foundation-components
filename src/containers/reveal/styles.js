import checkStyles from '../../util/check-styles';
import { MODAL_SIZES } from '../../util/constants';

export default checkStyles(
  require('./stylesheet.scss'),
  ['reveal', 'reveal-overlay'].concat(MODAL_SIZES)
);
