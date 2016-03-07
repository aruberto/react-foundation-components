import React, { Component, PropTypes, isValidElement, cloneElement } from 'react';
import cx from 'classnames';

import {
  COMPONENT_SIZES,
  OVERLAY_POSITIONS,
  OVERLAY_POSITIONS_INTERNAL,
} from '../util/constants';
import OverlayTrigger from '../util/overlay-trigger';

export default function create(styles, Transition) {
  class Dropdown extends Component {
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
        <div {...this.props} className={classNames} />
      );
    }
  }

  class LinkWithDropdown extends Component {
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
      transition: Transition,
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

  return { Dropdown, LinkWithDropdown };
}
