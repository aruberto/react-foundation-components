import { TEXT_ALIGNMENT_CLASS_NAMES } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';
import {
  createScreenSizePropTypes,
  createScreenSizeClassNamesFromProps,
} from '../util/screen-size';

export default function create(styles) {
  const TextAlignment = createWrapperComponent({
    displayName: 'TextAlignment',
    propTypes: createScreenSizePropTypes(TEXT_ALIGNMENT_CLASS_NAMES),
    mapPropsToClassNames:
      (props) => createScreenSizeClassNamesFromProps(TEXT_ALIGNMENT_CLASS_NAMES, props, styles),
    defaultComponentClass: 'p',
  });

  return { TextAlignment };
}
