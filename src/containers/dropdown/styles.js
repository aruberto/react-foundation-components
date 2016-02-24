import checkStyles from '../../util/check-styles';
import { COMPONENT_SIZES, OVERLAY_POSITIONS_INTERNAL } from '../../util/constants';

export default checkStyles(
  require('./stylesheet.scss'),
  ['dropdown-pane', 'is-open'].concat(COMPONENT_SIZES).concat(OVERLAY_POSITIONS_INTERNAL)
);
