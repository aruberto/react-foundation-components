import {Component, PropTypes, Children} from 'react';

import './style.scss';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const {children} = this.props;

    return Children.only(children);
  }
}
