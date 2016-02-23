import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import styles from './styles';

export default class FlexVideo extends Component {
  static propTypes = {
    containerClassName: PropTypes.string,
    containerStyle: PropTypes.object,
    vimeo: PropTypes.bool,
    widescreen: PropTypes.bool,
  };

  render() {
    const { containerClassName, containerStyle, vimeo, widescreen } = this.props;
    const classNames = cx(
      containerClassName,
      styles['flex-video'],
      {
        [styles.vimeo]: vimeo,
        [styles.widescreen]: widescreen,
      }
    );

    return (
      <div className={classNames} style={containerStyle}>
        <iframe {...this.props}/>
      </div>
    );
  }
}
