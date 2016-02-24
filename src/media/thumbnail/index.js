import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import styles from './styles';

export default class Thumbnail extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;
    const classNames = cx(className, styles.thumbnail);

    return <img {...this.props} className={classNames}/>;
  }
}
