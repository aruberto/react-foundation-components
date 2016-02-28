import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import { SCREEN_SIZES, SCREEN_SIZE_SMALL, TOP_BAR_POSITIONS } from '../util/constants';

export default function create(styles) {
  class TopBarItem extends Component {
    static propTypes = {
      className: PropTypes.string,
      position: PropTypes.oneOf(TOP_BAR_POSITIONS).isRequired,
    };

    render() {
      const { className, position } = this.props;
      const classNames = cx(
        className,
        {
          [styles[`top-bar-${position}`]]: TOP_BAR_POSITIONS.includes(position),
        }
      );

      return <div {...this.props} className={classNames}/>;
    }
  }

  class TopBarContent extends Component {
    static propTypes = {
      className: PropTypes.string,
    };

    render() {
      const { className } = this.props;
      const classNames = cx(className, styles['top-bar-content']);

      return <div {...this.props} className={classNames}/>;
    }
  }

  class TopBarTitle extends Component {
    static propTypes = {
      className: PropTypes.string,
    };

    render() {
      const { className } = this.props;
      const classNames = cx(className, styles['top-bar-title']);

      return <div {...this.props} className={classNames}/>;
    }
  }

  class TopBar extends Component {
    static propTypes = {
      className: PropTypes.string,
      stack: PropTypes.oneOf(SCREEN_SIZES),
    };

    static defaultProps = {
      stack: SCREEN_SIZE_SMALL,
    };

    render() {
      const { className, stack } = this.props;
      const classNames = cx(
        className,
        styles['top-bar'],
        {
          [styles[`stacked-for-${stack}`]]: SCREEN_SIZES.includes(stack),
        }
      );

      return <div {...this.props} className={classNames}/>;
    }
  }

  return { TopBar, TopBarContent, TopBarItem, TopBarTitle };
}
