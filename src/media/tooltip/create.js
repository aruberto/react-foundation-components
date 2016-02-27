import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import isBlank from 'underscore.string/isBlank';

import { OVERLAY_POSITIONS, OVERLAY_POSITIONS_INTERNAL } from '../../util/constants';
import createHigherOrderComponent from '../../util/create-higher-order-component';
import OverlayTrigger from '../../util/overlay-trigger';

export default function create(styles, Fade) {
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
        <div {...this.props} className={classNames} role="tooltip"/>
      );
    }
  }

  const HasTooltip = createHigherOrderComponent({
    displayName: 'HasTooltipBase',
    mapPropsToClassNames: () => ({
      [styles['has-tip']]: true,
    }),
    mapPropsToProps: ({ tooltipId, ...restProps }) => {
      const props = {
        ...restProps,
        'aria-haspopup': true,
      };

      if (!isBlank(tooltipId)) {
        props['aria-describedby'] = tooltipId;
      }

      return props;
    },
  });

  class LinkWithTooltip extends Component {
    static propTypes = {
      children: PropTypes.node,
      tooltipClassName: PropTypes.string,
      tooltipContent: PropTypes.node,
      tooltipId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      tooltipPosition: PropTypes.oneOf(OVERLAY_POSITIONS),
      tooltipStyle: PropTypes.object,
    };

    static defaultProps = {
      closeOnClickOutside: true,
      tooltipPosition: 'bottom',
      transition: Fade,
      triggerClick: true,
      triggerFocus: true,
      triggerHover: true,
    };

    render() {
      const {
        children,
        tooltipClassName,
        tooltipContent,
        tooltipId,
        tooltipPosition,
        tooltipStyle,
      } = this.props;
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
          <HasTooltip {...this.props}>{children}</HasTooltip>
        </OverlayTrigger>
      );
    }
  }

  return { Tooltip, LinkWithTooltip };
}
