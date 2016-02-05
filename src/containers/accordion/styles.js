/* eslint-disable no-process-env */

let styles = {};

if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'modules') {
  styles = require('./stylesheet.scss');
} else {
  if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'global') {
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
