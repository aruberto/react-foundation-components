let styles = {};

if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'modules') {
  styles = require('./stylesheet.scss');
} else {
  if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'global') {
    require('./stylesheet.scss');
  }

  const { MEDIA_OBJECT_SECTION_ALIGNMENTS } = require('../../util/constants');
  const classNames = ['media-object', 'media-object-section', 'stack-for-small']
    .concat(MEDIA_OBJECT_SECTION_ALIGNMENTS);
  const keyMirrorArray = require('../../util/key-mirror-array').default;

  styles = keyMirrorArray(classNames);
}

export default styles;
