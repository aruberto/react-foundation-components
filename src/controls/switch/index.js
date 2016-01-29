import React, {Component, PropTypes} from 'react';
import cx from 'classnames';

import style from './style.scss';
import {COMPONENT_SIZES} from '../../util/constants';
import joinObjects from '../../util/join-objects';

export default class CloseButton extends Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onToggle: PropTypes.func,
    size: PropTypes.oneOf(COMPONENT_SIZES),
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    value: PropTypes.bool
  };

  handleToggle = () => {
    const {onToggle} = this.props;

    if (onToggle) {
      onToggle();
    }
  };

  handleNothing() {}

  getClassNames = () => joinObjects(style, {switch: true});

  getClassNames = () => {
    const {size} = this.props;

    return joinObjects(style, {
      switch: true,
      [size]: COMPONENT_SIZES.includes(size)
    });
  };

  render() {
    const {className, id, style: stylesWtf, value} = this.props;

    return (
      <div className={cx(className, this.getClassNames())} style={stylesWtf}>
        <input
          checked={value}
          className={style['switch-input']}
          id={id}
          onChange={id ? this.handleToggle : this.handleNothing}
          type='checkbox'
        />
        <label
          className={style['switch-paddle']}
          htmlFor={id}
          onClick={id ? this.handleNothing : this.handleToggle}
        />
      </div>
    );
  }
}
