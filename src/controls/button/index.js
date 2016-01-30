import React, {Component, PropTypes} from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import {COMPONENT_SIZES, COMPONENT_COLORS} from '../../util/constants';
import joinObjects from '../../util/join-objects';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(COMPONENT_COLORS),
    disabled: PropTypes.bool,
    dropdown: PropTypes.bool,
    dropdownArrowOnly: PropTypes.bool,
    expanded: PropTypes.bool,
    hollow: PropTypes.bool,
    href: React.PropTypes.string,
    size: PropTypes.oneOf(COMPONENT_SIZES),
    target: React.PropTypes.string,
    type: React.PropTypes.oneOf(['button', 'reset', 'submit'])
  };

  static defaultProps = {
    type: 'button'
  };

  getClassNames = () => {
    const {color, disabled, dropdown, dropdownArrowOnly, expanded, hollow, size} = this.props;

    return joinObjects(styles, {
      button: true,
      [color]: COMPONENT_COLORS.includes(color),
      disabled,
      dropdown,
      'arrow-only': dropdown && dropdownArrowOnly,
      expanded,
      hollow,
      [size]: COMPONENT_SIZES.includes(size)
    });
  };

  render() {
    const {children, className, href, target} = this.props;

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
