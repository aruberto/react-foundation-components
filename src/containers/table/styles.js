import checkStyles from '../../util/check-styles';

export default checkStyles(
  require('./stylesheet.scss'),
  ['hover', 'scroll', 'stack']
);
