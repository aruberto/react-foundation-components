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

import styles from './styles';
import {
  COMPONENT_SIZES,
  OVERLAY_POSITIONS,
  OVERLAY_POSITIONS_INTERNAL,
} from '../../util/constants';
import createHigherOrderComponent from '../../util/create-higher-order-component';

function mouseOverOut(event, callback) {
  const target = event.currentTarget;
  const related = event.relatedTarget || event.nativeEvent.toElement;

  if (!related || related !== target && !domContains(target, related)) {
    return callback(event);
  }
}

export class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    position: PropTypes.oneOf(OVERLAY_POSITIONS),
    size: PropTypes.oneOf(COMPONENT_SIZES),
  };

  static defaultProps = {
    position: 'bottom',
  };

  render() {
    const { className, position, size } = this.props;
    const classNames = cx(
      className,
      styles['dropdown-pane'],
      styles['is-open'],
      {
        [styles[position]]: OVERLAY_POSITIONS_INTERNAL.includes(position),
        [styles[size]]: COMPONENT_SIZES.includes(size),
      }
    );

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}

const HasDropdownBase = createHigherOrderComponent({
  displayName: 'HasDropdownBase',
  mapPropsToProps: ({ dropdownId, ...restProps }) => {
    const props = {
      ...restProps,
      'aria-haspopup': true,
    };

    if (!isBlank(dropdownId)) {
      props['aria-controls'] = dropdownId;
    }

    return props;
  },
});

export class HasDropdown extends Component {
  static propTypes = {
    children: PropTypes.node,
    closeOnClick: PropTypes.bool,
    dropdown: PropTypes.node,
    dropdownClassName: PropTypes.string,
    dropdownId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dropdownPosition: PropTypes.oneOf(OVERLAY_POSITIONS),
    dropdownSize: PropTypes.oneOf(COMPONENT_SIZES),
    dropdownStyle: PropTypes.object,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onMouseOut: PropTypes.func,
    onMouseOver: PropTypes.func,
    toggleClick: PropTypes.bool,
    toggleFocus: PropTypes.bool,
    toggleHover: PropTypes.bool,
    transition: elementType,
  };

  static defaultProps = {
    dropdownPosition: 'bottom',
    toggleClick: true,
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
    const { closeOnClick } = this.props;

    if (closeOnClick) {
      const now = new Date();
      const diff = now - this._lastRootClose;

      this._lastRootClose = now;

      if (this._clicked && diff < 50) {
        this.handleAnyClick();
      }
    }
  };

  handleClick = (...args) => {
    const { onClick, toggleClick } = this.props;

    if (toggleClick) {
      this.handleAnyClick();

      if (onClick) {
        onClick(...args);
      }
    }
  };

  handleBlur = (...args) => {
    const { onBlur, toggleFocus } = this.props;

    if (toggleFocus) {
      this.handleHide();

      if (onBlur) {
        onBlur(...args);
      }
    }
  };

  handleFocus = (...args) => {
    const { onFocus, toggleFocus } = this.props;

    if (toggleFocus) {
      this.handleShow();

      if (onFocus) {
        onFocus(...args);
      }
    }
  };

  handleMouseOut = (...args) => {
    const { onMouseOut, toggleHover } = this.props;

    if (toggleHover) {
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
    const { onMouseOver, toggleHover } = this.props;
    const [event] = args;

    if (toggleHover) {
      mouseOverOut(event, () => {
        this.handleShow();

        if (onMouseOver) {
          onMouseOver(...args);
        }
      });
    }
  };

  createOverlay = () => {
    const {
      children,
      dropdown,
      dropdownClassName,
      dropdownId,
      dropdownPosition,
      dropdownSize,
      dropdownStyle,
      transition,
    } = this.props;
    const { show } = this.state;
    let labelledBy = null;

    if (children && children.props && !isBlank(children.props.id)) {
      labelledBy = children.props.id;
    }

    return (
      <Overlay
        onHide={this.handleRootClose}
        placement={dropdownPosition}
        rootClose
        show={show}
        target={this.getTargetRefDOMNode}
        transition={transition}
      >
        <Dropdown
          aria-labelledby={labelledBy}
          className={dropdownClassName}
          id={dropdownId}
          position={dropdownPosition}
          size={dropdownSize}
          style={dropdownStyle}
        >
          {dropdown}
        </Dropdown>
      </Overlay>
    );
  };

  renderOverlay = () => renderSubtreeIntoContainer(this, this._overlay, this._mountNode);

  render() {
    const { show } = this.state;

    this._overlay = this.createOverlay();

    return (
      <RootCloseWrapper noWrap onRootClose={this.handleRootClose}>
        <HasDropdownBase
          {...this.props}
          aria-expanded={show}
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
