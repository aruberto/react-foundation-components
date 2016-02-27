import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import Modal from 'react-overlays/lib/Modal';

import { MODAL_SIZES } from '../../util/constants';

export default function create(styles, Transition) {
  class Reveal extends Component {
    static propTypes = {
      children: PropTypes.node,
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
        revealClassName,
        revealStyle,
        overlay,
        overlayClassName,
        overlayStyle,
        size,
      } = this.props;
      const overlayClassNames = cx(overlayClassName, styles['reveal-overlay']);
      const revealClassNames = cx(
        revealClassName,
        styles.reveal,
        {
          [styles[size]]: MODAL_SIZES.includes(size),
          [styles['without-overlay']]: true,
        }
      );

      return (
        <Modal
          {...this.props}
          backdrop={overlay}
          backdropClassName={overlayClassNames}
          backdropStyle={overlayStyle}
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
