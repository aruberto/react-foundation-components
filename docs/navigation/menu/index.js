import React, { Component } from 'react';

import { Menu, MenuItem } from '../../../src/navigation/menu';
import { Menu as FlexMenu, MenuItem as FlexMenuItem } from '../../../src/navigation/menu/flex';

export default class MediaObjectPage extends Component {
  render() {
    return (
      <div>
        <Menu>
          <MenuItem><a href="#">One</a></MenuItem>
          <MenuItem><a href="#">Two</a></MenuItem>
          <MenuItem><a href="#">Three</a></MenuItem>
          <MenuItem><a href="#">Four</a></MenuItem>
        </Menu>
        <br/>
        <Menu expanded>
          <MenuItem><a href="#">One</a></MenuItem>
          <MenuItem><a href="#">Two</a></MenuItem>
        </Menu>
        <Menu expanded>
          <MenuItem><a href="#">One</a></MenuItem>
          <MenuItem><a href="#">Two</a></MenuItem>
          <MenuItem><a href="#">Three</a></MenuItem>
        </Menu>
        <Menu expanded>
          <MenuItem><a href="#">One</a></MenuItem>
          <MenuItem><a href="#">Two</a></MenuItem>
          <MenuItem><a href="#">Three</a></MenuItem>
          <MenuItem><a href="#">Four</a></MenuItem>
        </Menu>
        <br/>
        <FlexMenu>
          <FlexMenuItem><a href="#">One</a></FlexMenuItem>
          <FlexMenuItem><a href="#">Two</a></FlexMenuItem>
          <FlexMenuItem><a href="#">Three</a></FlexMenuItem>
          <FlexMenuItem><a href="#">Four</a></FlexMenuItem>
        </FlexMenu>
      </div>
    );
  }
}
