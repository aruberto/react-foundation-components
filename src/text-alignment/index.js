import { TEXT_ALIGNMENT_CLASS_NAMES } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';
import {
  createScreenSizePropTypes,
  createScreenSizeClassNamesFromProps,
} from '../util/screen-size';
import styles from './_styles.scss';

export const TextAlignment = createWrapperComponent({
  displayName: 'TextAlignment',
  styles,
  propTypes: createScreenSizePropTypes(TEXT_ALIGNMENT_CLASS_NAMES),
  mapPropsToClassNames:
    (props) => createScreenSizeClassNamesFromProps(TEXT_ALIGNMENT_CLASS_NAMES, props),
  defaultComponentClass: 'div',
});

export default TextAlignment;
