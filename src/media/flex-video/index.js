import React, {Component, PropTypes} from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import joinObjects from '../../util/join-objects';

export default class FlexVideo extends Component {
  static propTypes = {
    containerClassName: PropTypes.string,
    containerStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    vimeo: PropTypes.bool,
    widescreen: PropTypes.bool
  };

  getClassNames = () => {
    const {vimeo, widescreen} = this.props;

    return joinObjects(styles, {
      'flex-video': true,
      vimeo,
      widescreen
    });
  };

  render() {
    const {containerClassName, containerStyle} = this.props;

    return (
      <div className={cx(containerClassName, this.getClassNames())} style={containerStyle}>
        <iframe {...this.props}/>
      </div>
    );
  }
}
