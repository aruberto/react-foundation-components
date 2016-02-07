import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import styles from './styles';

import { MEDIA_OBJECT_SECTION_ALIGNMENTS } from '../../util/constants';

export class MediaObjectSection extends Component {
  static propTypes = {
    alignment: PropTypes.oneOf(MEDIA_OBJECT_SECTION_ALIGNMENTS),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { alignment, children, className } = this.props;
    const classNames = cx(
      className,
      styles['media-object-section'],
      {
        [styles[alignment]]: MEDIA_OBJECT_SECTION_ALIGNMENTS.includes(alignment),
      }
    );

    return (
      <div {...this.props} className={classNames}>
        {children}
      </div>
    );
  }
}

export class MediaObject extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    stackForSmall: PropTypes.bool,
  };

  render() {
    const { children, className, stackForSmall } = this.props;
    const classNames = cx(
      className,
      styles['media-object'],
      {
        [styles['stack-for-small']]: stackForSmall,
      }
    );

    return (
      <div {...this.props} className={classNames}>
        {children}
      </div>
    );
  }
}
