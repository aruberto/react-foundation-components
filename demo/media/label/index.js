import React, {Component} from 'react';

import {Label} from '../../../src';

export default class LabelPage extends Component {
  render() {
    return (
      <div>
        <Label>Default Label</Label>
        <br/>
        <br/>
        <p aria-describedby='emailLabel'>
          Re: re: re: you won't believe what's in this email!
        </p>
        <Label id='emailLabel'>High Priority</Label>
        <br/>
        <br/>
        <p aria-describedby='emailLabel1 emailLabel2'>
          Re: re: re: you won't believe what's in this email!
        </p>
        <Label id='emailLabel1'>High Priority</Label>
        &nbsp;
        <Label id='emailLabel2'>Unread</Label>
        <br/>
        <br/>
        <Label color='secondary'>Secondary Label</Label>
        &nbsp;
        <Label color='success'>Success Label</Label>
        &nbsp;
        <Label color='alert'>Alert Label</Label>
        &nbsp;
        <Label color='warning'>Warning Label</Label>
      </div>
    );
  }
}
