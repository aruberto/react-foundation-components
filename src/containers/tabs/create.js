import React, { Component, PropTypes, Children, cloneElement, isValidElement } from 'react';
import cx from 'classnames';
import uncontrollable from 'uncontrollable/batching';
import isBlank from 'underscore.string/isBlank';

export default function create(styles) {
  class Tab extends Component {
    static propTypes = {
      active: PropTypes.bool,
      className: PropTypes.string,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    render() {
      const { active, className, id } = this.props;
      const classNames = cx(
        className,
        styles['tabs-panel'],
        {
          [styles['is-active']]: active,
        }
      );
      let labelId = null;

      if (!isBlank(id)) {
        labelId = `${id}-label`;
      }

      return (
        <div
          {...this.props}
          aria-hidden={!active}
          aria-labelledby={labelId}
          className={classNames}
          role="tabpanel"
        />
      );
    }
  }

  class TabsContent extends Component {
    static propTypes = {
      className: PropTypes.string,
    };

    render() {
      const { className } = this.props;
      const classNames = cx(className, styles['tabs-content']);

      return (
        <div {...this.props} className={classNames}/>
      );
    }
  }

  class TabTitle extends Component {
    static propTypes = {
      active: PropTypes.bool,
      containerClassName: PropTypes.string,
      containerStyle: PropTypes.object,
      eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      onSelect: PropTypes.func,
      panelId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    handleClick = (event) => {
      const { eventKey, panelId, onSelect } = this.props;

      if (isBlank(panelId)) {
        event.preventDefault();
      }

      if (onSelect) {
        onSelect(eventKey);
      }
    };

    render() {
      const { active, containerClassName, containerStyle, panelId } = this.props;
      const classNames = cx(
        containerClassName,
        styles['tabs-title'],
        {
          [styles['is-active']]: active,
        }
      );
      const href = `#${isBlank(panelId) ? '' : panelId}`;

      return (
        <li
          className={classNames}
          role="presentation"
          style={containerStyle}
        >
          <a
            {...this.props}
            aria-controls={panelId}
            aria-selected={active}
            href={href}
            onClick={this.handleClick}
            role="tab"
          />
        </li>
      );
    }
  }

  class TabsHeader extends Component {
    static propTypes = {
      activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      children: PropTypes.node,
      className: PropTypes.string,
      onSelect: PropTypes.func,
      vertical: PropTypes.bool,
    };

    render() {
      const { activeKey, children, className, onSelect, vertical } = this.props;
      const classNames = cx(
        className,
        styles.tabs,
        {
          [styles.vertical]: vertical,
        }
      );
      const newChildren = Children.map(children, (child) => {
        if (isValidElement(child) && !isBlank(child.props.eventKey)) {
          return cloneElement(child, {
            active: activeKey === child.props.eventKey,
            onSelect,
          });
        }

        return child;
      });

      return (
        <ul {...this.props} className={classNames}>
          {newChildren}
        </ul>
      );
    }
  }

  class TabsControlled extends Component {
    static propTypes = {
      activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      children: PropTypes.node,
    };

    render() {
      const { activeKey, children } = this.props;
      const headerChildren = Children.map(children, (child) => {
        let id = null;
        let panelId = null;

        if (isValidElement(child) && !isBlank(child.props.id)) {
          panelId = child.props.id;
          id = `${panelId}-label`;
        }

        return (
          <TabTitle {...(child.props ? child.props : {})} id={id} panelId={panelId}>
            {child.props ? child.props.title : null}
          </TabTitle>
        );
      });
      const contentChildren = Children.map(children, (child) => {
        if (isValidElement(child) && !isBlank(child.props.eventKey)) {
          return cloneElement(
            child,
            {
              active: activeKey === child.props.eventKey,
            }
          );
        }

        return child;
      });

      return (
        <div>
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

  const Tabs = uncontrollable(TabsControlled, { activeKey: 'onSelect' });

  return { Tab, TabTitle, TabsContent, TabsHeader, Tabs };
}
