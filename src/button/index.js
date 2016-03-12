import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';

import { COMPONENT_SIZES, COMPONENT_COLORS } from '../util/constants';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export class Button extends Component {
  static propTypes = {
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

  static defaultProps = {
    type: 'button',
  };

  render() {
    const {
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
    } = this.props;
    const classNames =
      cx(
        className,
        cxStyles(
          'button',
          {
            [color]: COMPONENT_COLORS.includes(color),
            disabled,
            dropdown,
            'arrow-only': dropdown && dropdownArrowOnly,
            expanded,
            hollow,
            [size]: COMPONENT_SIZES.includes(size),
          }
        )
      );

    if (href || target) {
      return (
        <a
          {...this.props}
          aria-disabled={disabled}
          className={classNames}
          href={href || '#'}
          role="button"
        />
      );
    }

    return (
      <button {...this.props} className={classNames} />
    );
  }
}

export default Button;
