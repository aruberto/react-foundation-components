import checkStyles from '../../util/check-styles';

export default checkStyles(
  require('./stylesheet.scss'),
  ['flex-video', 'vimeo', 'widescreen']
);
