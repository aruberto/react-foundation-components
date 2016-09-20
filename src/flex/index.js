import { PropTypes } from 'react';
import includes from 'lodash/includes';

import {
  FLEX_HORIZONTAL_ALIGNMENTS,
  FLEX_VERTICAL_ALIGNMENTS,
  FLEX_PARENT_CLASS_NAMES,
  FLEX_CHILD_CLASS_NAMES,
} from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';
import {
  createScreenSizeProps,
  createScreenSizePropTypes,
  createScreenSizeClassNames,
} from '../util/screen-size';
import styles from './_styles.scss';

const flexParentProps = createScreenSizeProps(FLEX_PARENT_CLASS_NAMES);
const flexChildProps = createScreenSizeProps(FLEX_CHILD_CLASS_NAMES);

export const FlexParent = createWrapperComponent({
  displayName: 'FlexParent',
  styles,
  propTypes: ({
    ...createScreenSizePropTypes(flexParentProps),
    horizontalAlignment: PropTypes.oneOf(FLEX_HORIZONTAL_ALIGNMENTS),
    verticalAlignment: PropTypes.oneOf(FLEX_VERTICAL_ALIGNMENTS),
  }),
  mapProps: ({ horizontalAlignment, verticalAlignment, ...restProps }) => {
    const { classNames, props } = createScreenSizeClassNames(flexParentProps, restProps);

    return {
      props,
      classNames: {
        ...classNames,
        [`align-${horizontalAlignment}`]: includes(FLEX_HORIZONTAL_ALIGNMENTS, horizontalAlignment),
        [`align-${verticalAlignment}`]: includes(FLEX_VERTICAL_ALIGNMENTS, verticalAlignment),
      },
      style: { display: 'flex' },
    };
  },
  defaultComponentClass: 'div',
});

export const FlexChild = createWrapperComponent({
  displayName: 'FlexChild',
  styles,
  propTypes: ({
    ...createScreenSizePropTypes(flexChildProps),
    verticalAlignment: PropTypes.oneOf(FLEX_VERTICAL_ALIGNMENTS),
  }),
  mapProps: ({ verticalAlignment, ...restProps }) => {
    const { classNames, props } = createScreenSizeClassNames(flexChildProps, restProps);

    return {
      props,
      classNames: {
        ...classNames,
        [`align-self-${verticalAlignment}`]: includes(FLEX_VERTICAL_ALIGNMENTS, verticalAlignment),
      },
    };
  },
  defaultComponentClass: 'div',
});

export const Flex = { Parent: FlexParent, Child: FlexChild };

export default Flex;
