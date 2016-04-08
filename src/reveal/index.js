import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';
import elementType from 'react-prop-types/lib/elementType';
import Modal from 'react-overlays/lib/Modal';

import { MODAL_SIZES } from '../util/constants';
import { Fade } from '../fade';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const Reveal = ({
  children,
  containerClassName,
  containerStyle,
  revealClassName,
  revealStyle,
  overlay,
  overlayClassName,
  overlayStyle,
  size,
  ...restProps,
}) => {
  const revealClassNames =
    cx(revealClassName, cxStyles('reveal', { [size]: includes(MODAL_SIZES, size) }));
  const overlayClassNames = cx(overlayClassName, cxStyles('reveal-overlay'));
  const containerStyleMerged = {
    ...containerStyle,
    bottom: 0,
    left: 0,
    overflowY: 'scroll',
    position: 'fixed',
    right: 0,
    top: 0,
  };

  return (
    <Modal
      {...restProps}
      backdrop={overlay}
      backdropClassName={overlayClassNames}
      backdropStyle={{ overlayStyle, display: 'block' }}
      className={containerClassName}
      style={containerStyleMerged}
    >
      <div className={revealClassNames} style={{ ...revealStyle, display: 'block' }}>
        {children}
      </div>
    </Modal>
  );
};

Reveal.propTypes = {
  children: PropTypes.node,
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  overlay: PropTypes.bool,
  overlayClassName: PropTypes.string,
  overlayStyle: PropTypes.object,
  revealClassName: PropTypes.string,
  revealStyle: PropTypes.object,
  size: PropTypes.oneOf(MODAL_SIZES),
  transition: elementType,
};
Reveal.defaultProps = {
  overlay: true,
  transition: Fade,
};

export default Reveal;
