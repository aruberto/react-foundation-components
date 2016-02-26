import checkStyles from '../../../util/check-styles';
import {
  FLEX_GRID_ROW_CLASS_NAMES,
  FLEX_GRID_COLUMN_CLASS_NAMES,
  FLEX_GRID_HORIZONTAL_ALIGNMENTS,
  FLEX_GRID_VERTICAL_ALIGNMENTS,
} from '../../../util/constants';
import { createScreenSizeClassNames } from '../../../util/grid';

export default checkStyles(
  require('./stylesheet.scss'),
  ['row', 'column', 'expanded', 'shrink']
    .concat(createScreenSizeClassNames(FLEX_GRID_ROW_CLASS_NAMES))
    .concat(createScreenSizeClassNames(FLEX_GRID_COLUMN_CLASS_NAMES))
    .concat(FLEX_GRID_HORIZONTAL_ALIGNMENTS.map((align) => `align-${align}`))
    .concat(FLEX_GRID_VERTICAL_ALIGNMENTS.map((align) => `align-${align}`))
);
