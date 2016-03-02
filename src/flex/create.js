import {
  FLEX_PARENT_CLASS_NAMES,
  FLEX_CHILD_CLASS_NAMES,
} from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';
import {
  createScreenSizePropTypes,
  createScreenSizeClassNamesFromProps,
} from '../util/screen-size';

export default function create(styles) {
  const Parent = createWrapperComponent({
    displayName: 'FlexParent',
    propTypes: createScreenSizePropTypes(FLEX_PARENT_CLASS_NAMES),
    mapPropsToClassNames:
      (props) => createScreenSizeClassNamesFromProps(FLEX_PARENT_CLASS_NAMES, props, styles),
    mapPropsToStyle: () => ({ display: 'flex' }),
    defaultComponentClass: 'div',
  });

  const Child = createWrapperComponent({
    displayName: 'FlexChild',
    propTypes: createScreenSizePropTypes(FLEX_CHILD_CLASS_NAMES),
    mapPropsToClassNames:
      (props) => createScreenSizeClassNamesFromProps(FLEX_CHILD_CLASS_NAMES, props, styles),
    defaultComponentClass: 'div',
  });

  return { Parent, Child };
}
