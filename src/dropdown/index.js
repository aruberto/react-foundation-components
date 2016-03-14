import React, { Component, PropTypes, isValidElement, cloneElement } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';

import {
  COMPONENT_SIZES,
  OVERLAY_POSITIONS,
  OVERLAY_POSITIONS_INTERNAL,
} from '../util/constants';
import OverlayTrigger from '../util/overlay-trigger';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

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
    const classNames =
      cx(
        className,
        cxStyles(
          'dropdown-pane',
          'is-open',
          {
            [position]: includes(OVERLAY_POSITIONS_INTERNAL, position),
            [size]: includes(COMPONENT_SIZES, size),
          }
        )
      );

    return (
      <div {...this.props} className={classNames} />
    );
  }
}

export class LinkWithDropdown extends Component {
  static propTypes = {
    children: PropTypes.node,
    dropdownClassName: PropTypes.string,
    dropdownContent: PropTypes.node,
    dropdownId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dropdownPosition: PropTypes.oneOf(OVERLAY_POSITIONS),
    dropdownSize: PropTypes.oneOf(COMPONENT_SIZES),
    dropdownStyle: PropTypes.object,
  };

  static defaultProps = {
    dropdownPosition: 'bottom',
    triggerClick: true,
  };

  render() {
    const {
      children,
      dropdownClassName,
      dropdownContent,
      dropdownId,
      dropdownPosition,
      dropdownSize,
      dropdownStyle,
    } = this.props;
    const childProps = {
      'aria-haspopup': true,
      'aria-controls': dropdownId,
    };
    let labelledBy = null;
    let newChild = null;

    if (isValidElement(children)) {
      labelledBy = children.props.id;
      newChild = cloneElement(children, childProps);
    } else {
      newChild = <span {...childProps}>{children}</span>;
    }

    const dropdown = (
      <Dropdown
        aria-labelledby={labelledBy}
        className={dropdownClassName}
        id={dropdownId}
        position={dropdownPosition}
        size={dropdownSize}
        style={dropdownStyle}
      >
        {dropdownContent}
      </Dropdown>
    );

    return (
      <OverlayTrigger {...this.props} overlay={dropdown} position={dropdownPosition}>
        {newChild}
      </OverlayTrigger>
    );
  }
}

Dropdown.LinkWith = LinkWithDropdown;

export default Dropdown;
