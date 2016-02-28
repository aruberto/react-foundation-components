import React, { Component, PropTypes, isValidElement } from 'react';
import cx from 'classnames';
import isBlank from 'underscore.string/isBlank';

import {
  COMPONENT_SIZES,
  OVERLAY_POSITIONS,
  OVERLAY_POSITIONS_INTERNAL,
} from '../util/constants';
import createHigherOrderComponent from '../util/create-higher-order-component';
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
        <div {...this.props} className={classNames}/>
      );
    }
  }

  const HasDropdown = createHigherOrderComponent({
    displayName: 'HasDropdown',
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
      let labelledBy = null;

      if (isValidElement(children) && !isBlank(children.props.id)) {
        labelledBy = children.props.id;
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
          <HasDropdown {...this.props}>{children}</HasDropdown>
        </OverlayTrigger>
      );
    }
  }

  return { Dropdown, HasDropdown, LinkWithDropdown };
}
