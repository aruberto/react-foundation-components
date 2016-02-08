import checkStyles from '../../util/check-styles';
import { COMPONENT_SIZES, COMPONENT_COLORS } from '../../util/constants';

export default checkStyles(
  require('./stylesheet.scss'),
  ['button', 'disabled', 'dropdown', 'arrow-only', 'expanded', 'hollow']
    .concat(COMPONENT_SIZES)
    .concat(COMPONENT_COLORS)
);
