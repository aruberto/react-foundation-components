import { PropTypes } from 'react';

import { GRID_ROW_CLASS_NAMES, GRID_COLUMN_CLASS_NAMES } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';
import {
  createScreenSizePropTypes,
  createScreenSizeClassNamesFromProps,
} from '../util/screen-size';

export default function create(styles) {
  const Row = createWrapperComponent({
    displayName: 'Row',
    propTypes: {
      ...createScreenSizePropTypes(GRID_ROW_CLASS_NAMES),
      collapse: PropTypes.bool,
      expanded: PropTypes.bool,
    },
    mapPropsToClassNames: ({ collapse, expanded, ...props }) => ({
      ...createScreenSizeClassNamesFromProps(GRID_ROW_CLASS_NAMES, props, styles),
      [styles.row]: true,
      [styles.collapse]: collapse,
      [styles.expanded]: expanded,
    }),
    defaultComponentClass: 'div',
  });

  const Column = createWrapperComponent({
    displayName: 'Column',
    propTypes: {
      ...createScreenSizePropTypes(GRID_COLUMN_CLASS_NAMES),
      end: PropTypes.bool,
    },
    mapPropsToClassNames: ({ end, ...props }) => ({
      ...createScreenSizeClassNamesFromProps(GRID_COLUMN_CLASS_NAMES, props, styles),
      [styles.column]: true,
      [styles.end]: end,
    }),
    defaultComponentClass: 'div',
  });

  return { Row, Column };
}
