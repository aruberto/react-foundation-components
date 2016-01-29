import React, {Component, PropTypes} from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import joinObjects from '../../util/join-objects';
import {HideOnlyForScreenReader} from '../../general/visibility';

export default class CloseButton extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  getClassNames = () => joinObjects(styles, {'close-button': true});

  render() {
    const {className, children = '×'} = this.props;

    return (
      <button {...this.props} className={cx(className, this.getClassNames())} type='button'>
        <HideOnlyForScreenReader>{children}</HideOnlyForScreenReader>
      </button>
    );
  }
}
