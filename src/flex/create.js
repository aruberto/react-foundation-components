import { PropTypes } from 'react';

import {
  FLEX_HORIZONTAL_ALIGNMENTS,
  FLEX_HORIZONTAL_ALIGNMENTS_INTERNAL,
  FLEX_VERTICAL_ALIGNMENTS,
  FLEX_PARENT_CLASS_NAMES,
  FLEX_CHILD_CLASS_NAMES,
} from '../util/constants';
import createHigherOrderComponent from '../util/create-higher-order-component';
import {
  createScreenSizePropTypes,
  createScreenSizeClassNamesFromProps,
} from '../util/screen-size';

const parentPropTypes = createScreenSizePropTypes(FLEX_PARENT_CLASS_NAMES);
const childPropTypes = createScreenSizePropTypes(FLEX_CHILD_CLASS_NAMES);

export default function create(styles) {
  const Parent = createHigherOrderComponent({
    displayName: 'FlexParent',
    propTypes: {
      ...parentPropTypes,
      horizontalAlignment: PropTypes.oneOf(FLEX_HORIZONTAL_ALIGNMENTS),
      verticalAlignment: PropTypes.oneOf(FLEX_VERTICAL_ALIGNMENTS),
    },
    mapPropsToClassNames: ({ horizontalAlignment, verticalAlignment, ...props }) => {
      const classNames =
        createScreenSizeClassNamesFromProps(FLEX_PARENT_CLASS_NAMES, props, styles);

      classNames[styles[`align-${horizontalAlignment}`]] =
        FLEX_HORIZONTAL_ALIGNMENTS_INTERNAL.includes(horizontalAlignment);
      classNames[styles[`align-${verticalAlignment}`]] =
        FLEX_VERTICAL_ALIGNMENTS.includes(verticalAlignment);

      return classNames;
    },
    defaultComponentClass: 'div',
    mergeSingleChild: false,
  });

  const Child = createHigherOrderComponent({
    displayName: 'FlexChild',
    propTypes: {
      ...childPropTypes,
      verticalAlignment: PropTypes.oneOf(FLEX_VERTICAL_ALIGNMENTS),
    },
    mapPropsToClassNames: ({ verticalAlignment, ...props }) => {
      const classNames =
        createScreenSizeClassNamesFromProps(FLEX_CHILD_CLASS_NAMES, props, styles);

      classNames[styles[`align-self-${verticalAlignment}`]] =
        FLEX_VERTICAL_ALIGNMENTS.includes(verticalAlignment);

      return classNames;
    },
    defaultComponentClass: 'div',
    mergeSingleChild: false,
  });

  return { Parent, Child };
}
