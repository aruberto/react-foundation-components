import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import { LARGER_SCREEN_SIZES } from '../../util/constants';
import DefaultComponent from '../../util/default-component';

export default function create(
  styles,
  FlexParent = DefaultComponent,
  FlexChild = DefaultComponent
) {
  class Menu extends Component {
    static propTypes = {
      className: PropTypes.string,
      expanded: PropTypes.bool,
      horizontal: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(LARGER_SCREEN_SIZES)]),
      iconTop: PropTypes.bool,
      nested: PropTypes.bool,
      simple: PropTypes.bool,
      vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(LARGER_SCREEN_SIZES)]),
    };

    render() {
      const { className, expanded, horizontal, iconTop, nested, simple, vertical } = this.props;
      const classNames = cx(
        className,
        styles.menu,
        {
          [styles.expanded]: expanded,
          [styles.horizontal]: horizontal && !LARGER_SCREEN_SIZES.includes(horizontal),
          [styles[`${horizontal}-horizontal`]]: LARGER_SCREEN_SIZES.includes(horizontal),
          [styles['icon-top']]: iconTop,
          [styles.nested]: nested,
          [styles.simple]: simple,
          [styles.vertical]: vertical && !LARGER_SCREEN_SIZES.includes(vertical),
          [styles[`${vertical}-vertical`]]: LARGER_SCREEN_SIZES.includes(vertical),
        }
      );

      return <FlexParent {...this.props} className={classNames} componentClass="ul"/>;
    }
  }

  class MenuItem extends Component {
    static propTypes = {
      active: PropTypes.bool,
      className: PropTypes.string,
      text: PropTypes.bool,
    };

    render() {
      const { active, className, text } = this.props;

      const classNames = cx(
        className,
        {
          [styles.active]: active,
          [styles['menu-text']]: text,
        }
      );

      return <FlexChild {...this.props} className={classNames} componentClass="li"/>;
    }
  }

  return { Menu, MenuItem };
}
