import checkStyles from '../../util/check-styles';

export default checkStyles(
  require('./stylesheet.scss'),
  ['table', 'table-scroll', 'hover', 'scroll', 'stack']
);
