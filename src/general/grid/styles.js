let styles = {};

if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'modules') {
  styles = require('./stylesheet.scss');
} else {
  if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'global') {
    require('./stylesheet.scss');
  }

  const {
    FLOAT_GRID_ROW_CLASS_NAMES,
    FLOAT_GRID_COLUMN_CLASS_NAMES,
  } = require('../../util/constants');
  const { createScreenSizeClassNames } = require('../../util/grid');

  const classNames = ['row', 'column', 'expanded', 'end']
    .concat(createScreenSizeClassNames(FLOAT_GRID_ROW_CLASS_NAMES))
    .concat(createScreenSizeClassNames(FLOAT_GRID_COLUMN_CLASS_NAMES));
  const keyMirrorArray = require('../../util/key-mirror-array').default;

  styles = keyMirrorArray(classNames);
}

export default styles;
