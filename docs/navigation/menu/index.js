import React from 'react';

import { Menu, MenuItem } from '../../../src/menu';
import {
  Menu as FlexMenu,
  MenuItem as FlexMenuItem,
} from '../../../lib/menu-flex'; // eslint-disable-line import/no-unresolved

const iconStyle = {
  fontStyle: 'normal',
};

const MenuPage = () => (
  <div>
    <Menu>
      <MenuItem><a href="#">One</a></MenuItem>
      <MenuItem><a href="#">Two</a></MenuItem>
      <MenuItem><a href="#">Three</a></MenuItem>
      <MenuItem><a href="#">Four</a></MenuItem>
    </Menu>
    <Menu horizontalAlignment="right">
      <MenuItem><a href="#">One</a></MenuItem>
      <MenuItem><a href="#">Two</a></MenuItem>
      <MenuItem><a href="#">Three</a></MenuItem>
      <MenuItem><a href="#">Four</a></MenuItem>
    </Menu>
    <Menu horizontalAlignment="center">
      <MenuItem><a href="#">One</a></MenuItem>
      <MenuItem><a href="#">Two</a></MenuItem>
      <MenuItem><a href="#">Three</a></MenuItem>
      <MenuItem><a href="#">Four</a></MenuItem>
    </Menu>
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
    <Menu vertical horizontal="medium">
      <MenuItem><a href="#">One</a></MenuItem>
      <MenuItem><a href="#">Two</a></MenuItem>
      <MenuItem><a href="#">Three</a></MenuItem>
      <MenuItem><a href="#">Four</a></MenuItem>
    </Menu>
    <Menu horizontal vertical="medium">
      <MenuItem><a href="#">One</a></MenuItem>
      <MenuItem><a href="#">Two</a></MenuItem>
      <MenuItem><a href="#">Three</a></MenuItem>
      <MenuItem><a href="#">Four</a></MenuItem>
    </Menu>
    <Menu simple>
      <MenuItem><a href="#">One</a></MenuItem>
      <MenuItem><a href="#">Two</a></MenuItem>
      <MenuItem><a href="#">Three</a></MenuItem>
      <MenuItem><a href="#">Four</a></MenuItem>
    </Menu>
    <Menu vertical>
      <MenuItem>
        <a href="#">One</a>
        <Menu nested vertical>
          <MenuItem><a href="#">One</a></MenuItem>
          <MenuItem><a href="#">Two</a></MenuItem>
          <MenuItem><a href="#">Three</a></MenuItem>
          <MenuItem><a href="#">Four</a></MenuItem>
        </Menu>
      </MenuItem>
      <MenuItem><a href="#">Two</a></MenuItem>
      <MenuItem><a href="#">Three</a></MenuItem>
      <MenuItem><a href="#">Four</a></MenuItem>
    </Menu>
    <Menu>
      <MenuItem active><a href="#">Home</a></MenuItem>
      <MenuItem><a href="#">About</a></MenuItem>
      <MenuItem><a href="#">Nachos</a></MenuItem>
    </Menu>
    <Menu>
      <MenuItem text>Site Title</MenuItem>
      <MenuItem><a href="#">One</a></MenuItem>
      <MenuItem><a href="#">Two</a></MenuItem>
      <MenuItem><a href="#">Three</a></MenuItem>
    </Menu>
    <Menu>
      <MenuItem><a href="#"><i style={iconStyle}>&#9776;</i> One</a></MenuItem>
      <MenuItem><a href="#"><i style={iconStyle}>&#9776;</i> Two</a></MenuItem>
      <MenuItem><a href="#"><i style={iconStyle}>&#9776;</i> Three</a></MenuItem>
      <MenuItem><a href="#"><i style={iconStyle}>&#9776;</i> Four</a></MenuItem>
    </Menu>
    <Menu iconTop>
      <MenuItem><a href="#"><i style={iconStyle}>&#9776;</i> One</a></MenuItem>
      <MenuItem><a href="#"><i style={iconStyle}>&#9776;</i> Two</a></MenuItem>
      <MenuItem><a href="#"><i style={iconStyle}>&#9776;</i> Three</a></MenuItem>
      <MenuItem><a href="#"><i style={iconStyle}>&#9776;</i> Four</a></MenuItem>
    </Menu>
    <FlexMenu>
      <FlexMenuItem><a href="#">One</a></FlexMenuItem>
      <FlexMenuItem><a href="#">Two</a></FlexMenuItem>
      <FlexMenuItem><a href="#">Three</a></FlexMenuItem>
      <FlexMenuItem><a href="#">Four</a></FlexMenuItem>
    </FlexMenu>
    <FlexMenu horizontalAlignment="right">
      <FlexMenuItem><a href="#">One</a></FlexMenuItem>
      <FlexMenuItem><a href="#">Two</a></FlexMenuItem>
      <FlexMenuItem><a href="#">Three</a></FlexMenuItem>
      <FlexMenuItem><a href="#">Four</a></FlexMenuItem>
    </FlexMenu>
    <FlexMenu horizontalAlignment="center">
      <FlexMenuItem><a href="#">One</a></FlexMenuItem>
      <FlexMenuItem><a href="#">Two</a></FlexMenuItem>
      <FlexMenuItem><a href="#">Three</a></FlexMenuItem>
      <FlexMenuItem><a href="#">Four</a></FlexMenuItem>
    </FlexMenu>
  </div>
);

export default MenuPage;
