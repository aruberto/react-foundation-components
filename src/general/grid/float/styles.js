import checkStyles from '../../../util/check-styles';
import { FLOAT_GRID_ROW_CLASS_NAMES, FLOAT_GRID_COLUMN_CLASS_NAMES } from '../../../util/constants';
import { createScreenSizeClassNames } from '../../../util/grid';

export default checkStyles(
  require('./stylesheet.scss'),
  ['row', 'column', 'expanded', 'end']
    .concat(createScreenSizeClassNames(FLOAT_GRID_ROW_CLASS_NAMES))
    .concat(createScreenSizeClassNames(FLOAT_GRID_COLUMN_CLASS_NAMES))
);
