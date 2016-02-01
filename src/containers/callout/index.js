import React, {Component, PropTypes} from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import {COMPONENT_SIZES, COMPONENT_COLORS} from '../../util/constants';
import joinObjects from '../../util/join-objects';

const CALLOUT_SIZES = COMPONENT_SIZES.filter((size) => size !== 'tiny');

export default class Callout extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(COMPONENT_COLORS),
    size: PropTypes.oneOf(CALLOUT_SIZES)
  };

  getClassNames = () => {
    const {color, size} = this.props;

    return joinObjects(styles, {
      callout: true,
      [color]: COMPONENT_COLORS.includes(color),
      [size]: COMPONENT_SIZES.includes(size)
    });
  };

  render() {
    const {children, className} = this.props;

    return (
      <div {...this.props} className={cx(className, this.getClassNames())}>
        {children}
      </div>
    );
  }
}
