import checkStyles from '../../util/check-styles';
import { COMPONENT_COLORS } from '../../util/constants';

export default checkStyles(
  require('./stylesheet.scss'),
  ['label'].concat(COMPONENT_COLORS)
);
