import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';

import { CALLOUT_SIZES, COMPONENT_COLORS } from '../util/constants';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export class Callout extends Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(COMPONENT_COLORS),
    size: PropTypes.oneOf(CALLOUT_SIZES),
  };

  render() {
    const { className, color, size } = this.props;
    const classNames =
      cx(
        className,
        cxStyles(
          'callout',
          {
            [color]: includes(COMPONENT_COLORS, color),
            [size]: includes(CALLOUT_SIZES, size),
          }
        )
      );

    return (
      <div {...this.props} className={classNames} />
    );
  }
}

export default Callout;
