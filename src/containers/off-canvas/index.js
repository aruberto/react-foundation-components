import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import styles from './styles';
import { LARGER_SCREEN_SIZES, OFF_CANVAS_POSITIONS } from '../../util/constants';

export default class OffCanvas extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    contentBlockerClassName: PropTypes.string,
    contentBlockerStyle: PropTypes.object,
    contentClassName: PropTypes.string,
    contentStyle: PropTypes.object,
    innerClassName: PropTypes.string,
    innerStyle: PropTypes.object,
    leftClassName: PropTypes.string,
    leftContent: PropTypes.node,
    leftRevealForSize: PropTypes.oneOf(LARGER_SCREEN_SIZES),
    leftStyle: PropTypes.object,
    onClose: PropTypes.func,
    open: PropTypes.oneOf(OFF_CANVAS_POSITIONS),
    rightClassName: PropTypes.string,
    rightContent: PropTypes.node,
    rightRevealForSize: PropTypes.oneOf(LARGER_SCREEN_SIZES),
    rightStyle: PropTypes.object,
  };

  handleContentBlockerClick = () => {
    const { onClose } = this.props;

    if (onClose) {
      onClose();
    }
  };

  render() {
    const {
      children,
      className,
      contentBlockerClassName,
      contentBlockerStyle,
      contentClassName,
      contentStyle,
      innerClassName,
      innerStyle,
      leftClassName,
      leftContent,
      leftRevealForSize,
      leftStyle,
      open,
      rightClassName,
      rightContent,
      rightRevealForSize,
      rightStyle,
    } = this.props;
    const classNames = cx(className, styles['off-canvas-wrapper']);
    const innerClassNames = cx(
      innerClassName,
      styles['off-canvas-wrapper-inner'],
      {
        [styles[`is-open-${open}`]]: OFF_CANVAS_POSITIONS.includes(open),
      }
    );
    const leftClassNames = cx(
      leftClassName,
      styles['off-canvas'],
      styles['position-left'],
      {
        [styles[`reveal-for-${leftRevealForSize}`]]:
          LARGER_SCREEN_SIZES.includes(leftRevealForSize),
      }
    );
    const rightClassNames = cx(
      rightClassName,
      styles['off-canvas'],
      styles['position-right'],
      {
        [styles[`reveal-for-${rightRevealForSize}`]]:
          LARGER_SCREEN_SIZES.includes(rightRevealForSize),
      }
    );
    const contentClassNames = cx(contentClassName, styles['off-canvas-content']);
    const contentBlockerClassNames = cx(
      contentBlockerClassName,
      styles['js-off-canvas-exit'],
      {
        [styles['is-visible']]: OFF_CANVAS_POSITIONS.includes(open),
      }
    );

    return (
      <div {...this.props} className={classNames}>
        <div className={innerClassNames} style={innerStyle}>
          <div className={leftClassNames} style={leftStyle}>
            {leftContent}
          </div>
          <div className={rightClassNames} style={rightStyle}>
            {rightContent}
          </div>
          <div className={contentClassNames} style={contentStyle}>
            {children}
            <div
              className={contentBlockerClassNames}
              onClick={this.handleContentBlockerClick}
              style={contentBlockerStyle}
            />
          </div>
        </div>
      </div>
    );
  }
}
