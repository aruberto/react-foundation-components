import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import styles from './styles';
import { HideOnlyForScreenReader } from '../../general/visibility';

export default class CloseButton extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;
    const classNames = cx(className, styles['close-button']);

    return (
      <button {...this.props} className={classNames} type="button">
        <HideOnlyForScreenReader>&times;</HideOnlyForScreenReader>
      </button>
    );
  }
}
