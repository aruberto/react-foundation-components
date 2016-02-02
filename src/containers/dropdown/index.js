import React, {Component, PropTypes} from 'react';
import {
  findDOMNode,
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer // eslint-disable-line camelcase
} from 'react-dom';
import cx from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import Overlay from 'react-overlays/lib/Overlay';
import RootCloseWrapper from 'react-overlays/lib/RootCloseWrapper';
import isBlank from 'underscore.string/isBlank';
import domContains from 'dom-helpers/query/contains';

import styles from './styles.scss';
import {COMPONENT_SIZES, OVERLAY_POSITIONS} from '../../util/constants';
import joinObjects from '../../util/join-objects';
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
    children: PropTypes.node,
    className: PropTypes.string,
    position: PropTypes.oneOf(OVERLAY_POSITIONS),
    size: PropTypes.oneOf(COMPONENT_SIZES)
  };

  getClassNames = () => {
    const {position, size} = this.props;

    return joinObjects(styles, {
      'dropdown-pane': true,
      'is-open': true,
      [position]: OVERLAY_POSITIONS.includes(position),
      [size]: COMPONENT_SIZES.includes(size)
    });
  };

  render() {
    const {children, className} = this.props;

    return (
      <div {...this.props} className={cx(className, this.getClassNames())}>
        {children}
      </div>
    );
  }
}

const HasDropdownBase = createHigherOrderComponent({
  displayName: 'HasDropdownBase',
  mapPropsToProps: ({dropdown, ...restProps}) => {
    const props = {
      ...restProps,
      'aria-haspopup': true
    };

    if (dropdown && dropdown.props && !isBlank(dropdown.props.id)) {
      props['aria-controls'] = dropdown.props.id;
    }

    return props;
  }
});

export class HasDropdown extends Component {
  static propTypes = {
    children: PropTypes.node,
    dropdown: PropTypes.node,
    dropdownClassName: PropTypes.string,
    dropdownPosition: PropTypes.oneOf(OVERLAY_POSITIONS),
    dropdownSize: PropTypes.oneOf(COMPONENT_SIZES),
    dropdownStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onMouseOut: PropTypes.func,
    onMouseOver: PropTypes.func,
    transition: elementType
  };

  constructor(props) {
    super(props);

    this.state = {
      show: false
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

  handleShow = () => this.setState({show: true});

  handleHide = () => {
    if (!this._clicked) {
      this.setState({show: false});
    }
  };

  handleAnyClick = () => {
    const {show} = this.state;

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
    const {onClick} = this.props;

    this.handleAnyClick();

    if (onClick) {
      onClick(...args);
    }
  };

  handleBlur = (...args) => {
    const {onBlur} = this.props;

    this.handleHide();

    if (onBlur) {
      onBlur(...args);
    }
  };

  handleFocus = (...args) => {
    const {onFocus} = this.props;

    this.handleShow();

    if (onFocus) {
      onFocus(...args);
    }
  };

  handleMouseOut = (...args) => {
    const {onMouseOut} = this.props;
    const [event] = args;

    mouseOverOut(event, () => {
      this.handleHide();

      if (onMouseOut) {
        onMouseOut(...args);
      }
    });
  };

  handleMouseOver = (...args) => {
    const {onMouseOver} = this.props;
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
      dropdown,
      dropdownClassName,
      dropdownPosition,
      dropdownSize,
      dropdownStyle,
      transition
    } = this.props;
    const {show} = this.state;
    const placement = dropdownPosition || 'bottom';

    return (
      <Overlay
        onHide={this.handleRootClose}
        placement={placement}
        rootClose
        show={show}
        target={this.getTargetRefDOMNode}
        transition={transition}
      >
        <Dropdown
          className={dropdownClassName}
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
    const {children} = this.props;

    this._overlay = this.createOverlay();

    return (
      <RootCloseWrapper noWrap onRootClose={this.handleRootClose}>
        <HasDropdownBase
          {...this.props}
          onBlur={this.handleBlur}
          onClick={this.handleClick}
          onFocus={this.handleFocus}
          onMouseOut={this.handleMouseOut}
          onMouseOver={this.handleMouseOver}
          ref={this.setTargetRef}
        >
          {children}
        </HasDropdownBase>
      </RootCloseWrapper>
    );
  }
}
