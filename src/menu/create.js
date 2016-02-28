import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import {
  LARGER_SCREEN_SIZES,
  CENTER_POSITION,
  MENU_ALIGNMENTS,
  FLEX_HORIZONTAL_ALIGNMENTS,
} from '../util/constants';
import DefaultComponent from '../util/default-component';
import createHigherOrderComponent from '../util/create-higher-order-component';

export default function create(
  styles,
  FlexParent = DefaultComponent,
  FlexChild = DefaultComponent
) {
  class Menu extends Component {
    static propTypes = {
      alignment: PropTypes.oneOf(MENU_ALIGNMENTS),
      centerContainerClassName: PropTypes.string,
      centerContainerStyle: PropTypes.object,
      className: PropTypes.string,
      expanded: PropTypes.bool,
      horizontal: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(LARGER_SCREEN_SIZES)]),
      horizontalAlignment: PropTypes.oneOf(FLEX_HORIZONTAL_ALIGNMENTS),
      iconTop: PropTypes.bool,
      nested: PropTypes.bool,
      simple: PropTypes.bool,
      vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(LARGER_SCREEN_SIZES)]),
    };

    render() {
      const {
        alignment,
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
      const classNames = cx(
        className,
        styles.menu,
        {
          [styles[`align-${alignment}`]]:
            styles[`align-${alignment}`]
            && alignment !== CENTER_POSITION
            && MENU_ALIGNMENTS.includes(alignment),
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

      const content = (
        <FlexParent
          {...this.props}
          className={classNames}
          componentClass="ul"
          horizontalAlignment={horizontalAlignment || alignment}
        />
      );

      if (alignment === CENTER_POSITION && styles['menu-centered']) {
        const centerContainerClassNames = cx(centerContainerClassName, styles['menu-centered']);

        return (
          <div className={centerContainerClassNames} style={centerContainerStyle}>
            {content}
          </div>
        );
      }

      return content;
    }
  }

  const MenuText = createHigherOrderComponent({
    displayName: 'MenuText',
    mapPropsToClassNames: () => ({
      [styles['menu-text']]: true,
    }),
  });

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
        }
      );

      const content = <FlexChild {...this.props} className={classNames} componentClass="li"/>;

      if (text) {
        return <MenuText>{content}</MenuText>;
      }

      return content;
    }
  }

  return { Menu, MenuItem, MenuText };
}
