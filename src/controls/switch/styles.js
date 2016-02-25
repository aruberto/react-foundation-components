import checkStyles from '../../util/check-styles';
import { COMPONENT_SIZES } from '../../util/constants';

export default checkStyles(
  require('./stylesheet.scss'),
  ['switch', 'switch-input', 'switch-paddle', 'switch-active', 'switch-inactive']
    .concat(COMPONENT_SIZES)
);
