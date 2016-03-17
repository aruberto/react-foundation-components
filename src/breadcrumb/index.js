import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';

import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const Breadcrumb = ({
  className,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('breadcrumbs'));

  return <ul {...restProps} className={classNames} />;
};

Breadcrumb.propTypes = {
  className: PropTypes.string,
};

export const BreadcrumbItem = ({
  className,
  disabled,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles({ disabled }));

  return <li {...restProps} className={classNames} />;
};

BreadcrumbItem.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
