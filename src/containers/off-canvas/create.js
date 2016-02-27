import React, { Component, PropTypes, Children, cloneElement, isValidElement } from 'react';
import cx from 'classnames';

import { LARGER_SCREEN_SIZES, OFF_CANVAS_POSITIONS } from '../../util/constants';

export default function create(styles) {
  class OffCanvas extends Component {
    static propTypes = {
      className: PropTypes.string,
      position: PropTypes.oneOf(OFF_CANVAS_POSITIONS),
      revealForSize: PropTypes.oneOf(LARGER_SCREEN_SIZES),
    };

    render() {
      const { className, position, revealForSize } = this.props;
      const classNames = cx(
        className,
        styles['off-canvas'],
        {
          [styles[`position-${position}`]]: OFF_CANVAS_POSITIONS.includes(position),
          [styles[`reveal-for-${revealForSize}`]]: LARGER_SCREEN_SIZES.includes(revealForSize),
        }
      );

      return <div {...this.props} className={classNames}/>;
    }
  }

  class OffCanvasContent extends Component {
    static propTypes = {
      blocked: PropTypes.bool,
      children: PropTypes.node,
      className: PropTypes.string,
      contentBlockerClassName: PropTypes.string,
      contentBlockerStyle: PropTypes.object,
      onContentBlockerClick: PropTypes.func,
    };

    handleContentBlockerClick = () => {
      const { onContentBlockerClick } = this.props;

      if (onContentBlockerClick) {
        onContentBlockerClick();
      }
    };

    render() {
      const {
        blocked,
        children,
        className,
        contentBlockerClassName,
        contentBlockerStyle,
      } = this.props;
      const classNames = cx(className, styles['off-canvas-content']);
      const contentBlockerClassNames = cx(
        contentBlockerClassName,
        styles['js-off-canvas-exit'],
      );

      return (
        <div {...this.props} className={classNames}>
          {children}
          <div
            className={contentBlockerClassNames}
            onClick={this.handleContentBlockerClick}
            style={blocked ? { ...contentBlockerStyle, display: 'block' } : contentBlockerStyle}
          />
        </div>
      );
    }
  }

  class OffCanvasContainer extends Component {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      innerClassName: PropTypes.string,
      innerStyle: PropTypes.object,
      open: PropTypes.oneOf(OFF_CANVAS_POSITIONS),
    };

    render() {
      const { children, className, innerClassName, innerStyle, open } = this.props;
      const openValid = OFF_CANVAS_POSITIONS.includes(open);
      const classNames = cx(className, styles['off-canvas-wrapper']);
      const innerClassNames = cx(
        innerClassName,
        styles['off-canvas-wrapper-inner'],
        {
          [styles[`is-open-${open}`]]: openValid,
        }
      );
      const newChildren = Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { blocked: openValid });
        }

        return child;
      });

      return (
        <div {...this.props} className={classNames}>
          <div className={innerClassNames} style={innerStyle}>
            {newChildren}
          </div>
        </div>
      );
    }
  }

  return { OffCanvas, OffCanvasContent, OffCanvasContainer };
}
