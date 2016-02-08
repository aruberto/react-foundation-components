let styles = {};

if (process.env.REACT_FOUNDATION_COMPONENTS_CSS !== 'global'
    && process.env.REACT_FOUNDATION_COMPONENTS_CSS !== 'none') {
  styles = require('./stylesheet.scss');
} else {
  if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'global') {
    require('./stylesheet.scss');
  }

  const { OVERLAY_POSITIONS } = require('../../util/constants');
  const classNames = ['tooltip', 'has-tip'].concat(OVERLAY_POSITIONS);
  const keyMirrorArray = require('../../util/key-mirror-array').default;

  styles = keyMirrorArray(classNames);
}

export default styles;