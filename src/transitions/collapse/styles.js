import checkStyles from '../../util/check-styles';

export default checkStyles(
  require('./stylesheet.scss'),
  ['collapse', 'collapsing', 'in', 'height', 'width']
);
