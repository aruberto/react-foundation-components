import { PropTypes } from 'react';

import {
  FLEX_HORIZONTAL_ALIGNMENTS,
  FLEX_VERTICAL_ALIGNMENTS,
  FLEX_GRID_ROW_CLASS_NAMES,
  FLEX_GRID_COLUMN_CLASS_NAMES,
} from '../../../util/constants';
import createHigherOrderComponent from '../../../util/create-higher-order-component';
import {
  createScreenSizePropTypes,
  createScreenSizeClassNamesFromProps,
} from '../../../util/screen-size';

const rowPropTypes = createScreenSizePropTypes(FLEX_GRID_ROW_CLASS_NAMES);
const columnPropTypes = createScreenSizePropTypes(FLEX_GRID_COLUMN_CLASS_NAMES);

rowPropTypes.expanded = PropTypes.bool;
rowPropTypes.horizontalAlignment = PropTypes.oneOf(FLEX_HORIZONTAL_ALIGNMENTS);
rowPropTypes.verticalAlignment = PropTypes.oneOf(FLEX_VERTICAL_ALIGNMENTS);
columnPropTypes.shrink = PropTypes.bool;
columnPropTypes.verticalAlignment = PropTypes.oneOf(FLEX_VERTICAL_ALIGNMENTS);

export default function create(styles) {
  const Row = createHigherOrderComponent({
    displayName: 'Row',
    propTypes: rowPropTypes,
    mapPropsToClassNames: ({ expanded, horizontalAlignment, verticalAlignment, ...props }) => {
      const classNames =
        createScreenSizeClassNamesFromProps(FLEX_GRID_ROW_CLASS_NAMES, props, styles);

      classNames[styles.row] = true;
      classNames[styles.expanded] = expanded;
      classNames[styles[`align-${horizontalAlignment}`]] =
        FLEX_HORIZONTAL_ALIGNMENTS.includes(horizontalAlignment);
      classNames[styles[`align-${verticalAlignment}`]] =
        FLEX_VERTICAL_ALIGNMENTS.includes(verticalAlignment);

      return classNames;
    },
    defaultComponentClass: 'div',
    mergeSingleChild: false,
  });

  const Column = createHigherOrderComponent({
    displayName: 'Column',
    propTypes: columnPropTypes,
    mapPropsToClassNames: ({ shrink, verticalAlignment, ...props }) => {
      const classNames =
        createScreenSizeClassNamesFromProps(FLEX_GRID_COLUMN_CLASS_NAMES, props, styles);

      classNames[styles.column] = true;
      classNames[styles.shrink] = shrink;
      classNames[styles[`align-self-${verticalAlignment}`]] =
        FLEX_VERTICAL_ALIGNMENTS.includes(verticalAlignment);

      return classNames;
    },
    defaultComponentClass: 'div',
    mergeSingleChild: false,
  });

  return { Row, Column };
}
