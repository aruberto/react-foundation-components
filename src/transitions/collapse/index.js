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

  handleEnter = (elem) => {
    const {dimension} = this.props;

    elem.style[dimension] = '0';
  };

  handleEntered = (elem) => {
    const {dimension} = this.props;

    elem.style[dimension] = null;
  };

  handleEntering = (elem) => {
    const {dimension} = this.props;
    const size = elem[`scroll${capitalize(dimension)}`];

    elem.style[dimension] = `${size}px`;
  };

  handleExit = (elem) => {
    const {dimension} = this.props;
    const baseValue = elem[`offset${capitalize(dimension)}`];
    const margins = MARGINS[dimension];
    const value =
      baseValue
      + Number.parseInt(css(elem, margins[0]), 10)
      + Number.parseInt(css(elem, margins[1]), 10);

    elem.style[dimension] = `${value}px`;
  };

  handleExiting = (elem) => {
    function triggerBrowserReflow(node) {
      return node.offsetHeight;
    }

    const {dimension} = this.props;

    triggerBrowserReflow(elem);
    elem.style[dimension] = '0';
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
