import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import DefaultComponent from '../util/default-component';

export default function create(styles, HideForScreenReader = DefaultComponent) {
  class CloseButton extends Component {
    static propTypes = {
      className: PropTypes.string,
    };

    render() {
      const { className } = this.props;
      const classNames = cx(className, styles['close-button']);

      return (
        <button {...this.props} className={classNames} type="button">
          <HideForScreenReader>&times;</HideForScreenReader>
        </button>
      );
    }
  }

  return { CloseButton };
}
