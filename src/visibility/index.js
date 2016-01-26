import React, {Component, PropTypes, Children, isValidElement} from 'react';
import classNames from 'classnames';

import style from './style.scss';
import {classNamesMapper} from '../util';

export default class Visibility extends Component {
  static propTypes = {
    children: PropTypes.node,
    hide: PropTypes.bool,
    hideForLandscape: PropTypes.bool,
    hideForLarge: PropTypes.bool,
    hideForLargeOnly: PropTypes.bool,
    hideForMedium: PropTypes.bool,
    hideForMediumOnly: PropTypes.bool,
    hideForPortrait: PropTypes.bool,
    hideForScreenReaderOnly: PropTypes.bool,
    hideForSmallOnly: PropTypes.bool,
    invisible: PropTypes.bool,
    showForLandscape: PropTypes.bool,
    showForLarge: PropTypes.bool,
    showForLargeOnly: PropTypes.bool,
    showForMedium: PropTypes.bool,
    showForMediumOnly: PropTypes.bool,
    showForPortrait: PropTypes.bool,
    showForScreenReaderOnly: PropTypes.bool,
    showForSmallOnly: PropTypes.bool,
    showOnFocus: PropTypes.bool
  };

  render() {
    const {
      children,
      hide,
      hideForLandscape,
      hideForLarge,
      hideForLargeOnly,
      hideForMedium,
      hideForMediumOnly,
      hideForPortrait,
      hideForScreenReaderOnly,
      hideForSmallOnly,
      invisible,
      showForLandscape,
      showForLarge,
      showForLargeOnly,
      showForMedium,
      showForMediumOnly,
      showForPortrait,
      showForScreenReaderOnly,
      showForSmallOnly,
      showOnFocus
    } = this.props;
    const visibilityClassNames = classNamesMapper(style, {
      hide,
      'hide-for-landscape': hideForLandscape,
      'hide-for-large': hideForLarge,
      'hide-for-large-only': hideForLargeOnly,
      'hide-for-medium': hideForMedium,
      'hide-for-medium-only': hideForMediumOnly,
      'hide-for-portrait': hideForPortrait,
      'hide-for-small-only': hideForSmallOnly,
      invisible,
      'show-for-landscape': showForLandscape,
      'show-for-large': showForLarge,
      'show-for-large-only': showForLargeOnly,
      'show-for-medium': showForMedium,
      'show-for-medium-only': showForMediumOnly,
      'show-for-portrait': showForPortrait,
      'show-for-sr': showForScreenReaderOnly,
      'show-for-small-only': showForSmallOnly,
      'show-on-focus': showOnFocus
    });
    const props = {
      className: classNames(visibilityClassNames)
    };

    if (hideForScreenReaderOnly) {
      props['aria-hidden'] = true;
    }

    if (Children.count(children) === 1) {
      const child = Children.only(children);

      if (isValidElement(child)) {
        props.className = classNames(child.props.className, props.className);

        return React.cloneElement(child, {...props});
      }
    }

    return <span {...props}>{children}</span>;
  }
}
