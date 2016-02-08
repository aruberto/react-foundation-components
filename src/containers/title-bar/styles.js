import checkStyles from '../../util/check-styles';
import { TITLE_BAR_POSITIONS } from '../../util/constants';

export default checkStyles(
  require('./stylesheet.scss'),
  ['title-bar', 'title-bar-title', 'menu-icon', 'dark']
    .concat(TITLE_BAR_POSITIONS.map((position) => `title-bar-${position}`))
);
