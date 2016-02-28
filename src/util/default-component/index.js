import React, { Component } from 'react';
import elementType from 'react-prop-types/lib/elementType';

export default class DefaultComponent extends Component {
  static propTypes = {
    componentClass: elementType,
  };

  static defaultProps = {
    componentClass: 'div',
  };

  render() {
    const { componentClass: ComponentClass } = this.props;

    return <ComponentClass {...this.props}/>;
  }
}
