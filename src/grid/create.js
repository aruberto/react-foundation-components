import { PropTypes } from 'react';

import { GRID_ROW_CLASS_NAMES, GRID_COLUMN_CLASS_NAMES } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';
import {
  createScreenSizePropTypes,
  createScreenSizeClassNamesFromProps,
} from '../util/screen-size';

const rowPropTypes = createScreenSizePropTypes(GRID_ROW_CLASS_NAMES);
const columnPropTypes = createScreenSizePropTypes(GRID_COLUMN_CLASS_NAMES);

rowPropTypes.collapse = PropTypes.bool;
rowPropTypes.expanded = PropTypes.bool;
columnPropTypes.end = PropTypes.bool;

export default function create(styles) {
  const Row = createWrapperComponent({
    displayName: 'Row',
    propTypes: rowPropTypes,
    mapPropsToClassNames: (props) => {
      const { collapse, expanded } = props;
      const classNames =
        createScreenSizeClassNamesFromProps(GRID_ROW_CLASS_NAMES, props, styles);

      classNames[styles.row] = true;
      classNames[styles.collapse] = collapse;
      classNames[styles.expanded] = expanded;

      return classNames;
    },
    defaultComponentClass: 'div',
  });

  const Column = createWrapperComponent({
    displayName: 'Column',
    propTypes: columnPropTypes,
    mapPropsToClassNames: (props) => {
      const { end } = props;
      const classNames =
        createScreenSizeClassNamesFromProps(GRID_COLUMN_CLASS_NAMES, props, styles);

      classNames[styles.column] = true;
      classNames[styles.end] = end;

      return classNames;
    },
    defaultComponentClass: 'div',
  });

  return { Row, Column };
}
