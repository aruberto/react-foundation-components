import keyMirrorArray from '../util/key-mirror-array';
import { TITLE_BAR_POSITIONS } from '../util/constants';

const styles =
  ['title-bar', 'title-bar-title', 'menu-icon', 'dark']
    .concat(TITLE_BAR_POSITIONS.map((position) => `title-bar-${position}`));

export default keyMirrorArray(styles);
