import React, {Component, PropTypes} from 'react';
import cx from 'classnames';

import style from './style.scss';
import joinObjects from '../util/join-objects';

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

  getClassNames = () => {
    const {color, disabled, dropdown, expanded, hollow, size} = this.props;

    return joinObjects(style, {
      button: true,
      [color]: COLORS.includes(color),
      disabled,
      dropdown,
      expanded,
      hollow,
      [size]: SIZES.includes(size)
    });
  };

  render() {
    const {className, children, href, target} = this.props;

    if (href || target) {
      return (
        <a
          {...this.props}
          className={cx(className, this.getClassNames())}
          href={href || '#'}
          role='button'
        >
          {children}
        </a>
      );
    }

    return (
      <button {...this.props} className={cx(className, this.getClassNames())}>
        {children}
      </button>
    );
  }
}
