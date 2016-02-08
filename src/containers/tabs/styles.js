import checkStyles from '../../util/check-styles';

export default checkStyles(
  require('./stylesheet.scss'),
  ['tabs', 'tabs-title', 'tabs-content', 'tabs-panel', 'is-active', 'vertical']
);
