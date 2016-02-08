import checkStyles from '../../util/check-styles';
import { CALLOUT_SIZES, COMPONENT_COLORS } from '../../util/constants';

export default checkStyles(
  require('./stylesheet.scss'),
  ['callout'].concat(CALLOUT_SIZES).concat(COMPONENT_COLORS)
);
