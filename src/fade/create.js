import React, { PropTypes } from 'react';
import cx from 'classnames';
import Transition from 'react-overlays/lib/Transition';

export default function create(styles) {
  class Fade extends React.Component {
    static propTypes = {
      className: PropTypes.string,
      timeout: PropTypes.number,
    };

    static defaultProps = {
      timeout: 150,
    };

    render() {
      const { className, timeout } = this.props;
      const classNames = cx(className, styles.fade);

      return (
        <Transition
          {...this.props}
          className={classNames}
          enteredClassName={styles.in}
          enteringClassName={styles.in}
          timeout={timeout}
        />
      );
    }
  }

  return { Fade };
}
