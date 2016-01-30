import React, {Component, PropTypes} from 'react';
import {
  findDOMNode,
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer // eslint-disable-line camelcase
} from 'react-dom';
import cx from 'classnames';
import Overlay from 'react-overlays/lib/Overlay';
import contains from 'dom-helpers/query/contains';

import styles from './styles.scss';
import joinObjects from '../../util/join-objects';
import createHigherOrderComponent from '../../util/create-higher-order-component';
import {HideOnlyForScreenReader} from '../../general/visibility';
import Transition from '../../motion/transition';

const TOOLTIP_POSITIONS = ['top', 'left', 'right'];
const TOOLTIP_FADE =
  (props) => <Transition {...props} enterClassName='fade-in' exitClassName='fade-out'/>;

function mouseOverOut(event, callback) {
  const target = event.currentTarget;
  const related = event.relatedTarget || event.nativeEvent.toElement;

  if (!related || related !== target && !contains(target, related)) {
    return callback(event);
  }
}

export class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    position: PropTypes.oneOf(TOOLTIP_POSITIONS)
  };

  getClassNames = () => {
    const {position} = this.props;

    return joinObjects(styles, {
      tooltip: true,
      [position]: TOOLTIP_POSITIONS.includes(position)
    });
  };

  render() {
    const {children, className} = this.props;

    return (
      <HideOnlyForScreenReader
        {...this.props}
        className={cx(className, this.getClassNames())}
        componentClass='div'
        forceWrap
        role='tooltip'
      >
        {children}
      </HideOnlyForScreenReader>
    );
  }
}

const HasTooltipBase = createHigherOrderComponent({
  displayName: 'HasTooltipBase',
  mapPropsToClassNames: () => joinObjects(styles, {'has-tip': true}),
  mapPropsToProps: (props) => ({...props, 'aria-haspopup': true})
});

export class HasTooltip extends Component {
  static propTypes = {
    children: PropTypes.node,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onMouseOut: PropTypes.func,
    onMouseOver: PropTypes.func,
    position: PropTypes.oneOf(TOOLTIP_POSITIONS),
    tooltip: PropTypes.node,
    tooltipClassName: PropTypes.string,
    tooltipStyle: PropTypes.object // eslint-disable-line react/forbid-prop-types
  };

  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  componentDidMount() {
    this.mountNode = document.createElement('div');
    this.renderOverlay();
  }

  componentDidUpdate() {
    if (this.mountNode) {
      this.renderOverlay();
    }
  }

  componentWillUnmount() {
    unmountComponentAtNode(this.mountNode);
    this.mountNode = null;
  }

  setTargetRef = (targetRef) => this.targetRef = targetRef;

  getTargetRefDOMNode = () => findDOMNode(this.targetRef);

  handleShow = () => this.setState({show: true});

  handleHide = () => this.setState({show: false});

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
    const {position, tooltip, tooltipClassName, tooltipStyle} = this.props;
    const {show} = this.state;
    const placement = position || 'bottom';

    return (
      <Overlay
        onHide={this.handleHide}
        placement={placement}
        show={show}
        target={this.getTargetRefDOMNode}
        transition={TOOLTIP_FADE}
      >
        <Tooltip
          className={tooltipClassName}
          position={position}
          style={tooltipStyle}
        >
          {tooltip}
        </Tooltip>
      </Overlay>
    );
  };

  renderOverlay = () => renderSubtreeIntoContainer(this, this.overlay, this.mountNode);

  render() {
    const {children} = this.props;

    this.overlay = this.createOverlay();

    return (
      <HasTooltipBase
        {...this.props}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onMouseOut={this.handleMouseOut}
        onMouseOver={this.handleMouseOver}
        ref={this.setTargetRef}
      >
        {children}
      </HasTooltipBase>
    );
  }
}
