import React, {PropTypes} from 'react';
import cx from 'classnames';
import Transition from 'react-overlays/lib/Transition';

import styles from './styles.scss';
import joinObjects from '../../util/join-objects';

export default class Fade extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    timeout: PropTypes.number
  };

  static defaultProps = {
    timeout: 150
  };

  getClassNames = () => joinObjects(styles, {fade: true});

  getEnterClassNames = () => joinObjects(styles, {in: true});

  render() {
    const {children, className, timeout} = this.props;
    const enterClassNames = cx(this.getEnterClassNames());

    return (
      <Transition
        {...this.props}
        className={cx(className, this.getClassNames())}
        enteredClassName={enterClassNames}
        enteringClassName={enterClassNames}
        timeout={timeout}
      >
        {children}
      </Transition>
    );
  }
}
