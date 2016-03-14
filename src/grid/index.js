import { PropTypes } from 'react';

import { GRID_ROW_CLASS_NAMES, GRID_COLUMN_CLASS_NAMES } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';
import {
  createScreenSizePropTypes,
  createScreenSizeClassNamesFromProps,
} from '../util/screen-size';
import styles from './_styles.scss';

export const Row = createWrapperComponent({
  displayName: 'Row',
  styles,
  propTypes: {
    ...createScreenSizePropTypes(GRID_ROW_CLASS_NAMES),
    collapse: PropTypes.bool,
    expanded: PropTypes.bool,
  },
  mapPropsToClassNames: ({ collapse, expanded, ...props }) => [
    'row',
    {
      ...createScreenSizeClassNamesFromProps(GRID_ROW_CLASS_NAMES, props),
      collapse,
      expanded,
    },
  ],
  defaultComponentClass: 'div',
});

export const Column = createWrapperComponent({
  displayName: 'Column',
  styles,
  propTypes: {
    ...createScreenSizePropTypes(GRID_COLUMN_CLASS_NAMES),
    end: PropTypes.bool,
  },
  mapPropsToClassNames: ({ end, ...props }) => [
    'column',
    {
      ...createScreenSizeClassNamesFromProps(GRID_COLUMN_CLASS_NAMES, props),
      end,
    },
  ],
  defaultComponentClass: 'div',
});

export const Grid = { Row, Column };

export default Grid;
