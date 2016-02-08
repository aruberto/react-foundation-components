import checkStyles from '../../util/check-styles';

export default checkStyles(
  require('./stylesheet.scss'),
  ['subheader', 'lead', 'no-bullet', 'stat']
);
