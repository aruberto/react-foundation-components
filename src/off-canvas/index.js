import React, { PropTypes, Children, cloneElement, isValidElement } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';

import { LARGER_SCREEN_SIZES, OFF_CANVAS_POSITIONS } from '../util/constants';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const OffCanvas = ({
  className,
  position,
  revealFor,
  ...restProps,
}) => {
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

  return <div {...restProps} className={classNames} />;
};

OffCanvas.propTypes = {
  className: PropTypes.string,
  position: PropTypes.oneOf(OFF_CANVAS_POSITIONS),
  revealFor: PropTypes.oneOf(LARGER_SCREEN_SIZES),
};

export const OffCanvasContent = ({
  blocked,
  children,
  className,
  contentBlockerClassName,
  contentBlockerStyle,
  onContentBlockerClick,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('off-canvas-content'));
  const contentBlockerClassNames = cx(contentBlockerClassName, cxStyles('js-off-canvas-exit'));

  return (
    <div {...restProps} className={classNames}>
      {children}
      <div
        className={contentBlockerClassNames}
        onClick={onContentBlockerClick}
        style={blocked ? { ...contentBlockerStyle, display: 'block' } : contentBlockerStyle}
      />
    </div>
  );
};

OffCanvasContent.propTypes = {
  blocked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  contentBlockerClassName: PropTypes.string,
  contentBlockerStyle: PropTypes.object,
  onContentBlockerClick: PropTypes.func,
};

export const OffCanvasContainer = ({
  children,
  className,
  innerClassName,
  innerStyle,
  open,
  ...restProps,
}) => {
  const blocked = includes(OFF_CANVAS_POSITIONS, open);
  const classNames = cx(className, cxStyles('off-canvas-wrapper'));
  const innerClassNames =
    cx(innerClassName, cxStyles('off-canvas-wrapper-inner', { [`is-open-${open}`]: blocked }));
  const clonedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { blocked });
    }

    return child;
  });

  return (
    <div {...restProps} className={classNames}>
      <div className={innerClassNames} style={innerStyle}>
        {clonedChildren}
      </div>
    </div>
  );
};

OffCanvasContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  innerStyle: PropTypes.object,
  open: PropTypes.oneOf(OFF_CANVAS_POSITIONS),
};

OffCanvas.Content = OffCanvasContent;
OffCanvas.Container = OffCanvasContainer;

export default OffCanvas;
