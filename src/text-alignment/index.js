import { TEXT_ALIGNMENT_CLASS_NAMES } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';
import {
  createScreenSizeProps,
  createScreenSizePropTypes,
  createScreenSizeClassNames,
} from '../util/screen-size';
import styles from './_styles.scss';

const textAlignmentProps = createScreenSizeProps(TEXT_ALIGNMENT_CLASS_NAMES);

export const TextAlignment = createWrapperComponent({
  displayName: 'TextAlignment',
  styles,
  propTypes: createScreenSizePropTypes(textAlignmentProps),
  mapProps: props => createScreenSizeClassNames(textAlignmentProps, props),
  defaultComponentClass: 'div',
});

export default TextAlignment;
