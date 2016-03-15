import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import { mapPropsOnChange } from 'recompose';
import Transition from 'react-overlays/lib/Transition';
import css from 'dom-helpers/style';
import capitalize from 'underscore.string/capitalize';

import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);
const MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight'],
};

export const Collapse =
  mapPropsOnChange(
    ['onEnter', 'onEntered', 'onEntering', 'onExit', 'onExiting', 'dimension'],
    ({ onEnter, onEntered, onEntering, onExit, onExiting, dimension, ...restProps }) => ({
      ...restProps,
      dimension,
      onEnter(...args) {
        const [elem] = args;

        elem.style[dimension] = '0';

        if (onEnter) {
          onEnter(...args);
        }
      },
      onEntered(...args) {
        const [elem] = args;

        elem.style[dimension] = null;

        if (onEntered) {
          onEntered(...args);
        }
      },
      onEntering(...args) {
        const [elem] = args;
        const size = elem[`scroll${capitalize(dimension)}`];

        elem.style[dimension] = `${size}px`;

        if (onEntering) {
          onEntering(...args);
        }
      },
      onExit(...args) {
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
      },
      onExiting(...args) {
        function triggerBrowserReflow(node) {
          return node.offsetHeight;
        }

        const [elem] = args;

        triggerBrowserReflow(elem);
        elem.style[dimension] = '0';

        if (onExiting) {
          onExiting(...args);
        }
      },
    }),
    ({
      className,
      dimension,
      ...restProps,
    }) => {
      const classNames = cx(className, cxStyles(dimension));

      return (
        <Transition
          {...restProps}
          className={classNames}
          enteredClassName={cxStyles('collapsible', 'in')}
          enteringClassName={cxStyles('collapsing')}
          exitedClassName={cxStyles('collapsible')}
          exitingClassName={cxStyles('collapsing')}
        />
      );
    },
  );

Collapse.displayName = 'Collapse';
Collapse.propTypes = {
  className: PropTypes.string,
  dimension: PropTypes.oneOf(['height', 'width']),
  timeout: PropTypes.number,
};
Collapse.defaultProps = {
  dimension: 'height',
  timeout: 350,
};

export default Collapse;
