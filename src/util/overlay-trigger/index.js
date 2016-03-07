import React, { Component, PropTypes, cloneElement, isValidElement } from 'react';
import {
  findDOMNode,
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer // eslint-disable-line camelcase
    as renderSubtreeIntoContainer,
} from 'react-dom';
import elementType from 'react-prop-types/lib/elementType';
import RootCloseWrapper from 'react-overlays/lib/RootCloseWrapper';
import Overlay from 'react-overlays/lib/Overlay';
import domContains from 'dom-helpers/query/contains';

import { OVERLAY_POSITIONS } from '../constants';

function mouseOverOut(event, callback) {
  const target = event.currentTarget;
  const related = event.relatedTarget || event.nativeEvent.toElement;

  if (!related || related !== target && !domContains(target, related)) {
    return callback(event);
  }
}

export default class OverlayTrigger extends Component {
  static propTypes = {
    children: PropTypes.node,
    closeOnClickOutside: PropTypes.bool,
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
  };

  state = {
    show: false,
  };

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

  _clicked = false;

  _lastRootClose = new Date();

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
    const { closeOnClickOutside } = this.props;

    if (closeOnClickOutside) {
      const now = new Date();
      const diff = now - this._lastRootClose;

      this._lastRootClose = now;

      if (this._clicked && diff < 50) {
        this.handleAnyClick();
      }
    }
  };

  handleClick = (...args) => {
    const { onClick, triggerClick } = this.props;

    if (triggerClick) {
      this.handleAnyClick();

      if (onClick) {
        onClick(...args);
      }
    }
  };

  handleBlur = (...args) => {
    const { onBlur, triggerFocus } = this.props;

    if (triggerFocus) {
      this.handleHide();

      if (onBlur) {
        onBlur(...args);
      }
    }
  };

  handleFocus = (...args) => {
    const { onFocus, triggerFocus } = this.props;

    if (triggerFocus) {
      this.handleShow();

      if (onFocus) {
        onFocus(...args);
      }
    }
  };

  handleMouseOut = (...args) => {
    const { onMouseOut, triggerHover } = this.props;

    if (triggerHover) {
      const [event] = args;

      mouseOverOut(event, () => {
        this.handleHide();

        if (onMouseOut) {
          onMouseOut(...args);
        }
      });
    }
  };

  handleMouseOver = (...args) => {
    const { onMouseOver, triggerHover } = this.props;
    const [event] = args;

    if (triggerHover) {
      mouseOverOut(event, () => {
        this.handleShow();

        if (onMouseOver) {
          onMouseOver(...args);
        }
      });
    }
  };

  createOverlay = () => {
    const { overlay, position, transition } = this.props;
    const { show } = this.state;

    return (
      <Overlay
        onHide={this.handleRootClose}
        placement={position}
        rootClose
        show={show}
        target={this.getTargetRefDOMNode}
        transition={transition}
      >
        {overlay}
      </Overlay>
    );
  };

  renderOverlay = () => renderSubtreeIntoContainer(this, this._overlay, this._mountNode);

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
      ref: this.setTargetRef,
    };
    let newChild = null;

    if (isValidElement(children)) {
      newChild = cloneElement(children, childProps);
    } else {
      newChild = <span {...childProps}>{children}</span>;
    }

    this._overlay = this.createOverlay();

    return (
      <RootCloseWrapper noWrap onRootClose={this.handleRootClose}>
        {newChild}
      </RootCloseWrapper>
    );
  }
}
