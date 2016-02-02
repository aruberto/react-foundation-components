import React, {Component, PropTypes} from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import joinObjects from '../../util/join-objects';

const MEDIA_OBJECT_SECTION_ALIGNMENTS = ['middle', 'bottom'];

export class MediaObjectSection extends Component {
  static propTypes = {
    alignment: PropTypes.oneOf(MEDIA_OBJECT_SECTION_ALIGNMENTS),
    children: PropTypes.node,
    className: PropTypes.string
  };

  getClassNames = () => {
    const {alignment} = this.props;

    return joinObjects(styles, {
      'media-object-section': true,
      [alignment]: MEDIA_OBJECT_SECTION_ALIGNMENTS.includes(alignment)
    });
  };

  render() {
    const {children, className} = this.props;

    return (
      <div {...this.props} className={cx(className, this.getClassNames())}>
        {children}
      </div>
    );
  }
}

export class MediaObject extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    stackForSmall: PropTypes.bool
  };

  getClassNames = () => {
    const {stackForSmall} = this.props;

    return joinObjects(styles, {
      'media-object': true,
      'stack-for-small': stackForSmall
    });
  };

  render() {
    const {children, className} = this.props;

    return (
      <div {...this.props} className={cx(className, this.getClassNames())}>
        {children}
      </div>
    );
  }
}
