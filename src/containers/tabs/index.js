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
    className: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  getClassNames = () => {
    const {active} = this.props;

    return joinObjects(styles, {'tabs-panel': true, 'is-active': active});
  };

  render() {
    const {active, children, className, id} = this.props;
    let labelId = null;

    if (!isBlank(id)) {
      labelId = `${id}-label`;
    }

    return (
      <div
        {...this.props}
        aria-hidden={!active}
        aria-labelledby={labelId}
        className={cx(className, this.getClassNames())}
        role='tabpanel'
      >
        {children}
      </div>
    );
  }
}

export class TabsContent extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  getClassNames = () => joinObjects(styles, {'tabs-content': true});

  render() {
    const {children, className} = this.props;

    return (
      <div {...this.props} className={cx(className, this.getClassNames())}>
        {children}
      </div>
    );
  }
}

export class TabsTitle extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    containerClassName: PropTypes.string,
    containerStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSelect: PropTypes.func,
    panelId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  getClassNames = () => {
    const {active} = this.props;

    return joinObjects(styles, {'tabs-title': true, 'is-active': active});
  };

  handleClick = (event) => {
    const {eventKey, panelId, onSelect} = this.props;

    if (isBlank(panelId)) {
      event.preventDefault();
    }

    if (onSelect) {
      onSelect(eventKey);
    }
  };

  render() {
    const {active, children, containerClassName, containerStyle, panelId} = this.props;
    const href = `#${isBlank(panelId) ? '' : panelId}`;

    return (
      <li
        className={cx(containerClassName, this.getClassNames())}
        role='presentation'
        style={containerStyle}
      >
        <a
          {...this.props}
          aria-controls={panelId}
          aria-selected={active}
          href={href}
          onClick={this.handleClick}
          role='tab'
        >
          {children}
        </a>
      </li>
    );
  }
}

export class TabsHeader extends Component {
  static propTypes = {
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node,
    className: PropTypes.string,
    onSelect: PropTypes.func,
    vertical: PropTypes.bool
  };

  getClassNames = () => {
    const {vertical} = this.props;

    return joinObjects(styles, {tabs: true, vertical});
  };

  render() {
    const {activeKey, children, className, onSelect} = this.props;
    const newChildren = Children.map(children, (child) => {
      if (child.props && !isBlank(child.props.eventKey)) {
        return cloneElement(child, {
          active: activeKey === child.props.eventKey,
          onSelect
        });
      }

      return child;
    });

    return (
      <ul {...this.props} className={cx(className, this.getClassNames())}>
        {newChildren}
      </ul>
    );
  }
}

class TabsControlled extends Component {
  static propTypes = {
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node
  };

  render() {
    const {activeKey, children} = this.props;
    const headerChildren = Children.map(children, (child) => {
      let id = null;
      let panelId = null;

      if (child.props && !isBlank(child.props.id)) {
        panelId = child.props.id;
        id = `${panelId}-label`;
      }

      return (
        <TabsTitle {...(child.props ? child.props : {})} id={id} panelId={panelId}>
          {child.props ? child.props.title : null}
        </TabsTitle>
      );
    });
    const contentChildren = Children.map(children, (child) => {
      if (child.props && !isBlank(child.props.eventKey)) {
        return cloneElement(child, {active: activeKey === child.props.eventKey});
      }

      return child;
    });

    return (
      <div {...this.props}>
        <TabsHeader {...this.props}>
          {headerChildren}
        </TabsHeader>
        <TabsContent>
          {contentChildren}
        </TabsContent>
      </div>
    );
  }
}

export const Tabs = uncontrollable(TabsControlled, {activeKey: 'onSelect'});

Tabs.displayName = 'Tabs';
