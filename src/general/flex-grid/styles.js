let styles = {};

if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'modules') {
  styles = require('./stylesheet.scss');
} else {
  if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'global') {
    require('./stylesheet.scss');
  }

  const {
    FLEX_GRID_ROW_CLASS_NAMES,
    FLEX_GRID_COLUMN_CLASS_NAMES,
    FLEX_GRID_HORIZONTAL_ALIGNMENTS,
    FLEX_GRID_VERTICAL_ALIGNMENTS,
  } = require('../../util/constants');
  const { createScreenSizeClassNames } = require('../../util/grid');

  const classNames = ['row', 'column', 'expanded', 'shrink']
    .concat(createScreenSizeClassNames(FLEX_GRID_ROW_CLASS_NAMES))
    .concat(createScreenSizeClassNames(FLEX_GRID_COLUMN_CLASS_NAMES))
    .concat(FLEX_GRID_HORIZONTAL_ALIGNMENTS.map((align) => `align-${align}`))
    .concat(FLEX_GRID_VERTICAL_ALIGNMENTS.map((align) => `align-${align}`));
  const keyMirrorArray = require('../../util/key-mirror-array').default;

  styles = keyMirrorArray(classNames);
}

export default styles;
