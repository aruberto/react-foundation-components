let styles = {};

if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'modules') {
  styles = require('./stylesheet.scss');
} else {
  if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'global') {
    require('./stylesheet.scss');
  }

  const { TITLE_BAR_POSITIONS } = require('../../util/constants');
  const classNames = ['title-bar', 'title-bar-title', 'menu-icon', 'dark']
    .concat(TITLE_BAR_POSITIONS.map((pos) => `title-bar-${pos}`));
  const keyMirrorArray = require('../../util/key-mirror-array').default;

  styles = keyMirrorArray(classNames);
}

export default styles;
