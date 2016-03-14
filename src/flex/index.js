import { PropTypes } from 'react';

import {
  FLEX_HORIZONTAL_ALIGNMENTS,
  FLEX_VERTICAL_ALIGNMENTS,
  FLEX_PARENT_CLASS_NAMES,
  FLEX_CHILD_CLASS_NAMES,
} from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';
import {
  createScreenSizePropTypes,
  createScreenSizeClassNamesFromProps,
} from '../util/screen-size';
import styles from './_styles.scss';

export const FlexParent = createWrapperComponent({
  displayName: 'FlexParent',
  styles,
  propTypes: ({
    ...createScreenSizePropTypes(FLEX_PARENT_CLASS_NAMES),
    horizontalAlignment: PropTypes.oneOf(FLEX_HORIZONTAL_ALIGNMENTS),
    verticalAlignment: PropTypes.oneOf(FLEX_VERTICAL_ALIGNMENTS),
  }),
  mapPropsToClassNames:
    ({ horizontalAlignment, verticalAlignment, ...props }) => ({
      ...createScreenSizeClassNamesFromProps(FLEX_PARENT_CLASS_NAMES, props),
      [`align-${horizontalAlignment}`]: FLEX_HORIZONTAL_ALIGNMENTS.includes(horizontalAlignment),
      [`align-${verticalAlignment}`]: FLEX_VERTICAL_ALIGNMENTS.includes(verticalAlignment),
    }),
  mapPropsToStyle: () => ({ display: 'flex' }),
  defaultComponentClass: 'div',
});

export const FlexChild = createWrapperComponent({
  displayName: 'FlexChild',
  styles,
  propTypes: ({
    ...createScreenSizePropTypes(FLEX_CHILD_CLASS_NAMES),
    verticalAlignment: PropTypes.oneOf(FLEX_VERTICAL_ALIGNMENTS),
  }),
  mapPropsToClassNames:
    ({ verticalAlignment, ...props }) => ({
      ...createScreenSizeClassNamesFromProps(FLEX_CHILD_CLASS_NAMES, props),
      [`align-self-${verticalAlignment}`]: FLEX_VERTICAL_ALIGNMENTS.includes(verticalAlignment),
    }),
  defaultComponentClass: 'div',
});

export const Flex = { Parent: FlexParent, Child: FlexChild };

export default Flex;
