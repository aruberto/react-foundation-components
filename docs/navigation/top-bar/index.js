import React, { Component } from 'react';

import { TopBar, TopBarContent, TopBarItem, TopBarTitle } from '../../../src/navigation/top-bar';
import {
  TopBar as FlexTopBar,
  TopBarContent as FlexTopBarContent,
  TopBarItem as FlexTopBarItem,
  TopBarTitle as FlexTopBarTitle,
} from '../../../src/navigation/top-bar/flex';
import { Menu, MenuItem } from '../../../src/navigation/menu';
import { Menu as FlexMenu, MenuItem as FlexMenuItem } from '../../../src/navigation/menu/flex';
import { Button } from '../../../src/controls/button';

export default class TopBarPage extends Component {
  render() {
    return (
      <div>
        <TopBar>
          <TopBarTitle>
            <h4><strong>Site Title</strong></h4>
          </TopBarTitle>
          <TopBarContent>
            <TopBarItem position="left">
              <Menu>
                <MenuItem><a href="#">One</a></MenuItem>
                <MenuItem><a href="#">Two</a></MenuItem>
                <MenuItem><a href="#">Three</a></MenuItem>
              </Menu>
            </TopBarItem>
            <TopBarItem position="right">
              <Menu>
                <MenuItem><input type="search" placeholder="Search"/></MenuItem>
                <MenuItem><Button>Search</Button></MenuItem>
              </Menu>
            </TopBarItem>
          </TopBarContent>
        </TopBar>
        <br/>
        <TopBar stack="large">
          <TopBarTitle>
            <h4><strong>Site Title</strong></h4>
          </TopBarTitle>
          <TopBarContent>
            <TopBarItem position="left">
              <Menu>
                <MenuItem><a href="#">One</a></MenuItem>
                <MenuItem><a href="#">Two</a></MenuItem>
                <MenuItem><a href="#">Three</a></MenuItem>
              </Menu>
            </TopBarItem>
            <TopBarItem position="right">
              <Menu>
                <MenuItem><input type="search" placeholder="Search"/></MenuItem>
                <MenuItem><Button>Search</Button></MenuItem>
              </Menu>
            </TopBarItem>
          </TopBarContent>
        </TopBar>
        <br/>
        <FlexTopBar>
          <FlexTopBarTitle>
            <h4><strong>Site Title</strong></h4>
          </FlexTopBarTitle>
          <FlexTopBarContent>
            <FlexTopBarItem position="left">
              <FlexMenu>
                <FlexMenuItem><a href="#">One</a></FlexMenuItem>
                <FlexMenuItem><a href="#">Two</a></FlexMenuItem>
                <FlexMenuItem><a href="#">Three</a></FlexMenuItem>
              </FlexMenu>
            </FlexTopBarItem>
            <FlexTopBarItem position="right">
              <FlexMenu>
                <FlexMenuItem><input type="search" placeholder="Search"/></FlexMenuItem>
                <FlexMenuItem><Button>Search</Button></FlexMenuItem>
              </FlexMenu>
            </FlexTopBarItem>
          </FlexTopBarContent>
        </FlexTopBar>
        <br/>
        <FlexTopBar stack="large">
          <FlexTopBarTitle>
            <h4><strong>Site Title</strong></h4>
          </FlexTopBarTitle>
          <FlexTopBarContent>
            <FlexTopBarItem position="left">
              <FlexMenu>
                <FlexMenuItem><a href="#">One</a></FlexMenuItem>
                <FlexMenuItem><a href="#">Two</a></FlexMenuItem>
                <FlexMenuItem><a href="#">Three</a></FlexMenuItem>
              </FlexMenu>
            </FlexTopBarItem>
            <FlexTopBarItem position="right">
              <FlexMenu>
                <FlexMenuItem><input type="search" placeholder="Search"/></FlexMenuItem>
                <FlexMenuItem><Button>Search</Button></FlexMenuItem>
              </FlexMenu>
            </FlexTopBarItem>
          </FlexTopBarContent>
        </FlexTopBar>
      </div>
    );
  }
}
