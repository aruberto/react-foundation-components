import React, {PropTypes} from 'react';
import cx from 'classnames';
import Transition from 'react-overlays/lib/Transition';
import css from 'dom-helpers/style';
import capitalize from 'underscore.string/capitalize';

import styles from './styles.scss';
import joinObjects from '../../util/join-objects';

const MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

export default class Collapse extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dimension: PropTypes.oneOf(['height', 'width']),
    onEnter: PropTypes.func,
    onEntered: PropTypes.func,
    onEntering: PropTypes.func,
    onExit: PropTypes.func,
    onExiting: PropTypes.func,
    timeout: PropTypes.number
  };

  static defaultProps = {
    dimension: 'height',
    timeout: 350
  };

  getClassNames = () => {
    const {dimension} = this.props;

    return joinObjects(styles, {[dimension]: true});
  };

  getExitedClassNames = () => joinObjects(styles, {collapse: true});

  getEnteredClassNames = () => joinObjects(styles, {collapse: true, in: true});

  getTransitioningClassNames = () => joinObjects(styles, {collapsing: true});

  handleEnter = (...args) => {
    const {dimension, onEnter} = this.props;
    const [elem] = args;

    elem.style[dimension] = '0';

    if (onEnter) {
      onEnter(...args);
    }
  };

  handleEntered = (...args) => {
    const {dimension, onEntered} = this.props;
    const [elem] = args;

    elem.style[dimension] = null;

    if (onEntered) {
      onEntered(...args);
    }
  };

  handleEntering = (...args) => {
    const {dimension, onEntering} = this.props;
    const [elem] = args;
    const size = elem[`scroll${capitalize(dimension)}`];

    elem.style[dimension] = `${size}px`;

    if (onEntering) {
      onEntering(...args);
    }
  };

  handleExit = (...args) => {
    const {dimension, onExit} = this.props;
    const [elem] = args;
    const baseValue = elem[`offset${capitalize(dimension)}`];
    const margins = MARGINS[dimension];
    const value =
      baseValue
      + Number.parseInt(css(elem, margins[0]), 10)
      + Number.parseInt(css(elem, margins[1]), 10);

    elem.style[dimension] = `${value}px`;

    if (onExit) {
      onExit(...args);
    }
  };

  handleExiting = (...args) => {
    function triggerBrowserReflow(node) {
      return node.offsetHeight;
    }

    const {dimension, onExiting} = this.props;
    const [elem] = args;

    triggerBrowserReflow(elem);
    elem.style[dimension] = '0';

    if (onExiting) {
      onExiting(...args);
    }
  };

  render() {
    const {children, className, timeout} = this.props;
    const transitioningClassNames = cx(this.getTransitioningClassNames());

    return (
      <Transition
        {...this.props}
        className={cx(className, this.getClassNames())}
        enteredClassName={cx(this.getEnteredClassNames())}
        enteringClassName={transitioningClassNames}
        exitedClassName={cx(this.getExitedClassNames())}
        exitingClassName={transitioningClassNames}
        onEnter={this.handleEnter}
        onEntered={this.handleEntered}
        onEntering={this.handleEntering}
        onExit={this.handleExit}
        onExiting={this.handleExiting}
        timeout={timeout}
      >
        {children}
      </Transition>
    );
  }
}
