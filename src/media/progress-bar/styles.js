import checkStyles from '../../util/check-styles';
import { COMPONENT_COLORS } from '../../util/constants';

export default checkStyles(
  require('./stylesheet.scss'),
  ['progress', 'progress-meter', 'progress-meter-text'].concat(COMPONENT_COLORS)
);
