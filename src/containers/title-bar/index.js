import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import styles from './styles';
import { TITLE_BAR_POSITIONS } from '../../util/constants';

export class TitleBarItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    position: PropTypes.oneOf(TITLE_BAR_POSITIONS).isRequired,
  };

  render() {
    const { children, className, position } = this.props;
    const classNames = cx(
      className,
      {
        [styles[`title-bar-${position}`]]: TITLE_BAR_POSITIONS.includes(position),
      }
    );

    return (
      <div {...this.props} className={classNames}>
        {children}
      </div>
    );
  }
}

export class TitleBarTitle extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { children, className } = this.props;
    const classNames = cx(className, styles['title-bar-title']);

    return (
      <span {...this.props} className={classNames}>
        {children}
      </span>
    );
  }
}

export class MenuIcon extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dark: PropTypes.bool,
    offCanvasId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    open: PropTypes.bool,
  };

  render() {
    const { children, className, dark, offCanvasId, open } = this.props;
    const classNames = cx(
      className,
      styles['menu-icon'],
      {
        [styles.dark]: dark,
      }
    );

    return (
      <button
        {...this.props}
        aria-controls={offCanvasId}
        aria-expanded={open}
        className={classNames}
        type="button"
      >
        {children}
      </button>
    );
  }
}

export class TitleBar extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { children, className } = this.props;
    const classNames = cx(className, styles['title-bar']);

    return (
      <div {...this.props} className={classNames}>
        {children}
      </div>
    );
  }
}
