import React, { PropTypes, isValidElement, cloneElement } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';

import {
  OVERLAY_POSITIONS,
  OVERLAY_POSITIONS_INTERNAL,
  OVERLAY_ALIGNMENTS,
} from '../util/constants';
import OverlayTrigger from '../util/overlay-trigger';
import { Fade } from '../fade';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const Tooltip = ({
  className,
  position,
  ...restProps,
}) => {
  const classNames =
    cx(
      className,
      cxStyles(
        'tooltip',
        {
          [position]: includes(OVERLAY_POSITIONS_INTERNAL, position),
        }
      )
    );

  return <div {...restProps} className={classNames} role="tooltip" />;
};

Tooltip.propTypes = {
  className: PropTypes.string,
  position: PropTypes.oneOf(OVERLAY_POSITIONS),
};
Tooltip.defaultProps = {
  position: 'bottom',
};

export const LinkWithTooltip = ({
  children,
  tooltipAlignment,
  tooltipClassName,
  tooltipContent,
  tooltipIndicator,
  tooltipId,
  tooltipPosition,
  tooltipStyle,
  ...restProps,
}) => {
  const childProps = {
    'aria-haspopup': true,
    'aria-describedby': tooltipId,
  };
  const childClassNames = cxStyles({ 'has-tip': tooltipIndicator });
  let clonedChild = null;

  if (isValidElement(children)) {
    clonedChild = cloneElement(children, {
      ...childProps,
      className: cx(children.props.className, childClassNames),
    });
  } else {
    clonedChild = <span {...childProps} className={childClassNames}>{children}</span>;
  }

  const tooltip = (
    <Tooltip
      className={tooltipClassName}
      id={tooltipId}
      position={tooltipPosition}
      style={tooltipStyle}
    >
      {tooltipContent}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      {...restProps}
      alignment={tooltipAlignment}
      overlay={tooltip}
      position={tooltipPosition}
    >
      {clonedChild}
    </OverlayTrigger>
  );
};

LinkWithTooltip.propTypes = {
  children: PropTypes.node,
  tooltipAlignment: PropTypes.oneOf(OVERLAY_ALIGNMENTS),
  tooltipClassName: PropTypes.string,
  tooltipContent: PropTypes.node,
  tooltipIndicator: PropTypes.bool,
  tooltipId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tooltipPosition: PropTypes.oneOf(OVERLAY_POSITIONS),
  tooltipStyle: PropTypes.object,
};
LinkWithTooltip.defaultProps = {
  closeOnClickOutside: true,
  tooltipIndicator: true,
  tooltipPosition: 'bottom',
  transition: Fade,
  triggerClick: true,
  triggerFocus: true,
  triggerHover: true,
};

Tooltip.LinkWith = LinkWithTooltip;

export default Tooltip;
