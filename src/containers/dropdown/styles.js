/* eslint-disable no-process-env */

let styles = {};

if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'modules') {
  styles = require('./stylesheet.scss');
} else {
  if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'global') {
    require('./stylesheet.scss');
  }

  const {COMPONENT_SIZES, OVERLAY_POSITIONS} = require('../../util/constants');
  const classNames = ['dropdown-pane', 'is-open'].concat(COMPONENT_SIZES).concat(OVERLAY_POSITIONS);
  const keyMirrorArray = require('../../util/key-mirror-array').default;

  styles = keyMirrorArray(classNames);
}

export default styles;
