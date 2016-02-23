import React, { Component } from 'react';

import { Dropdown, HasDropdown, Button } from '../../../src';

const dropdownStyle = { position: 'relative', top: '20px', left: '50px' };

export default class DropdownPage extends Component {
  render() {
    return (
      <div>
        <Dropdown style={dropdownStyle}>I'm a dropdown!</Dropdown>
        <br/>
        <Dropdown size="tiny" style={dropdownStyle}>I'm a tiny dropdown!</Dropdown>
        <br/>
        <Dropdown size="small" style={dropdownStyle}>I'm a small dropdown!</Dropdown>
        <br/>
        <Dropdown size="large" style={dropdownStyle}>I'm a large dropdown!</Dropdown>
        <br/>
        <br/>
        <br/>
        <HasDropdown
          dropdown={
            <div>
              <label>Name<input placeholder="Kirk, James T." type="text"/></label>
              <br/>
              <label>Rank<input placeholder="Captain" type="text"/></label>
            </div>
          }
        >
          <Button>Toggle Dropdown</Button>
        </HasDropdown>
        <br/>
        <HasDropdown
          dropdown="Just some junk that needs to be said. Or not. Your choice."
          toggleClick={false}
          toggleHover
        >
          <Button>Hoverable Dropdown</Button>
        </HasDropdown>
        <br/>
        <HasDropdown
          dropdown="Just some junk that needs to be said. Or not. Your choice."
          toggleClick={false}
          toggleFocus
        >
          <Button tabIndex="1">Focusable Dropdown</Button>
        </HasDropdown>
        <br/>
        <HasDropdown
          closeOnClick
          dropdown="You can close me by clicking anywhere else on screen!"
        >
          <Button>Toggle Dropdown</Button>
        </HasDropdown>
        <br/>
        <HasDropdown
          dropdown="Just some junk that needs to be said. Or not. Your choice."
          dropdownPosition="top"
        >
          <Button>Top Dropdown</Button>
        </HasDropdown>
        <br/>
        <HasDropdown
          dropdown="Just some junk that needs to be said. Or not. Your choice."
          dropdownPosition="left"
        >
          <Button style={{ left: '300px', position: 'relative' }}>Left Dropdown</Button>
        </HasDropdown>
        <br/>
        <HasDropdown
          dropdown="Just some junk that needs to be said. Or not. Your choice."
          dropdownPosition="right"
        >
          <Button>Right Dropdown</Button>
        </HasDropdown>
        <br/>
        <HasDropdown
          dropdown="Just some junk that needs to be said. Or not. Your choice."
        >
          <Button id="myBtn">Toggle Dropdown With Id</Button>
        </HasDropdown>
      </div>
    );
  }
}
