import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';

import { MEDIA_OBJECT_SECTION_ALIGNMENTS, FLEX_VERTICAL_ALIGNMENTS } from '../util/constants';
import { FlexParent, FlexChild } from '../flex-mock';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);
const IS_FLEX_MODE = false;

export const MediaObjectSection = ({
  className,
  main,
  verticalAlignment,
  ...restProps,
}) => {
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
      {...restProps}
      className={classNames}
      verticalAlignment={IS_FLEX_MODE ? verticalAlignment : null}
    />
  );
};

MediaObjectSection.propTypes = {
  className: PropTypes.string,
  main: PropTypes.bool,
  verticalAlignment:
    PropTypes.oneOf(IS_FLEX_MODE ? FLEX_VERTICAL_ALIGNMENTS : MEDIA_OBJECT_SECTION_ALIGNMENTS),
};

export const MediaObject = ({
  className,
  stackForSmall,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('media-object', { 'stack-for-small': stackForSmall }));

  return <FlexParent {...restProps} className={classNames} />;
};

MediaObject.propTypes = {
  className: PropTypes.string,
  stackForSmall: PropTypes.bool,
};

MediaObject.Section = MediaObjectSection;

export default MediaObject;
