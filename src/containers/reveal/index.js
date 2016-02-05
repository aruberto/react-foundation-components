import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import Modal from 'react-overlays/lib/Modal';

import styles from './styles';
import {MODAL_SIZES} from '../../util/constants';
import Fade from '../../transitions/fade';

export default class Reveal extends Component {
  static propTypes = {
    children: PropTypes.node,
    overlay: PropTypes.bool,
    overlayClassName: PropTypes.string,
    overlayStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    revealClassName: PropTypes.string,
    revealStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    size: PropTypes.oneOf(MODAL_SIZES),
    transition: elementType
  };

  static defaultProps = {
    overlay: true,
    transition: Fade
  };

  render() {
    const {
      children,
      revealClassName,
      revealStyle,
      overlay,
      overlayClassName,
      overlayStyle,
      size
    } = this.props;
    const overlayClassNames = cx(overlayClassName, styles['reveal-overlay']);
    const revealClassNames = cx(
      revealClassName,
      styles.reveal,
      {
        [styles[size]]: MODAL_SIZES.includes(size)
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
