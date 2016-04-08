import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';

import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

export const FlexVideo = ({
  containerClassName,
  containerStyle,
  vimeo,
  widescreen,
  ...restProps,
}) => {
  const classNames = cx(containerClassName, cxStyles('flex-video', { vimeo, widescreen }));

  return (
    <div className={classNames} style={containerStyle}>
      <iframe {...restProps} />
    </div>
  );
};

FlexVideo.propTypes = {
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  vimeo: PropTypes.bool,
  widescreen: PropTypes.bool,
};

export default FlexVideo;
