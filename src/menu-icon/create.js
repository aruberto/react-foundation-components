import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

export default function create(styles) {
  class MenuIcon extends Component {
    static propTypes = {
      className: PropTypes.string,
      dark: PropTypes.bool,
      controls: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      open: PropTypes.bool,
    };

    render() {
      const { className, dark, controls, open } = this.props;
      const classNames = cx(
        className,
        styles['menu-icon'],
        {
          [styles.dark]: dark,
        }
      );

      return (
        <button
          {...this.props}
          aria-controls={controls}
          aria-expanded={open}
          className={classNames}
          type="button"
        />
      );
    }
  }

  return { MenuIcon };
}
