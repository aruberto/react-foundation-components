import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';

import { SCREEN_SIZES, SCREEN_SIZE_SMALL, TOP_BAR_POSITIONS } from '../util/constants';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);
const IS_FLEX_MODE = false;

export class TopBarItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    position: PropTypes.oneOf(TOP_BAR_POSITIONS).isRequired,
  };

  render() {
    const { className, position } = this.props;
    const classNames =
      cx(className, cxStyles({ [`top-bar-${position}`]: TOP_BAR_POSITIONS.includes(position) }));

    return <div {...this.props} className={classNames} />;
  }
}

export class TopBarContent extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;
    const classNames = cx(className, cxStyles({ 'top-bar-content': IS_FLEX_MODE }));

    return <div {...this.props} className={classNames} />;
  }
}

export class TopBarTitle extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;
    const classNames = cx(className, cxStyles('top-bar-title'));

    return <div {...this.props} className={classNames} />;
  }
}

export class TopBar extends Component {
  static propTypes = {
    className: PropTypes.string,
    stack: PropTypes.oneOf(SCREEN_SIZES),
  };

  static defaultProps = {
    stack: SCREEN_SIZE_SMALL,
  };

  render() {
    const { className, stack } = this.props;
    const classNames =
      cx(
        className,
        cxStyles(
          'top-bar',
          {
            [`stacked-for-${stack}`]: SCREEN_SIZES.includes(stack),
          }
        )
      );

    return <div {...this.props} className={classNames} />;
  }
}

TopBar.Content = TopBarContent;
TopBar.Item = TopBarItem;
TopBar.Title = TopBarTitle;

export default TopBar;
