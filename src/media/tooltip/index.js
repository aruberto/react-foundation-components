import React, {Component, PropTypes} from 'react';
import {
  findDOMNode,
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer // eslint-disable-line camelcase
} from 'react-dom';
import cx from 'classnames';
import Overlay from 'react-overlays/lib/Overlay';

import styles from './styles.scss';
import joinObjects from '../../util/join-objects';
import createHigherOrderComponent from '../../util/create-higher-order-component';
import {HideOnlyForScreenReader} from '../../general/visibility';

const TOOLTIP_POSITIONS = ['top', 'left', 'right'];

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

  setTargetRef = (targetRef) => this.targetRef = targetRef;

  getTargetRefDOMNode = () => findDOMNode(this.targetRef);

  handleShow = () => this.setState({show: true});

  handleHide = () => this.setState({show: false});

  createOverlay = () => {
    const {position, tooltip, tooltipClassName, tooltipStyle} = this.props;
    const {show} = this.state;
    const placement = position || 'bottom';

    return (
      <Overlay
        container={this}
        placement={placement}
        show={show}
        target={this.getTargetRefDOMNode}
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
        onBlur={this.handleHide}
        onFocus={this.handleShow}
        onMouseOut={this.handleHide}
        onMouseOver={this.handleShow}
        ref={this.setTargetRef}
      >
        {children}
      </HasTooltipBase>
    );
  }
}
