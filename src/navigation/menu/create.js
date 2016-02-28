import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import DefaultComponent from '../../util/default-component';

export default function create(
  styles,
  FlexParent = DefaultComponent,
  FlexChild = DefaultComponent
) {
  class Menu extends Component {
    static propTypes = {
      className: PropTypes.string,
      expanded: PropTypes.bool,
    };

    render() {
      const { className, expanded } = this.props;
      const classNames = cx(
        className,
        styles.menu,
        {
          [styles.expanded]: expanded,
        }
      );

      return <FlexParent {...this.props} className={classNames} componentClass="ul"/>;
    }
  }

  class MenuItem extends Component {
    render() {
      return <FlexChild {...this.props} componentClass="li"/>;
    }
  }

  return { Menu, MenuItem };
}
