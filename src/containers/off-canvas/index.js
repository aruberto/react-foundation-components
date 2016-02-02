import React, {Component, PropTypes} from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import joinObjects from '../../util/join-objects';

const OFF_CANVAS_POSITIONS = ['left', 'right'];

export default class OffCanvas extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    contentBlockerClassName: PropTypes.string,
    contentBlockerStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    contentClassName: PropTypes.string,
    contentStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    innerClassName: PropTypes.string,
    innerStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    leftClassName: PropTypes.string,
    leftContent: PropTypes.node,
    leftStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    onClose: PropTypes.func,
    open: PropTypes.oneOf(OFF_CANVAS_POSITIONS),
    rightClassName: PropTypes.string,
    rightContent: PropTypes.node,
    rightStyle: PropTypes.object // eslint-disable-line react/forbid-prop-types
  };

  getClassNames = () => joinObjects(styles, {'off-canvas-wrapper': true});

  getInnerClassNames = () => {
    const {open} = this.props;

    return joinObjects(styles, {
      'off-canvas-wrapper-inner': true,
      [`is-open-${open}`]: OFF_CANVAS_POSITIONS.includes(open)
    });
  };

  getContentClassNames = () => joinObjects(styles, {'off-canvas-content': true});

  getContentBlockerClassNames = () => joinObjects(styles, {'js-off-canvas-exit': true});

  getLeftClassNames = () => joinObjects(styles, {'off-canvas': true, 'position-left': true});

  getRightClassNames = () => joinObjects(styles, {'off-canvas': true, 'position-right': true});

  handleContentBlockerClick = () => {
    const {onClose} = this.props;

    if (onClose) {
      onClose();
    }
  };

  render() {
    const {
      children,
      className,
      contentBlockerClassName,
      contentBlockerStyle: baseContentBlockerStyle,
      contentClassName,
      contentStyle,
      innerClassName,
      innerStyle,
      leftClassName,
      leftContent,
      leftStyle,
      open,
      rightClassName,
      rightContent,
      rightStyle
    } = this.props;
    const contentBlockerStyle = {...baseContentBlockerStyle};

    if (OFF_CANVAS_POSITIONS.includes(open)) {
      contentBlockerStyle.display = 'block';
    }

    return (
      <div {...this.props} className={cx(className, this.getClassNames())}>
        <div className={cx(innerClassName, this.getInnerClassNames())} style={innerStyle}>
          <div className={cx(leftClassName, this.getLeftClassNames())} style={leftStyle}>
            {leftContent}
          </div>
          <div className={cx(rightClassName, this.getRightClassNames())} style={rightStyle}>
            {rightContent}
          </div>
          <div className={cx(contentClassName, this.getContentClassNames())} style={contentStyle}>
            {children}
            <div
              className={cx(contentBlockerClassName, this.getContentBlockerClassNames())}
              onClick={this.handleContentBlockerClick}
              style={contentBlockerStyle}
            />
          </div>
        </div>
      </div>
    );
  }
}
