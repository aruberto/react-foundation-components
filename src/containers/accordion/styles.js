import checkStyles from '../../util/check-styles';

export default checkStyles(
  require('./stylesheet.scss'),
  ['accordion', 'accordion-item', 'accordion-title', 'accordion-content', 'is-active']
);
