import React, {Component} from 'react';

import {Dropdown, HasDropdown, Button} from '../../../src';

const dropdownStyle = {position: 'relative', top: '20px', left: '50px'};

export default class DropdownPage extends Component {
  render() {
    return (
      <div>
        <Dropdown style={dropdownStyle}>I'm a dropdown!</Dropdown>
        <br/>
        <Dropdown size='tiny' style={dropdownStyle}>I'm a tiny dropdown!</Dropdown>
        <br/>
        <Dropdown size='small' style={dropdownStyle}>I'm a small dropdown!</Dropdown>
        <br/>
        <Dropdown size='large' style={dropdownStyle}>I'm a large dropdown!</Dropdown>
        <br/>
        <br/>
        <br/>
        <HasDropdown><Button>Toggle Dropdown</Button></HasDropdown>
      </div>
    );
  }
}
