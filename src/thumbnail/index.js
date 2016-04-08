import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';

import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const Thumbnail = ({
  className,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('thumbnail'));

  return <img {...restProps} className={classNames} />;
};

Thumbnail.propTypes = {
  className: PropTypes.string,
};

export default Thumbnail;
