import checkStyles from '../../util/check-styles';
import { COMPONENT_SIZES, COMPONENT_COLORS } from '../../util/constants';

export default checkStyles(
  require('./stylesheet.scss'),
  ['button-group', 'button', 'expanded', 'hollow', 'stacked', 'stacked-for-small']
    .concat(COMPONENT_SIZES)
    .concat(COMPONENT_COLORS)
);
