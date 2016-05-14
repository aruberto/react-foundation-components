import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';

import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const MenuIcon = ({
  className,
  dark,
  controls,
  open,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('menu-icon', { dark }));

  return (
    <button
      {...restProps}
      aria-controls={controls}
      aria-expanded={open}
      className={classNames}
      type="button"
    />
  );
};

MenuIcon.propTypes = {
  className: PropTypes.string,
  dark: PropTypes.bool,
  controls: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  open: PropTypes.bool,
};

export default MenuIcon;
