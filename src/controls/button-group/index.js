import React, {Component, PropTypes, Children, cloneElement} from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import {COMPONENT_SIZES, COMPONENT_COLORS} from '../../util/constants';
import joinObjects from '../../util/join-objects';

const STACK_ALWAYS = 'always';
const STACK_FOR_SMALL = 'small';

export default class ButtonGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(COMPONENT_COLORS),
    expanded: PropTypes.bool,
    size: PropTypes.oneOf(COMPONENT_SIZES),
    stack: PropTypes.oneOf([STACK_ALWAYS, STACK_FOR_SMALL])
  };

  getClassNames = () => {
    const {color, expanded, size, stack} = this.props;

    return joinObjects(styles, {
      'button-group': true,
      [color]: COMPONENT_COLORS.includes(color),
      expanded,
      [size]: COMPONENT_SIZES.includes(size),
      stacked: stack === STACK_ALWAYS,
      'stacked-for-small': stack === STACK_FOR_SMALL
    });
  };

  getButtonClassNames = () => joinObjects(styles, {button: true});

  render() {
    const {className, children} = this.props;
    const childClassNames = this.getButtonClassNames();
    const newChildren = Children.map(
      children,
      (child) => cloneElement(child, {className: cx(child.props.className, childClassNames)})
    );

    return (
      <div {...this.props} className={cx(className, this.getClassNames())}>
        {newChildren}
      </div>
    );
  }
}
