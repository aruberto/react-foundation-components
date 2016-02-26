import React, { Component, PropTypes } from 'react';
import {
  findDOMNode,
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer // eslint-disable-line camelcase
    as renderSubtreeIntoContainer,
} from 'react-dom';
import cx from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import Overlay from 'react-overlays/lib/Overlay';
import RootCloseWrapper from 'react-overlays/lib/RootCloseWrapper';
import isBlank from 'underscore.string/isBlank';
import domContains from 'dom-helpers/query/contains';

import { OVERLAY_POSITIONS, OVERLAY_POSITIONS_INTERNAL } from '../../util/constants';
import createHigherOrderComponent from '../../util/create-higher-order-component';

function mouseOverOut(event, callback) {
  const target = event.currentTarget;
  const related = event.relatedTarget || event.nativeEvent.toElement;

  if (!related || related !== target && !domContains(target, related)) {
    return callback(event);
  }
}

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

  const HasTooltipBase = createHigherOrderComponent({
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

  class HasTooltip extends Component {
    static propTypes = {
      onBlur: PropTypes.func,
      onClick: PropTypes.func,
      onFocus: PropTypes.func,
      onMouseOut: PropTypes.func,
      onMouseOver: PropTypes.func,
      tooltip: PropTypes.node,
      tooltipClassName: PropTypes.string,
      tooltipId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      tooltipPosition: PropTypes.oneOf(OVERLAY_POSITIONS),
      tooltipStyle: PropTypes.object,
      transition: elementType,
    };

    static defaultProps = {
      tooltipPosition: 'bottom',
      transition: Fade,
    };

    constructor(props) {
      super(props);

      this.state = {
        show: false,
      };
      this._clicked = false;
      this._lastRootClose = new Date();
    }

    componentDidMount() {
      this._mountNode = document.createElement('div');
      this.renderOverlay();
    }

    componentDidUpdate() {
      if (this._mountNode) {
        this.renderOverlay();
      }
    }

    componentWillUnmount() {
      unmountComponentAtNode(this._mountNode);
      this._mountNode = null;
    }

    setTargetRef = (ref) => this._targetRef = ref;

    getTargetRefDOMNode = () => findDOMNode(this._targetRef);

    handleShow = () => this.setState({ show: true });

    handleHide = () => {
      if (!this._clicked) {
        this.setState({ show: false });
      }
    };

    handleAnyClick = () => {
      const { show } = this.state;

      if (show) {
        if (this._clicked) {
          this._clicked = false;
          this.handleHide();
        } else {
          this._clicked = true;
        }
      } else {
        this._clicked = true;
        this.handleShow();
      }
    };

    handleRootClose = () => {
      const now = new Date();
      const diff = now - this._lastRootClose;

      this._lastRootClose = now;

      if (this._clicked && diff < 50) {
        this.handleAnyClick();
      }
    };

    handleClick = (...args) => {
      const { onClick } = this.props;

      this.handleAnyClick();

      if (onClick) {
        onClick(...args);
      }
    };

    handleBlur = (...args) => {
      const { onBlur } = this.props;

      this.handleHide();

      if (onBlur) {
        onBlur(...args);
      }
    };

    handleFocus = (...args) => {
      const { onFocus } = this.props;

      this.handleShow();

      if (onFocus) {
        onFocus(...args);
      }
    };

    handleMouseOut = (...args) => {
      const { onMouseOut } = this.props;
      const [event] = args;

      mouseOverOut(event, () => {
        this.handleHide();

        if (onMouseOut) {
          onMouseOut(...args);
        }
      });
    };

    handleMouseOver = (...args) => {
      const { onMouseOver } = this.props;
      const [event] = args;

      mouseOverOut(event, () => {
        this.handleShow();

        if (onMouseOver) {
          onMouseOver(...args);
        }
      });
    };

    createOverlay = () => {
      const {
        tooltip,
        tooltipClassName,
        tooltipId,
        tooltipPosition,
        tooltipStyle,
        transition,
      } = this.props;
      const { show } = this.state;

      return (
        <Overlay
          onHide={this.handleRootClose}
          placement={tooltipPosition}
          rootClose
          show={show}
          target={this.getTargetRefDOMNode}
          transition={transition}
        >
          <Tooltip
            className={tooltipClassName}
            id={tooltipId}
            position={tooltipPosition}
            style={tooltipStyle}
          >
            {tooltip}
          </Tooltip>
        </Overlay>
      );
    };

    renderOverlay = () => renderSubtreeIntoContainer(this, this._overlay, this._mountNode);

    render() {
      this._overlay = this.createOverlay();

      return (
        <RootCloseWrapper noWrap onRootClose={this.handleRootClose}>
          <HasTooltipBase
            {...this.props}
            onBlur={this.handleBlur}
            onClick={this.handleClick}
            onFocus={this.handleFocus}
            onMouseOut={this.handleMouseOut}
            onMouseOver={this.handleMouseOver}
            ref={this.setTargetRef}
          />
        </RootCloseWrapper>
      );
    }
  }

  return { Tooltip, HasTooltip };
}
