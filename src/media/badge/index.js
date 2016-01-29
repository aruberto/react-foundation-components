import React, {Component, PropTypes} from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import {COMPONENT_COLORS} from '../../util/constants';
import joinObjects from '../../util/join-objects';

export default class Badge extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(COMPONENT_COLORS)
  };

  getClassNames = () => {
    const {color} = this.props;

    return joinObjects(styles, {
      badge: true,
      [color]: COMPONENT_COLORS.includes(color)
    });
  };

  render() {
    const {className, children} = this.props;

    return (
      <span {...this.props} className={cx(className, this.getClassNames())}>
        {children}
      </span>
    );
  }
}
