import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';

import { MEDIA_OBJECT_SECTION_ALIGNMENTS, FLEX_VERTICAL_ALIGNMENTS } from '../util/constants';
import { FlexParent, FlexChild } from '../flex-mock';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);
const IS_FLEX_MODE = false;

export class MediaObjectSection extends Component {
  static propTypes = {
    className: PropTypes.string,
    main: PropTypes.bool,
    verticalAlignment:
      PropTypes.oneOf(IS_FLEX_MODE ? FLEX_VERTICAL_ALIGNMENTS : MEDIA_OBJECT_SECTION_ALIGNMENTS),
  };

  render() {
    const { className, main, verticalAlignment } = this.props;
    const classNames =
      cx(
        className,
        cxStyles(
          'media-object-section',
          {
            [verticalAlignment]:
              !IS_FLEX_MODE && includes(MEDIA_OBJECT_SECTION_ALIGNMENTS, verticalAlignment),
            'main-section': IS_FLEX_MODE && main,
          }
        )
      );

    return (
      <FlexChild
        {...this.props}
        className={classNames}
      />
    );
  }
}

export class MediaObject extends Component {
  static propTypes = {
    className: PropTypes.string,
    stackForSmall: PropTypes.bool,
  };

  render() {
    const { className, stackForSmall } = this.props;
    const classNames =
      cx(className, cxStyles('media-object', { 'stack-for-small': stackForSmall }));

    return (
      <FlexParent {...this.props} className={classNames} />
    );
  }
}

MediaObject.Section = MediaObjectSection;

export default MediaObject;
