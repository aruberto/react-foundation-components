import React, { Component } from 'react';

import { Badge } from '../../../src';

export default class BadgePage extends Component {
  render() {
    return (
      <div>
        <Badge>1</Badge>
        <br/>
        <br/>
        <b aria-describedby="messageCount">Unread Messages</b>
        &nbsp;
        <Badge id="messageCount">12</Badge>
        <br/>
        <br/>
        <Badge color="secondary">2</Badge>
        &nbsp;
        <Badge color="success">3</Badge>
        &nbsp;
        <Badge color="alert">A</Badge>
        &nbsp;
        <Badge color="warning">B</Badge>
      </div>
    );
  }
}
