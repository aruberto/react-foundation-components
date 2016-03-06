import keyMirrorArray from '../util/key-mirror-array';
import { LARGER_SCREEN_SIZES } from '../util/constants';

const styles = [
  'form-field',
  'is-invalid-input',
  'is-invalid-label',
  'form-error',
  'is-visible',
  'help-text',
  'middle',
  'input-group',
  'input-group-field',
  'input-group-label',
  'input-group-button',
]
  .concat(LARGER_SCREEN_SIZES.map((size) => `${size}-middle`));

export default keyMirrorArray(styles);
