import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';

import { TITLE_BAR_POSITIONS } from '../util/constants';
import { MenuIcon } from '../menu-icon';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export class TitleBarItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    position: PropTypes.oneOf(TITLE_BAR_POSITIONS).isRequired,
  };

  render() {
    const { className, position } = this.props;
    const classNames =
      cx(
        className,
        cxStyles(
          {
            [`title-bar-${position}`]: includes(TITLE_BAR_POSITIONS, position),
          }
        )
      );

    return (
      <div {...this.props} className={classNames} />
    );
  }
}

export class TitleBarTitle extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;
    const classNames = cx(className, cxStyles('title-bar-title'));

    return (
      <span {...this.props} className={classNames} />
    );
  }
}

export class TitleBarMenuIcon extends Component {
  static propTypes = {
    className: PropTypes.string,
    dark: PropTypes.bool,
  };

  render() {
    const { className, dark } = this.props;
    const classNames = cx(className, cxStyles('menu-icon', { dark }));

    return (
      <MenuIcon {...this.props} className={classNames} />
    );
  }
}

export class TitleBar extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;
    const classNames = cx(className, cxStyles('title-bar'));

    return (
      <div {...this.props} className={classNames} />
    );
  }
}

TitleBar.Item = TitleBarItem;
TitleBar.Title = TitleBarTitle;
TitleBar.MenuIcon = TitleBarMenuIcon;

export default TitleBar;
