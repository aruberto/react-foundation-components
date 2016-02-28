import React, { Component } from 'react';

import { TopBar, TopBarContent, TopBarItem, TopBarTitle } from '../../../src/top-bar';
import {
  TopBar as FlexTopBar,
  TopBarContent as FlexTopBarContent,
  TopBarItem as FlexTopBarItem,
  TopBarTitle as FlexTopBarTitle,
} from '../../../src/top-bar/flex';
import { Menu, MenuItem, MenuText } from '../../../src/menu';
import {
  Menu as FlexMenu,
  MenuItem as FlexMenuItem,
  MenuText as FlexMenuText,
} from '../../../src/menu/flex';
import { Button } from '../../../src/button';
import { MenuIcon } from '../../../src/menu-icon';
import { ShowForScreenSize, HideForScreenSize } from '../../../src/visibility';

export default class TopBarPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleToggle = () => this.setState({ show: !this.state.show });

  render() {
    return (
      <div>
        <TopBar>
          <TopBarTitle>
            <MenuText>Site Title</MenuText>
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
            <MenuText>Site Title</MenuText>
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
        <TopBar stack="medium">
          <TopBarTitle>
            <HideForScreenSize size="large">
              <MenuIcon dark onClick={this.handleToggle}/>
            </HideForScreenSize>
            <MenuText>Site Title</MenuText>
          </TopBarTitle>
          <ShowForScreenSize size={this.state.show ? null : 'large'}>
            <TopBarContent>
              <TopBarItem position="left">
                <Menu vertical horizontal="large">
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
          </ShowForScreenSize>
        </TopBar>
        <br/>
        <FlexTopBar>
          <FlexTopBarTitle>
            <FlexMenuText>Site Title</FlexMenuText>
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
            <FlexMenuText>Site Title</FlexMenuText>
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
        <FlexTopBar stack="medium">
          <FlexTopBarTitle>
            <HideForScreenSize size="large">
              <MenuIcon dark onClick={this.handleToggle}/>
            </HideForScreenSize>
            <FlexMenuText>Site Title</FlexMenuText>
          </FlexTopBarTitle>
          <ShowForScreenSize size={this.state.show ? null : 'large'}>
            <FlexTopBarContent>
              <FlexTopBarItem position="left">
                <FlexMenu vertical horizontal="large">
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
          </ShowForScreenSize>
        </FlexTopBar>
      </div>
    );
  }
}
