let styles = {};

if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'modules') {
  styles = require('./stylesheet.scss');
} else {
  if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'global') {
    require('./stylesheet.scss');
  }

  const {
    SCREEN_SIZES, LARGER_SCREEN_SIZES,
    SCREEN_ORIENTATIONS,
  } = require('../../util/constants');
  const classNames = ['hide', 'invisible', 'show-for-sr', 'show-on-focus']
    .concat(LARGER_SCREEN_SIZES.map((size) => `show-for-${size}`))
    .concat(SCREEN_SIZES.map((size) => `show-for-${size}-only`))
    .concat(LARGER_SCREEN_SIZES.map((size) => `hide-for-${size}`))
    .concat(SCREEN_SIZES.map((size) => `hide-for-${size}-only`))
    .concat(SCREEN_ORIENTATIONS.map((orientation) => `show-for-${orientation}`))
    .concat(SCREEN_ORIENTATIONS.map((orientation) => `hide-for-${orientation}`));
  const keyMirrorArray = require('../../util/key-mirror-array').default;

  styles = keyMirrorArray(classNames);
}

export default styles;
