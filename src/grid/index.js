import { PropTypes } from 'react';

import { GRID_ROW_CLASS_NAMES, GRID_COLUMN_CLASS_NAMES } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';
import {
  createScreenSizeProps,
  createScreenSizePropTypes,
  createScreenSizeClassNames,
} from '../util/screen-size';
import styles from './_styles.scss';

const rowProps = createScreenSizeProps(GRID_ROW_CLASS_NAMES);
const columnProps = createScreenSizeProps(GRID_COLUMN_CLASS_NAMES);

export const Row = createWrapperComponent({
  displayName: 'Row',
  styles,
  propTypes: {
    ...createScreenSizePropTypes(rowProps),
    collapse: PropTypes.bool,
    expanded: PropTypes.bool,
  },
  mapProps: ({ collapse, expanded, ...restProps }) => {
    const { classNames, props } = createScreenSizeClassNames(rowProps, restProps);

    return {
      props,
      classNames: ['row', { ...classNames, collapse, expanded }],
    };
  },
  defaultComponentClass: 'div',
});

export const Column = createWrapperComponent({
  displayName: 'Column',
  styles,
  propTypes: {
    ...createScreenSizePropTypes(columnProps),
    end: PropTypes.bool,
  },
  mapProps: ({ end, ...restProps }) => {
    const { classNames, props } = createScreenSizeClassNames(columnProps, restProps);

    return {
      props,
      classNames: ['column', { ...classNames, end }],
    };
  },
  defaultComponentClass: 'div',
});

export const Grid = { Row, Column };

export default Grid;
