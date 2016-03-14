import React, { Component, PropTypes, Children, cloneElement, isValidElement } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';

import { LARGER_SCREEN_SIZES, OFF_CANVAS_POSITIONS } from '../util/constants';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export class OffCanvas extends Component {
  static propTypes = {
    className: PropTypes.string,
    position: PropTypes.oneOf(OFF_CANVAS_POSITIONS),
    revealFor: PropTypes.oneOf(LARGER_SCREEN_SIZES),
  };

  render() {
    const { className, position, revealFor } = this.props;
    const classNames =
      cx(
        className,
        cxStyles(
          'off-canvas',
          {
            [`position-${position}`]: includes(OFF_CANVAS_POSITIONS, position),
            [`reveal-for-${revealFor}`]: includes(LARGER_SCREEN_SIZES, revealFor),
          }
        )
      );

    return <div {...this.props} className={classNames} />;
  }
}

export class OffCanvasContent extends Component {
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
    const classNames = cx(className, cxStyles('off-canvas-content'));
    const contentBlockerClassNames = cx(contentBlockerClassName, cxStyles('js-off-canvas-exit'));

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

export class OffCanvasContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    innerClassName: PropTypes.string,
    innerStyle: PropTypes.object,
    open: PropTypes.oneOf(OFF_CANVAS_POSITIONS),
  };

  render() {
    const { children, className, innerClassName, innerStyle, open } = this.props;
    const openValid = includes(OFF_CANVAS_POSITIONS, open);
    const classNames = cx(className, cxStyles('off-canvas-wrapper'));
    const innerClassNames =
      cx(innerClassName, cxStyles('off-canvas-wrapper-inner', { [`is-open-${open}`]: openValid }));
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

OffCanvas.Content = OffCanvasContent;
OffCanvas.Container = OffCanvasContainer;

export default OffCanvas;
