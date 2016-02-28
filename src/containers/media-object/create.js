import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import { MEDIA_OBJECT_SECTION_ALIGNMENTS, FLEX_VERTICAL_ALIGNMENTS } from '../../util/constants';
import DefaultComponent from '../../util/default-component';

export default function create(
  styles,
  FlexParent = DefaultComponent,
  FlexChild = DefaultComponent
) {
  class MediaObjectSection extends Component {
    static propTypes = {
      alignment: PropTypes.oneOf(MEDIA_OBJECT_SECTION_ALIGNMENTS),
      className: PropTypes.string,
      main: PropTypes.bool,
      verticalAlignment: PropTypes.oneOf(FLEX_VERTICAL_ALIGNMENTS),
    };

    render() {
      const { alignment, className, main, verticalAlignment } = this.props;
      const classNames = cx(
        className,
        styles['media-object-section'],
        {
          [styles[alignment]]:
            styles[alignment] && MEDIA_OBJECT_SECTION_ALIGNMENTS.includes(alignment),
          [styles['main-section']]: styles['main-section'] && main,
        }
      );

      return (
        <FlexChild
          {...this.props}
          className={classNames}
          componentClass="div"
          verticalAlignment={verticalAlignment || alignment}
        />
      );
    }
  }

  class MediaObject extends Component {
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
        <FlexParent {...this.props} className={classNames} componentClass="div"/>
      );
    }
  }

  return { MediaObject, MediaObjectSection };
}
