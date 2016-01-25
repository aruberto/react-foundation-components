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
      [style.button]: true,
      [style.disabled]: disabled,
      [style.expanded]: expanded,
      [style.tiny]: fSize === 'tiny',
      [style.small]: fSize === 'small',
      [style.large]: fSize === 'large',
      [style.secondary]: fStyle === 'secondary',
      [style.success]: fStyle === 'success',
      [style.alert]: fStyle === 'alert',
      [style.warning]: fStyle === 'warning',
      [style.hollow]: hollow
    };

    return (
      <button className={classNames(className, classes)}>
        {children}
      </button>
    );
  }
}
