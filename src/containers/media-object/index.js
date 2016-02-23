import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import styles from './styles';

import { MEDIA_OBJECT_SECTION_ALIGNMENTS } from '../../util/constants';

export class MediaObjectSection extends Component {
  static propTypes = {
    alignment: PropTypes.oneOf(MEDIA_OBJECT_SECTION_ALIGNMENTS),
    className: PropTypes.string,
  };

  render() {
    const { alignment, className } = this.props;
    const classNames = cx(
      className,
      styles['media-object-section'],
      {
        [styles[alignment]]: MEDIA_OBJECT_SECTION_ALIGNMENTS.includes(alignment),
      }
    );

    return (
      <div {...this.props} className={classNames}/>
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
    const classNames = cx(
      className,
      styles['media-object'],
      {
        [styles['stack-for-small']]: stackForSmall,
      }
    );

    return (
      <div {...this.props} className={classNames}/>
    );
  }
}
