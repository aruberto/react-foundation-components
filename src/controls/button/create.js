import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import { COMPONENT_SIZES, COMPONENT_COLORS } from '../../util/constants';

export default function create(styles) {
  class Button extends Component {
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
      const classNames = cx(
        className,
        styles.button,
        {
          [styles[color]]: COMPONENT_COLORS.includes(color),
          [styles.disabled]: disabled,
          [styles.dropdown]: dropdown,
          [styles['arrow-only']]: dropdown && dropdownArrowOnly,
          [styles.expanded]: expanded,
          [styles.hollow]: hollow,
          [styles[size]]: COMPONENT_SIZES.includes(size),
        }
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
        <button {...this.props} className={classNames}/>
      );
    }
  }

  return { Button };
}
