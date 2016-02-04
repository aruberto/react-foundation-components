import React, {Component, PropTypes, Children, cloneElement} from 'react';
import cx from 'classnames';
import uncontrollable from 'uncontrollable/batching';
import isBlank from 'underscore.string/isBlank';

import styles from './styles.scss';
import joinObjects from '../../util/join-objects';

export class Tab extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string
  };

  getClassNames = () => {
    const {active} = this.props;

    return joinObjects(styles, {'tabs-panel': true, 'is-active': active});
  };

  render() {
    const {children, className} = this.props;

    return (
      <div {...this.props} className={cx(className, this.getClassNames())}>
        <div role='tabpanel'>
          {children}
        </div>
      </div>
    );
  }
}

export class TabTitle extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSelect: PropTypes.func
  };

  getClassNames = () => joinObjects(styles, {'tabs-title': true});

  handleClick = (event) => {
    const {eventKey, onSelect} = this.props;

    event.preventDefault();

    if (onSelect) {
      onSelect(eventKey);
    }
  };

  render() {
    const {children, className} = this.props;

    return (
      <li {...this.props} className={cx(className, this.getClassNames())} role='presentation'>
        <a href='#' onClick={this.handleClick} role='tab'>
          {children}
        </a>
      </li>
    );
  }
}

class TabsControlled extends Component {
  static propTypes = {
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node,
    onSelect: PropTypes.func,
    vertical: PropTypes.bool
  };

  getTabsClassNames = () => {
    const {vertical} = this.props;

    return joinObjects(styles, {tabs: true, vertical});
  };

  getTabsContentClassNames = () => joinObjects(styles, {'tabs-content': true});

  render() {
    const {activeKey, children, onSelect} = this.props;
    const titleChildren = Children.map(children, (child) =>
      <TabTitle {...(child.props ? child.props : {})} onSelect={onSelect}>
        {child.props ? child.props.title : null}
      </TabTitle>
    );
    const contentChildren = Children.map(children, (child) => {
      if (child.props && !isBlank(child.props.eventKey)) {
        return cloneElement(child, {active: activeKey === child.props.eventKey});
      }

      return child;
    });

    return (
      <div {...this.props}>
        <ul className={cx(this.getTabsClassNames())}>
          {titleChildren}
        </ul>
        <div className={cx(this.getTabsContentClassNames())}>
          {contentChildren}
        </div>
      </div>
    );
  }
}

export const Tabs = uncontrollable(TabsControlled, {activeKey: 'onSelect'});

Tabs.displayName = 'Tabs';
