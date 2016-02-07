let styles = {};

if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'modules') {
  styles = require('./stylesheet.scss');
} else {
  if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'global') {
    require('./stylesheet.scss');
  }

  const { LARGER_SCREEN_SIZES, OFF_CANVAS_POSITIONS } = require('../../util/constants');
  const classNames = [
    'off-canvas',
    'off-canvas-wrapper',
    'off-canvas-wrapper-inner',
    'off-canvas-content',
    'js-off-canvas-exit',
    'is-visible',
  ]
    .concat(OFF_CANVAS_POSITIONS.map((pos) => `position-${pos}`))
    .concat(OFF_CANVAS_POSITIONS.map((pos) => `is-open-${pos}`))
    .concat(LARGER_SCREEN_SIZES.map((size) => `reveal-for-${size}`));
  const keyMirrorArray = require('../../util/key-mirror-array').default;

  styles = keyMirrorArray(classNames);
}

export default styles;
