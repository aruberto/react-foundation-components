import React, { Component, PropTypes, isValidElement, cloneElement } from 'react';
import cx from 'classnames';

import { OVERLAY_POSITIONS, OVERLAY_POSITIONS_INTERNAL } from '../util/constants';
import OverlayTrigger from '../util/overlay-trigger';

export default function create(styles, Transition) {
  class Tooltip extends Component {
    static propTypes = {
      className: PropTypes.string,
      position: PropTypes.oneOf(OVERLAY_POSITIONS),
    };

    static defaultProps = {
      position: 'bottom',
    };

    render() {
      const { className, position } = this.props;
      const classNames = cx(
        className,
        styles.tooltip,
        {
          [styles[position]]: OVERLAY_POSITIONS_INTERNAL.includes(position),
        }
      );

      return (
        <div {...this.props} className={classNames} role="tooltip" />
      );
    }
  }

  class LinkWithTooltip extends Component {
    static propTypes = {
      children: PropTypes.node,
      tooltipClassName: PropTypes.string,
      tooltipContent: PropTypes.node,
      tooltipIndicator: PropTypes.bool,
      tooltipId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      tooltipPosition: PropTypes.oneOf(OVERLAY_POSITIONS),
      tooltipStyle: PropTypes.object,
    };

    static defaultProps = {
      closeOnClickOutside: true,
      tooltipIndicator: true,
      tooltipPosition: 'bottom',
      transition: Transition,
      triggerClick: true,
      triggerFocus: true,
      triggerHover: true,
    };

    render() {
      const {
        children,
        tooltipClassName,
        tooltipContent,
        tooltipIndicator,
        tooltipId,
        tooltipPosition,
        tooltipStyle,
      } = this.props;
      const childProps = {
        'aria-haspopup': true,
        'aria-describedby': tooltipId,
      };
      const childClassNames = {
        [styles['has-tip']]: tooltipIndicator,
      };
      let newChild = null;

      if (isValidElement(children)) {
        newChild = cloneElement(children, {
          ...childProps,
          className: cx(children.props.className, childClassNames),
        });
      } else {
        newChild = <span {...childProps} className={cx(childClassNames)}>{children}</span>;
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
        <OverlayTrigger {...this.props} overlay={tooltip} position={tooltipPosition}>
          {newChild}
        </OverlayTrigger>
      );
    }
  }

  Tooltip.LinkWith = LinkWithTooltip;

  return { Tooltip, LinkWithTooltip };
}
