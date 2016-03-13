import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';

import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export class FlexVideo extends Component {
  static propTypes = {
    containerClassName: PropTypes.string,
    containerStyle: PropTypes.object,
    vimeo: PropTypes.bool,
    widescreen: PropTypes.bool,
  };

  render() {
    const { containerClassName, containerStyle, vimeo, widescreen } = this.props;
    const classNames = cx(containerClassName, cxStyles('flex-video', { vimeo, widescreen }));

    return (
      <div className={classNames} style={containerStyle}>
        <iframe {...this.props} />
      </div>
    );
  }
}

export default FlexVideo;
