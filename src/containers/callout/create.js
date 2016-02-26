import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import { CALLOUT_SIZES, COMPONENT_COLORS } from '../../util/constants';

export default function create(styles) {
  class Callout extends Component {
    static propTypes = {
      className: PropTypes.string,
      color: PropTypes.oneOf(COMPONENT_COLORS),
      size: PropTypes.oneOf(CALLOUT_SIZES),
    };

    render() {
      const { className, color, size } = this.props;
      const classNames = cx(
        className,
        styles.callout,
        {
          [styles[color]]: COMPONENT_COLORS.includes(color),
          [styles[size]]: CALLOUT_SIZES.includes(size),
        }
      );

      return (
        <div {...this.props} className={classNames}/>
      );
    }
  }

  return { Callout };
}
