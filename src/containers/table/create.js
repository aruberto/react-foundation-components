import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

export default function create(styles) {
  class Table extends Component {
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
      const containerClassNames = cx(containerClassName, styles.table);
      const scrollContainerClassNames = cx(
        scrollContainerClassName,
        {
          [styles['table-scroll']]: scroll,
        }
      );
      const classNames = cx(
        className,
        {
          [styles.hover]: hover,
          [styles.stack]: stack,
        }
      );

      return (
        <div className={containerClassNames} style={containerStyle}>
          <div className={scrollContainerClassNames} style={scrollContainerStyle}>
            <table {...this.props} className={classNames}/>
          </div>
        </div>
      );
    }
  }

  return { Table };
}
