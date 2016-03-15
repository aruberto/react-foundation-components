import React, { PropTypes, Children, cloneElement, isValidElement } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';

import {
  COMPONENT_SIZES,
  COMPONENT_COLORS,
  BUTTON_GROUP_STACK_SCREEN_SIZES,
} from '../util/constants';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const ButtonGroup = ({
  children,
  className,
  color,
  expanded,
  size,
  stack,
  ...restProps,
}) => {
  const classNames =
    cx(
      className,
      cxStyles(
        'button-group',
        {
          [color]: includes(COMPONENT_COLORS, color),
          expanded,
          [size]: includes(COMPONENT_SIZES, size),
          stacked: stack && !includes(BUTTON_GROUP_STACK_SCREEN_SIZES, stack),
          [`stacked-for-${stack}`]: includes(BUTTON_GROUP_STACK_SCREEN_SIZES, stack),
        }
      )
    );
  const clonedChildren =
    Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child, { className: cx(child.props.className, cxStyles('button')) });
      }

      return child;
    });

  return <div {...restProps} className={classNames}>{clonedChildren}</div>;
};

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(COMPONENT_COLORS),
  expanded: PropTypes.bool,
  size: PropTypes.oneOf(COMPONENT_SIZES),
  stack: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(BUTTON_GROUP_STACK_SCREEN_SIZES)]),
};

export default ButtonGroup;
