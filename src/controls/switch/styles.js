/* eslint-disable no-process-env */

let styles = {};

if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'modules') {
  styles = require('./stylesheet.scss');
} else {
  if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'global') {
    require('./stylesheet.scss');
  }

  const {COMPONENT_SIZES} = require('../../util/constants');
  const classNames = ['switch', 'switch-input', 'switch-paddle', 'switch-active', 'switch-inactive']
    .concat(COMPONENT_SIZES);
  const keyMirrorArray = require('../../util/key-mirror-array').default;

  styles = keyMirrorArray(classNames);
}

export default styles;
