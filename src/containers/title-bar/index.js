import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import styles from './styles';
import { TITLE_BAR_POSITIONS } from '../../util/constants';
import MenuIcon from '../menu-icon';

export class TitleBarItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    position: PropTypes.oneOf(TITLE_BAR_POSITIONS).isRequired,
  };

  render() {
    const { className, position } = this.props;
    const classNames = cx(
      className,
      {
        [styles[`title-bar-${position}`]]: TITLE_BAR_POSITIONS.includes(position),
      }
    );

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}

export class TitleBarTitle extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;
    const classNames = cx(className, styles['title-bar-title']);

    return (
      <span {...this.props} className={classNames}/>
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
    const classNames = cx(
      className,
      styles['menu-icon'],
      {
        [styles.dark]: dark,
      }
    );

    return (
      <MenuIcon {...this.props} className={classNames}/>
    );
  }
}

export class TitleBar extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;
    const classNames = cx(className, styles['title-bar']);

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}
