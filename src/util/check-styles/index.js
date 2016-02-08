import isPlainObject from 'lodash/isPlainObject';
import isEmpty from 'lodash/isEmpty';

export default function checkStyles(styles, defaults) {
  if (!isPlainObject(styles) || isEmpty(styles)) {
    const result = {};

    defaults.forEach((item) => result[item] = item);

    return result;
  }

  return styles;
}
