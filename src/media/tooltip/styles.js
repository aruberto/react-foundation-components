import checkStyles from '../../util/check-styles';
import { OVERLAY_POSITIONS_INTERNAL } from '../../util/constants';

export default checkStyles(
  require('./stylesheet.scss'),
  ['tooltip', 'has-tip'].concat(OVERLAY_POSITIONS_INTERNAL)
);
