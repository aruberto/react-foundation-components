import React, {Component, PropTypes} from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import joinObjects from '../../util/join-objects';

export default class Thumbnail extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  getClassNames = () => joinObjects(styles, {thumbnail: true});

  render() {
    const {className} = this.props;

    return (
      <img {...this.props} className={cx(className, this.getClassNames())}/>
    );
  }
}
