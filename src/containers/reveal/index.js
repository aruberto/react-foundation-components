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
    backdropClassName: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    collapse: PropTypes.bool,
    size: PropTypes.oneOf(MODAL_SIZES),
    transition: elementType
  };

  static defaultProps = {
    transition: Fade
  };

  getClassNames = () => {
    const {collapse, size} = this.props;

    return joinObjects(styles, {
      reveal: true,
      collapse,
      [size]: MODAL_SIZES.includes(size)
    });
  };

  getBackdropClassNames = () => joinObjects(styles, {'reveal-overlay': true});

  render() {
    const {backdropClassName, children, className} = this.props;

    return (
      <Modal
        {...this.props}
        backdropClassName={cx(backdropClassName, this.getBackdropClassNames())}
        backdropStyle={{display: 'block'}}
      >
        <div className={cx(className, this.getClassNames())} style={{display: 'block'}}>
          {children}
        </div>
      </Modal>
    );
  }
}
