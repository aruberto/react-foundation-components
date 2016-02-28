import React, { Component } from 'react';

export default class DefaultComponent extends Component {
  render() {
    return <div {...this.props}/>;
  }
}
