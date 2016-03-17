import React from 'react';

import { Dropdown, LinkWithDropdown } from '../../../src/dropdown';
import { Button } from '../../../src/button';

const dropdownStyle = { position: 'relative', top: '20px', left: '50px' };

const DropdownPage = () => (
  <div>
    <Dropdown style={dropdownStyle}>I'm a dropdown!</Dropdown>
    <br />
    <Dropdown size="tiny" style={dropdownStyle}>I'm a tiny dropdown!</Dropdown>
    <br />
    <Dropdown size="small" style={dropdownStyle}>I'm a small dropdown!</Dropdown>
    <br />
    <Dropdown size="large" style={dropdownStyle}>I'm a large dropdown!</Dropdown>
    <br />
    <br />
    <br />
    <LinkWithDropdown
      dropdownContent={
        <div>
          <label>Name<input placeholder="Kirk, James T." type="text" /></label>
          <br />
          <label>Rank<input placeholder="Captain" type="text" /></label>
        </div>
      }
    >
      <Button dropdown>Toggle Dropdown</Button>
    </LinkWithDropdown>
    <br />
    <LinkWithDropdown
      dropdownContent="Just some junk that needs to be said. Or not. Your choice."
      triggerClick={false}
      triggerHover
    >
      <Button dropdown>Hoverable Dropdown</Button>
    </LinkWithDropdown>
    <br />
    <LinkWithDropdown
      dropdownContent="Just some junk that needs to be said. Or not. Your choice."
      triggerClick={false}
      triggerFocus
    >
      <Button dropdown tabIndex="1">Focusable Dropdown</Button>
    </LinkWithDropdown>
    <br />
    <LinkWithDropdown
      closeOnClickOutside
      dropdownContent="You can close me by clicking anywhere else on screen!"
    >
      <Button dropdown>Toggle Dropdown</Button>
    </LinkWithDropdown>
    <br />
    <LinkWithDropdown
      dropdownContent="Just some junk that needs to be said. Or not. Your choice."
      dropdownPosition="top"
    >
      <Button dropdown>Top Dropdown</Button>
    </LinkWithDropdown>
    <br />
    <LinkWithDropdown
      dropdownContent="Just some junk that needs to be said. Or not. Your choice."
      dropdownPosition="left"
    >
      <Button dropdown style={{ left: '300px', position: 'relative' }}>Left Dropdown</Button>
    </LinkWithDropdown>
    <br />
    <LinkWithDropdown
      dropdownContent="Just some junk that needs to be said. Or not. Your choice."
      dropdownPosition="right"
    >
      <Button dropdown>Right Dropdown</Button>
    </LinkWithDropdown>
    <br />
    <LinkWithDropdown
      dropdownContent="Just some junk that needs to be said. Or not. Your choice."
      dropdownId="myDropdown"
    >
      <Button dropdown id="myButton">Toggle Dropdown With Id</Button>
    </LinkWithDropdown>
  </div>
);

export default DropdownPage;
