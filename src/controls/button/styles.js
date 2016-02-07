let styles = {};

if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'modules') {
  styles = require('./stylesheet.scss');
} else {
  if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'global') {
    require('./stylesheet.scss');
  }

  const { COMPONENT_SIZES, COMPONENT_COLORS } = require('../../util/constants');
  const classNames = [
    'button',
    'disabled',
    'dropdown',
    'arrow-only',
    'expanded',
    'hollow',
  ]
    .concat(COMPONENT_SIZES)
    .concat(COMPONENT_COLORS);
  const keyMirrorArray = require('../../util/key-mirror-array').default;

  styles = keyMirrorArray(classNames);
}

export default styles;
