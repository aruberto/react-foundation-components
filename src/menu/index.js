import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';

import {
  SCREEN_SIZES,
  LARGER_SCREEN_SIZES,
  CENTER_POSITION,
  MENU_ALIGNMENTS,
  FLEX_HORIZONTAL_ALIGNMENTS,
} from '../util/constants';
import { FlexParent, FlexChild } from '../flex-mock';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);
const IS_FLEX_MODE = false;

export class Menu extends Component {
  static propTypes = {
    centerContainerClassName: PropTypes.string,
    centerContainerStyle: PropTypes.object,
    className: PropTypes.string,
    expanded: PropTypes.bool,
    horizontal: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(SCREEN_SIZES)]),
    horizontalAlignment:
      PropTypes.oneOf(IS_FLEX_MODE ? FLEX_HORIZONTAL_ALIGNMENTS : MENU_ALIGNMENTS),
    iconTop: PropTypes.bool,
    nested: PropTypes.bool,
    simple: PropTypes.bool,
    vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(SCREEN_SIZES)]),
  };

  render() {
    const {
      centerContainerClassName,
      centerContainerStyle,
      className,
      expanded,
      horizontal,
      horizontalAlignment,
      iconTop,
      nested,
      simple,
      vertical,
    } = this.props;
    const classNames =
      cx(
        className,
        cxStyles(
          'menu',
          {
            [`align-${horizontalAlignment}`]:
              !IS_FLEX_MODE
              && horizontalAlignment !== CENTER_POSITION
              && includes(MENU_ALIGNMENTS, horizontalAlignment),
            expanded,
            [`${horizontal}-horizontal`]: includes(LARGER_SCREEN_SIZES, horizontal),
            'icon-top': iconTop,
            nested,
            simple,
            vertical: vertical && !includes(LARGER_SCREEN_SIZES, vertical),
            [`${vertical}-vertical`]: includes(LARGER_SCREEN_SIZES, vertical),
          }
        )
      );

    const content = (
      <FlexParent
        {...this.props}
        className={classNames}
        componentClass="ul"
      />
    );

    if (!IS_FLEX_MODE && horizontalAlignment === CENTER_POSITION) {
      const centerContainerClassNames = cx(centerContainerClassName, cxStyles('menu-centered'));

      return (
        <div className={centerContainerClassNames} style={centerContainerStyle}>
          {content}
        </div>
      );
    }

    return content;
  }
}

export class MenuItem extends Component {
  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    text: PropTypes.bool,
  };

  render() {
    const { active, className, text } = this.props;

    const classNames =
      cx(
        className,
        cxStyles(
          {
            active,
            'menu-text': text,
          }
        )
      );

    return <FlexChild {...this.props} className={classNames} componentClass="li" />;
  }
}

Menu.Item = MenuItem;

export default Menu;
