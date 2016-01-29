import React, {Component} from 'react';

import {Badge} from '../../../src';

export default class BadgePage extends Component {
  render() {
    return (
      <div>
        <Badge>1</Badge>
        <br/>
        <b aria-describedby='messageCount'>Unread Messages</b><Badge id='messageCount'>12</Badge>
        <br/>
        <Badge color='secondary'>2</Badge>
        <Badge color='success'>3</Badge>
        <Badge color='alert'>A</Badge>
        <Badge color='warning'>B</Badge>
      </div>
    );
  }
}
