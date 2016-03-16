import React, { Component, PropTypes, cloneElement, isValidElement } from 'react';
import {
  findDOMNode,
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer // eslint-disable-line camelcase
    as renderSubtreeIntoContainer,
} from 'react-dom';
import elementType from 'react-prop-types/lib/elementType';
import Overlay from 'react-overlays/lib/Overlay';
import domContains from 'dom-helpers/query/contains';
import debounce from 'lodash/debounce';

import { OVERLAY_POSITIONS } from '../constants';

function mouseOverOut(event, callback) {
  const target = event.currentTarget;
  const related = event.relatedTarget || event.nativeEvent.toElement;

  if (!related || related !== target && !domContains(target, related)) {
    callback(event);
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
    showClick: false,
    showFocus: false,
    showHover: false,
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

  getOverlayTarget = () => findDOMNode(this);

  handleAnyClick = debounce((showClick) => {
    const { showClick: showClickPrev } = this.state;

    if (showClick !== showClickPrev) {
      this.setState({ showClick });
    }
  }, 50);

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

  createOverlay = () => {
    const { closeOnClickOutside, overlay, position, transition } = this.props;
    const { showClick, showFocus, showHover } = this.state;
    const show = showClick || showFocus || showHover;

    return (
      <Overlay
        onHide={this.handleRootClose}
        placement={position}
        rootClose={closeOnClickOutside}
        show={show}
        target={this.getOverlayTarget}
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
    };
    let newChild = null;

    if (isValidElement(children)) {
      newChild = cloneElement(children, childProps);
    } else {
      newChild = <span {...childProps}>{children}</span>;
    }

    this._overlay = this.createOverlay();

    return newChild;
  }
}
