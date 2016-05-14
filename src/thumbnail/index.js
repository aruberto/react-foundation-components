import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';

import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const Thumbnail = ({
  alt,
  className,
  role = alt ? null : 'presentation',
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('thumbnail'));

  return <img {...restProps} alt={alt} className={classNames} role={role} />;
};

Thumbnail.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string,
};

export default Thumbnail;
