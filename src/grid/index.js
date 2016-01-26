import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';

import style from './style.scss';
import {classNamesMapper} from '../util';

export class Row extends Component {
  static propTypes = {
    children: PropTypes.node,
    componentClass: elementType,
    expanded: PropTypes.bool
  };

  static defaultProps = {
    componentClass: 'div'
  };

  render() {
    const {children, componentClass: ComponentClass, expanded} = this.props;
    const componentClassNames = classNamesMapper(style, {
      row: true,
      expanded
    });

    return <ComponentClass className={classNames(componentClassNames)}>{children}</ComponentClass>;
  }
}
