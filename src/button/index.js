import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import style from './style.scss';
import {classNamesMapper} from '../util';

const SIZES = ['tiny', 'small', 'large'];
const COLORS = ['secondary', 'success', 'alert', 'warning'];

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(COLORS),
    disabled: PropTypes.bool,
    dropdown: PropTypes.bool,
    expanded: PropTypes.bool,
    hollow: PropTypes.bool,
    href: React.PropTypes.string,
    size: PropTypes.oneOf(SIZES),
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
      color,
      disabled,
      dropdown,
      expanded,
      hollow,
      href,
      size,
      target
    } = this.props;
    const componentClassNames = classNamesMapper(style, {
      button: true,
      [color]: COLORS.includes(color),
      disabled,
      dropdown,
      expanded,
      hollow,
      [size]: SIZES.includes(size)
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
