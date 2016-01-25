import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import style from './style';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    expanded: PropTypes.bool,
    fSize: PropTypes.oneOf(['tiny', 'small', 'large']),
    fStyle: PropTypes.oneOf(['secondary', 'success', 'alert', 'warning']),
    hollow: PropTypes.bool
  };

  render() {
    const {className, children, disabled, expanded, fSize, fStyle, hollow} = this.props;
    const classes = {
      [style.button || 'button']: true,
      [style.disabled || 'disabled']: disabled,
      [style.expanded || 'expanded']: expanded,
      [style.tiny || 'tiny']: fSize === 'tiny',
      [style.small || 'small']: fSize === 'small',
      [style.large || 'large']: fSize === 'large',
      [style.secondary || 'secondary']: fStyle === 'secondary',
      [style.success || 'success']: fStyle === 'success',
      [style.alert || 'alert']: fStyle === 'alert',
      [style.warning || 'warning']: fStyle === 'warning',
      [style.hollow || 'hollow']: hollow
    };

    return (
      <button className={classNames(className, classes)}>
        {children}
      </button>
    );
  }
}
