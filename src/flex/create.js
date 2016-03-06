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

export default function create(styles) {
  const FlexParent = createWrapperComponent({
    displayName: 'FlexParent',
    propTypes: ({
      ...createScreenSizePropTypes(FLEX_PARENT_CLASS_NAMES),
      horizontalAlignment: PropTypes.oneOf(FLEX_HORIZONTAL_ALIGNMENTS),
      verticalAlignment: PropTypes.oneOf(FLEX_VERTICAL_ALIGNMENTS),
    }),
    mapPropsToClassNames:
      ({ horizontalAlignment, verticalAlignment, ...props }) => ({
        ...createScreenSizeClassNamesFromProps(FLEX_PARENT_CLASS_NAMES, props, styles),
        [styles[`align-${horizontalAlignment}`]]:
          FLEX_HORIZONTAL_ALIGNMENTS.includes(horizontalAlignment),
        [styles[`align-${verticalAlignment}`]]:
          FLEX_VERTICAL_ALIGNMENTS.includes(verticalAlignment),
      }),
    mapPropsToStyle: () => ({ display: 'flex' }),
    defaultComponentClass: 'div',
  });

  const FlexChild = createWrapperComponent({
    displayName: 'FlexChild',
    propTypes: ({
      ...createScreenSizePropTypes(FLEX_CHILD_CLASS_NAMES),
      verticalAlignment: PropTypes.oneOf(FLEX_VERTICAL_ALIGNMENTS),
    }),
    mapPropsToClassNames:
      ({ verticalAlignment, ...props }) => ({
        ...createScreenSizeClassNamesFromProps(FLEX_CHILD_CLASS_NAMES, props, styles),
        [styles[`align-self-${verticalAlignment}`]]:
          FLEX_VERTICAL_ALIGNMENTS.includes(verticalAlignment),
      }),
    defaultComponentClass: 'div',
  });

  const Flex = {
    Parent: FlexParent,
    Child: FlexChild,
  };

  return { Flex, FlexParent, FlexChild };
}
