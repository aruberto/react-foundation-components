import React, { PropTypes, isValidElement, cloneElement } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';

import {
  COMPONENT_SIZES,
  OVERLAY_POSITIONS,
  OVERLAY_POSITIONS_INTERNAL,
  OVERLAY_ALIGNMENTS,
} from '../util/constants';
import OverlayTrigger from '../util/overlay-trigger';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);
const DROPDOWN_ALIGNMENTS_FROM_POSITION = {
  top: 'left',
  bottom: 'left',
  left: 'top',
  right: 'top',
};

export const Dropdown = ({
  className,
  position,
  size,
  ...restProps,
}) => {
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

  return <div {...restProps} className={classNames} />;
};

Dropdown.propTypes = {
  className: PropTypes.string,
  position: PropTypes.oneOf(OVERLAY_POSITIONS),
  size: PropTypes.oneOf(COMPONENT_SIZES),
};
Dropdown.defaultProps = {
  position: 'bottom',
};

export const LinkWithDropdown = ({
  children,
  dropdownClassName,
  dropdownContent,
  dropdownId,
  dropdownPosition,
  dropdownAlignment = DROPDOWN_ALIGNMENTS_FROM_POSITION[dropdownPosition],
  dropdownSize,
  dropdownStyle,
  ...restProps,
}) => {
  const childProps = {
    'aria-haspopup': true,
    'aria-controls': dropdownId,
  };
  let labelledBy = null;
  let clonedChild = null;

  if (isValidElement(children)) {
    labelledBy = children.props.id;
    clonedChild = cloneElement(children, childProps);
  } else {
    clonedChild = <span {...childProps}>{children}</span>;
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
    <OverlayTrigger
      {...restProps}
      alignment={dropdownAlignment}
      overlay={dropdown}
      position={dropdownPosition}
    >
      {clonedChild}
    </OverlayTrigger>
  );
};

LinkWithDropdown.propTypes = {
  children: PropTypes.node,
  dropdownAlignment: PropTypes.oneOf(OVERLAY_ALIGNMENTS),
  dropdownClassName: PropTypes.string,
  dropdownContent: PropTypes.node,
  dropdownId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dropdownPosition: PropTypes.oneOf(OVERLAY_POSITIONS),
  dropdownSize: PropTypes.oneOf(COMPONENT_SIZES),
  dropdownStyle: PropTypes.object,
};
LinkWithDropdown.defaultProps = {
  dropdownPosition: 'bottom',
  triggerClick: true,
  triggerOverlayHover: true,
};

Dropdown.LinkWith = LinkWithDropdown;

export default Dropdown;
