import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import isBlank from 'underscore.string/isBlank';

import styles from './styles.scss';
import joinObjects from '../../util/join-objects';
import Collapse from '../../transitions/collapse';

export class AccordionItem extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    contentClassName: PropTypes.string,
    contentStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.node,
    titleClassName: PropTypes.string,
    titleStyle: PropTypes.object // eslint-disable-line react/forbid-prop-types
  };

  getClassNames = () => {
    const {active} = this.props;

    return joinObjects(styles, {'accordion-item': true, 'is-active': active});
  };

  getTitleClassNames = () => joinObjects(styles, {'accordion-title': true});

  getContentClassNames = () => joinObjects(styles, {'accordion-content': true});

  handleExited = () => this.setState({exited: true});

  handleEnter = () => this.setState({exited: false});

  render() {
    const {
      active,
      children,
      className,
      contentClassName,
      contentStyle,
      id,
      title,
      titleClassName,
      titleStyle
    } = this.props;
    let labelId = null;
    let contentId = null;

    if (!isBlank(id)) {
      labelId = `${id}-label`;
      contentId = `${id}-content`;
    }

    return (
      <li {...this.props} className={cx(className, this.getClassNames())}>
        <a
          aria-controls={contentId}
          aria-expanded={active}
          aria-selected={active}
          className={cx(titleClassName, this.getTitleClassNames())}
          href='#'
          id={labelId}
          role='tab'
          style={titleStyle}
        >
          {title}
        </a>
        <Collapse in={active}>
          <div>
            <div
              aria-hidden={!active}
              aria-labelledby={labelId}
              className={cx(contentClassName, this.getContentClassNames())}
              id={contentId}
              role='tabpanel'
              style={{...contentStyle, display: 'block'}}
            >
              {children}
            </div>
          </div>
        </Collapse>
      </li>
    );
  }
}

export class Accordion extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  getClassNames = () => joinObjects(styles, {accordion: true});

  render() {
    const {
      children,
      className
    } = this.props;

    return (
      <ul {...this.props} className={cx(className, this.getClassNames())} role='tablist'>
        {children}
      </ul>
    );
  }
}
