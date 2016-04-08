import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';

import { COMPONENT_SIZES, COMPONENT_COLORS } from '../util/constants';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const Button = ({
  className,
  color,
  disabled,
  dropdown,
  dropdownArrowOnly,
  expanded,
  hollow,
  href,
  size,
  target,
  ...restProps,
}) => {
  const classNames =
    cx(
      className,
      cxStyles(
        'button',
        {
          [color]: includes(COMPONENT_COLORS, color),
          disabled,
          dropdown,
          'arrow-only': dropdown && dropdownArrowOnly,
          expanded,
          hollow,
          [size]: includes(COMPONENT_SIZES, size),
        }
      )
    );

  if (href || target) {
    return (
      <a
        {...restProps}
        aria-disabled={disabled}
        className={classNames}
        href={href || '#'}
        target={target}
        role="button"
      />
    );
  }

  return <button {...restProps} className={classNames} disabled={disabled} />;
};

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(COMPONENT_COLORS),
  disabled: PropTypes.bool,
  dropdown: PropTypes.bool,
  dropdownArrowOnly: PropTypes.bool,
  expanded: PropTypes.bool,
  hollow: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(COMPONENT_SIZES),
  target: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};
Button.defaultProps = {
  type: 'button',
};

export default Button;
