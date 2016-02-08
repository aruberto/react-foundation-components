import checkStyles from '../../util/check-styles';
import { FLOAT_POSITIONS } from '../../util/constants';

export default checkStyles(
  require('./stylesheet.scss'),
  ['clearfix'].concat(FLOAT_POSITIONS.map((position) => `float-${position}`))
);
