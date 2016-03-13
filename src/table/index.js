import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';

import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export class Table extends Component {
  static propTypes = {
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    containerStyle: PropTypes.object,
    hover: PropTypes.bool,
    scroll: PropTypes.bool,
    scrollContainerClassName: PropTypes.string,
    scrollContainerStyle: PropTypes.object,
    stack: PropTypes.bool,
  };

  render() {
    const {
      className,
      containerClassName,
      containerStyle,
      hover,
      scroll,
      scrollContainerClassName,
      scrollContainerStyle,
      stack,
    } = this.props;
    const containerClassNames = cx(containerClassName, cxStyles('table'));
    const classNames = cx(className, cxStyles({ hover, stack }));
    let table = <table {...this.props} className={classNames} />;

    if (scroll) {
      const scrollContainerClassNames = cx(scrollContainerClassName, cxStyles('table-scroll'));

      table = <div className={scrollContainerClassNames} style={scrollContainerStyle}>{table}</div>;
    }

    return <div className={containerClassNames} style={containerStyle}>{table}</div>;
  }
}

export default Table;
