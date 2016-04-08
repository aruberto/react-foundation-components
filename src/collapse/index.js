import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import Transition from 'react-overlays/lib/Transition';
import css from 'dom-helpers/style';
import capitalize from 'underscore.string/capitalize';

import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);
const MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight'],
};

export const Collapse = ({
  className,
  dimension,
  onEnter,
  onEntered,
  onEntering,
  onExit,
  onExiting,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles(dimension));
  const onTransitionEnter = (...args) => {
    const [elem] = args;

    elem.style[dimension] = '0';

    if (onEnter) {
      onEnter(...args);
    }
  };
  const onTransitionEntered = (...args) => {
    const [elem] = args;

    elem.style[dimension] = null;

    if (onEntered) {
      onEntered(...args);
    }
  };
  const onTransitionEntering = (...args) => {
    const [elem] = args;
    const size = elem[`scroll${capitalize(dimension)}`];

    elem.style[dimension] = `${size}px`;

    if (onEntering) {
      onEntering(...args);
    }
  };
  const onTransitionExit = (...args) => {
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
  const onTransitionExiting = (...args) => {
    function triggerBrowserReflow(node) {
      return node.offsetHeight;
    }

    const [elem] = args;

    triggerBrowserReflow(elem);
    elem.style[dimension] = '0';

    if (onExiting) {
      onExiting(...args);
    }
  };

  return (
    <Transition
      {...restProps}
      className={classNames}
      enteredClassName={cxStyles('collapsible', 'in')}
      enteringClassName={cxStyles('collapsing')}
      exitedClassName={cxStyles('collapsible')}
      exitingClassName={cxStyles('collapsing')}
      onEnter={onTransitionEnter}
      onEntered={onTransitionEntered}
      onEntering={onTransitionEntering}
      onExit={onTransitionExit}
      onExiting={onTransitionExiting}
    />
  );
};

Collapse.propTypes = {
  className: PropTypes.string,
  dimension: PropTypes.oneOf(['height', 'width']),
  timeout: PropTypes.number,
  onEnter: PropTypes.func,
  onEntered: PropTypes.func,
  onEntering: PropTypes.func,
  onExit: PropTypes.func,
  onExiting: PropTypes.func,
};
Collapse.defaultProps = {
  dimension: 'height',
  timeout: 350,
};

export default Collapse;
