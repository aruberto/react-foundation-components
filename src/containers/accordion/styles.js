/* eslint-disable no-process-env */

let styles = {};

if (process.env.CSS_MODE === 'modules') {
  styles = require('./stylesheet.scss');
} else {
  if (process.env.CSS_MODE === 'global') {
    require('./stylesheet.scss');
  }

  const classNames = [
    'accordion',
    'accordion-item',
    'accordion-title',
    'accordion-content',
    'is-active'
  ];
  const keyMirrorArray = require('../../util/key-mirror-array').default;

  styles = keyMirrorArray(classNames);
}

export default styles;
