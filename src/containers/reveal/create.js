import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import Modal from 'react-overlays/lib/Modal';

import { MODAL_SIZES } from '../../util/constants';

export default function create(styles, Transition) {
  class Reveal extends Component {
    static propTypes = {
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

    static defaultProps = {
      overlay: true,
      transition: Transition,
    };

    render() {
      const {
        children,
        containerClassName,
        containerStyle,
        revealClassName,
        revealStyle,
        overlay,
        overlayClassName,
        overlayStyle,
        size,
      } = this.props;
      const revealClassNames = cx(
        revealClassName,
        styles.reveal,
        {
          [styles[size]]: MODAL_SIZES.includes(size),
        }
      );
      const overlayClassNames = cx(overlayClassName, styles['reveal-overlay']);
      const containerClassNames = cx(containerClassName, styles['reveal-container']);

      return (
        <Modal
          {...this.props}
          backdrop={overlay}
          backdropClassName={overlayClassNames}
          backdropStyle={overlayStyle}
          className={containerClassNames}
          style={containerStyle}
        >
          <div className={revealClassNames} style={revealStyle}>
            {children}
          </div>
        </Modal>
      );
    }
  }

  return { Reveal };
}
