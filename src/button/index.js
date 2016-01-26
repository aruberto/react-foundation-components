import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import style from './style.scss';
import {classNamesMapper} from '../util';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    dropdown: PropTypes.bool,
    expanded: PropTypes.bool,
    fSize: PropTypes.oneOf(['tiny', 'small', 'large']),
    fType: PropTypes.oneOf(['secondary', 'success', 'alert', 'warning']),
    hollow: PropTypes.bool,
    href: React.PropTypes.string,
    target: React.PropTypes.string,
    type: React.PropTypes.oneOf(['button', 'reset', 'submit'])
  };

  static defaultProps = {
    type: 'button'
  };

  render() {
    const {
      className,
      children,
      disabled,
      dropdown,
      expanded,
      fSize,
      fType,
      hollow,
      href,
      target
    } = this.props;
    const componentClassNames = classNamesMapper(style, {
      button: true,
      disabled,
      dropdown,
      expanded,
      tiny: fSize === 'tiny',
      small: fSize === 'small',
      large: fSize === 'large',
      secondary: fType === 'secondary',
      success: fType === 'success',
      alert: fType === 'alert',
      warning: fType === 'warning',
      hollow
    });

    if (href || target) {
      return (
        <a
          {...this.props}
          className={classNames(className, componentClassNames)}
          href={href || '#'}
          role='button'
        >
          {children}
        </a>
      );
    }

    return (
      <button {...this.props} className={classNames(className, componentClassNames)}>
        {children}
      </button>
    );
  }
}
