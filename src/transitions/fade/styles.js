let styles = {};

if (process.env.REACT_FOUNDATION_COMPONENTS_CSS !== 'global'
    && process.env.REACT_FOUNDATION_COMPONENTS_CSS !== 'none') {
  styles = require('./stylesheet.scss');
} else {
  if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'global') {
    require('./stylesheet.scss');
  }

  const classNames = ['fade', 'in'];
  const keyMirrorArray = require('../../util/key-mirror-array').default;

  styles = keyMirrorArray(classNames);
}

export default styles;
