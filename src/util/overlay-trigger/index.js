import React, { Component, PropTypes, cloneElement, isValidElement } from 'react';
import {
  findDOMNode,
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer // eslint-disable-line camelcase
    as renderSubtreeIntoContainer,
} from 'react-dom';
import elementType from 'react-prop-types/lib/elementType';
import mountable from 'react-prop-types/lib/mountable';
import Overlay from 'react-overlays/lib/Overlay';
import Transition from 'react-overlays/lib/Transition';
import { getPosition } from 'react-overlays/lib/utils/overlayPositionUtils';
import ownerDocument from 'react-overlays/lib/utils/ownerDocument';
import getContainer from 'react-overlays/lib/utils/getContainer';
import contains from 'dom-helpers/query/contains';
import css from 'dom-helpers/style';
import debounce from 'lodash/debounce';

import { OVERLAY_POSITIONS, OVERLAY_ALIGNMENTS } from '../constants';

function mouseOverOut(event, callback) {
  const target = event.currentTarget;
  const related = event.relatedTarget || event.nativeEvent.toElement;

  if (!related || related !== target && !contains(target, related)) {
    callback(event);
  }
}

function showOverlay(state) {
  const { showClick, showFocus, showHover, overlayHoverCount } = state;

  return showClick || showFocus || showHover || overlayHoverCount > 0;
}

function adjustPosition(elem, getOverlayTarget, getOverlayContainer, position, alignment) {
  const target = getOverlayTarget();
  const container = getOverlayContainer();
  const targetPosition = getPosition(target, container);

  if (position === 'top') {
    css(elem, 'top', `${targetPosition.top - parseInt(css(elem, 'height'), 10)}px`);
  } else if (position === 'bottom') {
    css(elem, 'top', `${targetPosition.top + targetPosition.height}px`);
  } else if (position === 'left') {
    css(elem, 'left', `${targetPosition.left - parseInt(css(elem, 'width'), 10)}px`);
  } else if (position === 'right') {
    css(elem, 'left', `${targetPosition.left + targetPosition.width}px`);
  }

  if (position === 'top' || position === 'bottom') {
    let leftOffset = 0;

    if (alignment !== 'left') {
      leftOffset = targetPosition.width - parseInt(css(elem, 'width'), 10);

      if (alignment !== 'right') {
        leftOffset = leftOffset / 2;
      }
    }

    css(elem, 'left', `${targetPosition.left + leftOffset}px`);
  } else if (position === 'left' || position === 'right') {
    let topOffset = 0;

    if (alignment !== 'top') {
      topOffset = targetPosition.height - parseInt(css(elem, 'height'), 10);

      if (alignment !== 'bottom') {
        topOffset = topOffset / 2;
      }
    }

    css(elem, 'top', `${targetPosition.top + topOffset}px`);
  }
}

// This is a hack to align overlay to edges of target instead of always centering it.
function hackTransition(CustomTransition, customHandleEntering) {
  const CombinedTransition = ({ onEntering, ...props }) => {
    function handleEntering(...args) {
      if (customHandleEntering) {
        customHandleEntering(...args);
      }

      if (onEntering) {
        onEntering(...args);
      }
    }

    if (CustomTransition) {
      return <CustomTransition {...props} onEntering={handleEntering} />;
    }

    return <Transition {...props} onEntering={handleEntering} timeout={0} />;
  };

  CombinedTransition.propTypes = {
    onEntering: PropTypes.func,
  };

  return CombinedTransition;
}

export default class OverlayTrigger extends Component {
  static propTypes = {
    alignment: PropTypes.oneOf(OVERLAY_ALIGNMENTS),
    children: PropTypes.node,
    closeOnClickOutside: PropTypes.bool,
    container: React.PropTypes.oneOfType([mountable, React.PropTypes.func]),
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onMouseOut: PropTypes.func,
    onMouseOver: PropTypes.func,
    overlay: PropTypes.node,
    position: PropTypes.oneOf(OVERLAY_POSITIONS),
    transition: elementType,
    triggerClick: PropTypes.bool,
    triggerFocus: PropTypes.bool,
    triggerHover: PropTypes.bool,
    triggerOverlayHover: PropTypes.bool,
    updateWindowResize: PropTypes.bool,
  };

  static defaultProps = {
    updateWindowResize: true,
  };

  state = {
    showClick: false,
    showFocus: false,
    showHover: false,
    overlayHoverCount: 0,
  };

  componentDidMount() {
    const { updateWindowResize } = this.props;

    if (updateWindowResize) {
      window.addEventListener('resize', this.handleResize);
    }

    this.mountNode = document.createElement('div');
    this.renderOverlay();
  }

  componentDidUpdate() {
    if (this.mountNode) {
      this.renderOverlay();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    unmountComponentAtNode(this.mountNode);
    this.mountNode = null;
  }

  getOverlayTarget = () => findDOMNode(this);

  getOverlayContainer = () => getContainer(this.props.container, ownerDocument(this).body);

  handleAnyClick = debounce((showClick) => {
    const { showClick: showClickPrev } = this.state;

    if (showClick !== showClickPrev) {
      this.setState({ showClick });
    }
  }, 100);

  handleClick = (...args) => {
    const { onClick, triggerClick } = this.props;
    const { showClick } = this.state;

    if (triggerClick) {
      this.handleAnyClick(!showClick);

      if (onClick) {
        onClick(...args);
      }
    }
  };

  handleRootClose = () => {
    const { showClick } = this.state;

    if (showClick) {
      this.handleAnyClick(false);
    }
  };

  handleBlur = (...args) => {
    const { onBlur, triggerFocus } = this.props;
    const { showFocus } = this.state;

    if (triggerFocus) {
      if (showFocus) {
        this.setState({ showFocus: false });
      }

      if (onBlur) {
        onBlur(...args);
      }
    }
  };

  handleFocus = (...args) => {
    const { onFocus, triggerFocus } = this.props;
    const { showFocus } = this.state;

    if (triggerFocus) {
      if (!showFocus) {
        this.setState({ showFocus: true });
      }

      if (onFocus) {
        onFocus(...args);
      }
    }
  };

  handleMouseOut = (...args) => {
    const { onMouseOut, triggerHover } = this.props;
    const { showHover } = this.state;

    if (triggerHover) {
      const [event] = args;

      mouseOverOut(event, () => {
        if (showHover) {
          this.setState({ showHover: false });
        }

        if (onMouseOut) {
          onMouseOut(...args);
        }
      });
    }
  };

  handleMouseOver = (...args) => {
    const { onMouseOver, triggerHover } = this.props;
    const { showHover } = this.state;

    if (triggerHover) {
      const [event] = args;

      mouseOverOut(event, () => {
        if (!showHover) {
          this.setState({ showHover: true });
        }

        if (onMouseOver) {
          onMouseOver(...args);
        }
      });
    }
  };

  handleOverlayMouseOut = () => {
    const { triggerHover, triggerOverlayHover } = this.props;
    const { overlayHoverCount } = this.state;

    if (triggerHover && triggerOverlayHover) {
      this.setState({ overlayHoverCount: overlayHoverCount - 1 });
    }
  };

  handleOverlayMouseOver = () => {
    const { triggerHover, triggerOverlayHover } = this.props;
    const { overlayHoverCount } = this.state;

    if (triggerHover && triggerOverlayHover) {
      this.setState({ overlayHoverCount: overlayHoverCount + 1 });
    }
  };

  handleResize = () => {
    const { position, alignment } = this.props;
    const show = showOverlay(this.state);

    if (show && this.elem) {
      adjustPosition(
        this.elem,
        this.getOverlayTarget,
        this.getOverlayContainer,
        position,
        alignment
      );
    }
  };

  handleEntering = (elem) => {
    this.elem = elem;

    this.handleResize();
  }

  _transition = hackTransition(this.props.transition, this.handleEntering);

  createOverlay = () => {
    const { closeOnClickOutside, overlay, position } = this.props;
    const show = showOverlay(this.state);
    let clonedOverlay = null;
    const overalyProps = {
      onMouseOver: this.handleOverlayMouseOver,
      onMouseOut: this.handleOverlayMouseOut,
    };

    if (isValidElement(overlay)) {
      clonedOverlay = cloneElement(overlay, overalyProps);
    } else {
      clonedOverlay = <span {...overalyProps}>{overlay}</span>;
    }

    return (
      <Overlay
        constainer={this.getOverlayContainer}
        onHide={this.handleRootClose}
        placement={position}
        rootClose={closeOnClickOutside}
        show={show}
        target={this.getOverlayTarget}
        transition={this.transition}
      >
        {clonedOverlay}
      </Overlay>
    );
  };

  renderOverlay = () => renderSubtreeIntoContainer(this, this.overlay, this.mountNode);

  render() {
    const { children } = this.props;
    const { show } = this.state;
    const childProps = {
      'aria-expanded': show,
      onBlur: this.handleBlur,
      onClick: this.handleClick,
      onFocus: this.handleFocus,
      onMouseOut: this.handleMouseOut,
      onMouseOver: this.handleMouseOver,
    };
    let clonedChild = null;

    if (isValidElement(children)) {
      clonedChild = cloneElement(children, childProps);
    } else {
      clonedChild = <span {...childProps}>{children}</span>;
    }

    this.overlay = this.createOverlay();

    return clonedChild;
  }
}
