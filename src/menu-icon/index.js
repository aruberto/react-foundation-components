import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';

import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export class MenuIcon extends Component {
  static propTypes = {
    className: PropTypes.string,
    dark: PropTypes.bool,
    controls: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    open: PropTypes.bool,
  };

  render() {
    const { className, dark, controls, open } = this.props;
    const classNames =
      cx(className, cxStyles('menu-icon', { dark }));

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

export default MenuIcon;
