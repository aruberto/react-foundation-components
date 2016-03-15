import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';

import { TITLE_BAR_POSITIONS } from '../util/constants';
import { MenuIcon } from '../menu-icon';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const TitleBarItem = ({
  className,
  position,
  ...restProps,
}) => {
  const classNames =
    cx(
      className,
      cxStyles(
        {
          [`title-bar-${position}`]: includes(TITLE_BAR_POSITIONS, position),
        }
      )
    );

  return <div {...restProps} className={classNames} />;
};

TitleBarItem.propTypes = {
  className: PropTypes.string,
  position: PropTypes.oneOf(TITLE_BAR_POSITIONS).isRequired,
};

export const TitleBarTitle = ({
  className,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('title-bar-title'));

  return <span {...restProps} className={classNames} />;
};

TitleBarTitle.propTypes = {
  className: PropTypes.string,
};

export const TitleBarMenuIcon = ({
  className,
  dark,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('menu-icon', { dark }));

  return <MenuIcon {...restProps} className={classNames} />;
};

TitleBarMenuIcon.propTypes = {
  className: PropTypes.string,
  dark: PropTypes.bool,
};

export const TitleBar = ({
  className,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('title-bar'));

  return <div {...restProps} className={classNames} />;
};

TitleBar.propTypes = {
  className: PropTypes.string,
};

TitleBar.Item = TitleBarItem;
TitleBar.Title = TitleBarTitle;
TitleBar.MenuIcon = TitleBarMenuIcon;

export default TitleBar;
