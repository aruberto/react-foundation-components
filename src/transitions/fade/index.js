import React, { PropTypes } from 'react';
import cx from 'classnames';
import Transition from 'react-overlays/lib/Transition';

import styles from './styles';

export default class Fade extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    timeout: PropTypes.number,
  };

  static defaultProps = {
    timeout: 150,
  };

  render() {
    const { children, className, timeout } = this.props;
    const classNames = cx(className, styles.fade);

    return (
      <Transition
        {...this.props}
        className={classNames}
        enteredClassName={styles.in}
        enteringClassName={styles.in}
        timeout={timeout}
      >
        {children}
      </Transition>
    );
  }
}
