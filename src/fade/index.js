import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import Transition from 'react-overlays/lib/Transition';

import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export class Fade extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    timeout: PropTypes.number,
  };

  static defaultProps = {
    timeout: 150,
  };

  render() {
    const { className, timeout } = this.props;
    const classNames = cx(className, cxStyles('fade'));

    return (
      <Transition
        {...this.props}
        className={classNames}
        enteredClassName={cxStyles('in')}
        enteringClassName={cxStyles('in')}
        timeout={timeout}
      />
    );
  }
}

export default Fade;
