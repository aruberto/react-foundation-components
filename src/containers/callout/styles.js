/* eslint-disable no-process-env */

let styles = {};

if (process.env.CSS_MODE === 'modules') {
  styles = require('./stylesheet.scss');
} else {
  if (process.env.CSS_MODE === 'global') {
    require('./stylesheet.scss');
  }

  const {CALLOUT_SIZES, COMPONENT_COLORS} = require('../../util/constants');
  const classNames = ['callout'].concat(CALLOUT_SIZES).concat(COMPONENT_COLORS);
  const keyMirrorArray = require('../../util/key-mirror-array').default;

  styles = keyMirrorArray(classNames);
}

export default styles;
