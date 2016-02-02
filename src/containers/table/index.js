import React, {Component, PropTypes} from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import joinObjects from '../../util/join-objects';

export default class Table extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    hover: PropTypes.bool,
    scroll: PropTypes.bool,
    stack: PropTypes.bool
  };

  getClassNames = () => {
    const {hover, scroll, stack} = this.props;

    return joinObjects(styles, {hover, scroll, stack});
  };

  render() {
    const {children, className} = this.props;

    return (
      <table {...this.props} className={cx(className, this.getClassNames())}>
        {children}
      </table>
    );
  }
}
