import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';

import { SCREEN_SIZES, SCREEN_SIZE_SMALL, TOP_BAR_POSITIONS } from '../util/constants';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);
const IS_FLEX_MODE = false;

export const TopBarItem = ({
  className,
  position,
  ...restProps,
}) => {
  const classNames =
    cx(className, cxStyles({ [`top-bar-${position}`]: includes(TOP_BAR_POSITIONS, position) }));

  return <div {...restProps} className={classNames} />;
};

TopBarItem.propTypes = {
  className: PropTypes.string,
  position: PropTypes.oneOf(TOP_BAR_POSITIONS).isRequired,
};

export const TopBarContent = ({
  className,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles({ 'top-bar-content': IS_FLEX_MODE }));

  return <div {...restProps} className={classNames} />;
};

TopBarContent.propTypes = {
  className: PropTypes.string,
};

export const TopBarTitle = ({
  className,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('top-bar-title'));

  return <div {...restProps} className={classNames} />;
};

TopBarTitle.propTypes = {
  className: PropTypes.string,
};

export const TopBar = ({
  className,
  stack,
  ...restProps,
}) => {
  const classNames =
    cx(
      className,
      cxStyles(
        'top-bar',
        {
          [`stacked-for-${stack}`]: includes(SCREEN_SIZES, stack),
        }
      )
    );

  return <div {...restProps} className={classNames} />;
};

TopBar.propTypes = {
  className: PropTypes.string,
  stack: PropTypes.oneOf(SCREEN_SIZES),
};
TopBar.defaultProps = {
  stack: SCREEN_SIZE_SMALL,
};

TopBar.Content = TopBarContent;
TopBar.Item = TopBarItem;
TopBar.Title = TopBarTitle;

export default TopBar;
