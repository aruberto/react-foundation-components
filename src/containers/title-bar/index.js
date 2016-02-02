import React, {Component, PropTypes} from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import joinObjects from '../../util/join-objects';

const OFF_CANVAS_POSITIONS = ['left', 'right'];

export class TitleBarItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    position: PropTypes.oneOf(OFF_CANVAS_POSITIONS).isRequired
  };

  getClassNames = () => {
    const {position} = this.props;

    return joinObjects(styles, {
      [`title-bar-${position}`]: OFF_CANVAS_POSITIONS.includes(position)
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

export class TitleBar extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  getClassNames = () => joinObjects(styles, {'title-bar': true});

  render() {
    const {children, className} = this.props;

    return (
      <div {...this.props} className={cx(className, this.getClassNames())}>
        {children}
      </div>
    );
  }
}