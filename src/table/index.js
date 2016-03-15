import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';

import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const Table = ({
  className,
  containerClassName,
  containerStyle,
  hover,
  scroll,
  scrollContainerClassName,
  scrollContainerStyle,
  stack,
  ...restProps,
}) => {
  const containerClassNames = cx(containerClassName, cxStyles('table'));
  const classNames = cx(className, cxStyles({ hover, stack }));
  let table = <table {...restProps} className={classNames} />;

  if (scroll) {
    const scrollContainerClassNames = cx(scrollContainerClassName, cxStyles('table-scroll'));

    table = <div className={scrollContainerClassNames} style={scrollContainerStyle}>{table}</div>;
  }

  return <div className={containerClassNames} style={containerStyle}>{table}</div>;
};

Table.propTypes = {
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  hover: PropTypes.bool,
  scroll: PropTypes.bool,
  scrollContainerClassName: PropTypes.string,
  scrollContainerStyle: PropTypes.object,
  stack: PropTypes.bool,
};

export default Table;
