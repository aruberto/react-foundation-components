import React, {Component, PropTypes, isValidElement} from 'react';
import classNames from 'classnames';

import style from './style.scss';
import {classNamesMapper} from '../util';

export default class Visibility extends Component {
  static propTypes = {
    children: PropTypes.node,
    hide: PropTypes.bool,
    hideForExtraExtraLarge: PropTypes.bool,
    hideForExtraExtraLargeOnly: PropTypes.bool,
    hideForExtraLarge: PropTypes.bool,
    hideForExtraLargeOnly: PropTypes.bool,
    hideForLandscape: PropTypes.bool,
    hideForLarge: PropTypes.bool,
    hideForLargeOnly: PropTypes.bool,
    hideForMedium: PropTypes.bool,
    hideForMediumOnly: PropTypes.bool,
    hideForPortrait: PropTypes.bool,
    hideForScreenReaderOnly: PropTypes.bool,
    hideForSmallOnly: PropTypes.bool,
    invisible: PropTypes.bool,
    showForExtraExtraLarge: PropTypes.bool,
    showForExtraExtraLargeOnly: PropTypes.bool,
    showForExtraLarge: PropTypes.bool,
    showForExtraLargeOnly: PropTypes.bool,
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
      hideForExtraExtraLarge,
      hideForExtraExtraLargeOnly,
      hideForExtraLarge,
      hideForExtraLargeOnly,
      hideForLarge,
      hideForLargeOnly,
      hideForMedium,
      hideForMediumOnly,
      hideForPortrait,
      hideForScreenReaderOnly,
      hideForSmallOnly,
      invisible,
      showForLandscape,
      showForExtraExtraLarge,
      showForExtraExtraLargeOnly,
      showForExtraLarge,
      showForExtraLargeOnly,
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
      'hide-for-xxlarge': hideForExtraExtraLarge,
      'hide-for-xxlarge-only': hideForExtraExtraLargeOnly,
      'hide-for-xlarge': hideForExtraLarge,
      'hide-for-xlarge-only': hideForExtraLargeOnly,
      'hide-for-large': hideForLarge,
      'hide-for-large-only': hideForLargeOnly,
      'hide-for-medium': hideForMedium,
      'hide-for-medium-only': hideForMediumOnly,
      'hide-for-portrait': hideForPortrait,
      'hide-for-small-only': hideForSmallOnly,
      invisible,
      'show-for-landscape': showForLandscape,
      'show-for-xxlarge': showForExtraExtraLarge,
      'show-for-xxlarge-only': showForExtraExtraLargeOnly,
      'show-for-xlarge': showForExtraLarge,
      'show-for-xlarge-only': showForExtraLargeOnly,
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

    if (isValidElement(children)) {
      const className = classNames(children.props.className, props.className);

      return React.cloneElement(children, {...props, className});
    }

    return <span {...props}>{children}</span>;
  }
}
