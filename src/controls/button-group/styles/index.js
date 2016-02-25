if (process.env.RFC_CSS_MODE === 'none') {
  module.exports = require('./classNames');
} else if (process.env.RFC_CSS_MODE === 'global') {
  require('./styles.scss');
  module.exports = require('./classNames');
} else {
  module.exports = require('./styles.scss');
}
