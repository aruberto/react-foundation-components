import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';

import { HideForScreenReader } from '../visibility';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export class CloseButton extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;
    const classNames = cx(className, cxStyles('close-button'));

    return (
      <button {...this.props} className={classNames} type="button">
        <HideForScreenReader>&times;</HideForScreenReader>
      </button>
    );
  }
}

export default CloseButton;
