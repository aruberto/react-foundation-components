import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import TransitionBase from 'react-overlays/lib/Transition';

import styles from './styles.scss';
import joinObjects from '../../util/join-objects';

const TRANSITION_ENTER_NAMES = [
  'slide-in-down',
  'slide-in-left',
  'slide-in-up',
  'slide-in-right',
  'fade-in',
  'hinge-in-from-top',
  'hinge-in-from-right',
  'hinge-in-from-bottom',
  'hinge-in-from-left',
  'hinge-in-from-middle-x',
  'hinge-in-from-middle-y',
  'scale-in-up',
  'scale-in-down',
  'spin-in',
  'spin-in-ccw'
];
const TRANSITION_EXIT_NAMES = [
  'slide-out-down',
  'slide-out-left',
  'slide-out-right',
  'slide-out-up',
  'fade-out',
  'hinge-out-from-top',
  'hinge-out-from-right',
  'hinge-out-from-bottom',
  'hinge-out-from-left',
  'hinge-out-from-middle-x',
  'hinge-out-from-middle-y',
  'scale-out-up',
  'scale-out-down',
  'spin-out',
  'spin-out-ccw'
];
const TRANSITION_SPEEDS = ['slow', 'fast'];
const TRANSITION_EASINGS = [
  'linear',
  'ease',
  'ease-in',
  'ease-out',
  'ease-in-out',
  'bounce-in',
  'bounce-out',
  'bounce-in-out'
];
const TRANSITION_DELAYS = ['short', 'long'];

export default class Transition extends Component {
  static propTypes = {
    children: PropTypes.node,
    delay: PropTypes.oneOf(TRANSITION_DELAYS),
    easing: PropTypes.oneOf(TRANSITION_EASINGS),
    enterClassName: PropTypes.oneOf(TRANSITION_ENTER_NAMES).isRequired,
    exitClassName: PropTypes.oneOf(TRANSITION_EXIT_NAMES).isRequired,
    speed: PropTypes.oneOf(TRANSITION_SPEEDS),
    timeout: PropTypes.number
  };

  static defaultProps = {
    timeout: 250
  };

  render() {
    const {children, delay, easing, enterClassName, exitClassName, speed} = this.props;
    const commonClassNames = {
      [`${delay}-delay`]: TRANSITION_DELAYS.includes(delay),
      [easing]: TRANSITION_EASINGS.includes(easing),
      [speed]: TRANSITION_SPEEDS.includes(speed)
    };
    const enteringClassNames = {
      ...commonClassNames,
      [enterClassName]: true,
      'mui-enter': true
    };
    const enteredClassNames = {
      ...enteringClassNames,
      'mui-enter-active': true
    };
    const exitingClassNames = {
      ...commonClassNames,
      [exitClassName]: true,
      'mui-leave': true
    };
    const exitedClassNames = {
      ...exitingClassNames,
      'mui-leave-active': true
    };

    return (
      <TransitionBase
        {...this.props}
        enteredClassName={cx(joinObjects(styles, enteredClassNames))}
        enteringClassName={cx(joinObjects(styles, enteringClassNames))}
        exitedClassName={cx(joinObjects(styles, exitedClassNames))}
        exitingClassName={cx(joinObjects(styles, exitingClassNames))}
      >
        {children}
      </TransitionBase>
    );
  }
}
