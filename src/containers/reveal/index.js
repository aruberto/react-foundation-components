import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import Modal from 'react-overlays/lib/Modal';

import styles from './styles.scss';
import {COMPONENT_SIZES} from '../../util/constants';
import joinObjects from '../../util/join-objects';
import Fade from '../../transitions/fade';

const MODAL_SIZES = COMPONENT_SIZES.concat(['full']);

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

  getRevealClassNames = () => {
    const {size} = this.props;

    return joinObjects(styles, {
      reveal: true,
      [size]: MODAL_SIZES.includes(size)
    });
  };

  getOverlayClassNames = () => joinObjects(styles, {'reveal-overlay': true});

  render() {
    const {
      children,
      revealClassName,
      revealStyle,
      overlay,
      overlayClassName,
      overlayStyle
    } = this.props;

    return (
      <Modal
        {...this.props}
        backdrop={overlay}
        backdropClassName={cx(overlayClassName, this.getOverlayClassNames())}
        backdropStyle={{...overlayStyle, display: 'block'}}
      >
        <div
          className={cx(revealClassName, this.getRevealClassNames())}
          style={{...revealStyle, display: 'block'}}
        >
          {children}
        </div>
      </Modal>
    );
  }
}
