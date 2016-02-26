import React, { PropTypes } from 'react';
import cx from 'classnames';
import Transition from 'react-overlays/lib/Transition';
import css from 'dom-helpers/style';
import capitalize from 'underscore.string/capitalize';

const MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight'],
};

export default function create(styles) {
  class Collapse extends React.Component {
    static propTypes = {
      className: PropTypes.string,
      dimension: PropTypes.oneOf(['height', 'width']),
      onEnter: PropTypes.func,
      onEntered: PropTypes.func,
      onEntering: PropTypes.func,
      onExit: PropTypes.func,
      onExiting: PropTypes.func,
      timeout: PropTypes.number,
    };

    static defaultProps = {
      dimension: 'height',
      timeout: 350,
    };

    handleEnter = (...args) => {
      const { dimension, onEnter } = this.props;
      const [elem] = args;

      elem.style[dimension] = '0';

      if (onEnter) {
        onEnter(...args);
      }
    };

    handleEntered = (...args) => {
      const { dimension, onEntered } = this.props;
      const [elem] = args;

      elem.style[dimension] = null;

      if (onEntered) {
        onEntered(...args);
      }
    };

    handleEntering = (...args) => {
      const { dimension, onEntering } = this.props;
      const [elem] = args;
      const size = elem[`scroll${capitalize(dimension)}`];

      elem.style[dimension] = `${size}px`;

      if (onEntering) {
        onEntering(...args);
      }
    };

    handleExit = (...args) => {
      const { dimension, onExit } = this.props;
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

      const { dimension, onExiting } = this.props;
      const [elem] = args;

      triggerBrowserReflow(elem);
      elem.style[dimension] = '0';

      if (onExiting) {
        onExiting(...args);
      }
    };

    render() {
      const { className, dimension, timeout } = this.props;
      const classNames = cx(
        className,
        {
          [styles[dimension]]: true,
        }
      );

      return (
        <Transition
          {...this.props}
          className={classNames}
          enteredClassName={cx(styles.collapse, styles.in)}
          enteringClassName={styles.collapsing}
          exitedClassName={styles.collapse}
          exitingClassName={styles.collapsing}
          onEnter={this.handleEnter}
          onEntered={this.handleEntered}
          onEntering={this.handleEntering}
          onExit={this.handleExit}
          onExiting={this.handleExiting}
          timeout={timeout}
        />
      );
    }
  }

  return { Collapse };
}
