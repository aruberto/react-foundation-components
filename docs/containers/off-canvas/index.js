import React, { Component } from 'react';

import {
  OffCanvas,
  OffCanvasContent,
  OffCanvasContainer,
} from '../../../src/off-canvas';
import {
  TitleBar,
  TitleBarItem,
  TitleBarTitle,
  TitleBarMenuIcon,
} from '../../../src/title-bar';
import {
  TitleBar as FlexTitleBar,
  TitleBarItem as FlexTitleBarItem,
  TitleBarTitle as FlexTitleBarTitle,
  TitleBarMenuIcon as FlexTitleBarMenuIcon,
} from '../../../lib/title-bar-flex'; // eslint-disable-line import/no-unresolved
import { HideForScreenSize } from '../../../src/visibility';

export default class OffCanvasPage extends Component {
  state = {
    open: null,
  };

  handleClose = () => this.setState({ open: null });

  handleToggle = (position) => {
    const { open: prevOpen } = this.state;
    const open = prevOpen === position ? null : position;

    this.setState({ open });
  };

  handleToggleLeft = () => this.handleToggle('left');

  handleToggleRight = () => this.handleToggle('right');

  render() {
    const { open } = this.state;

    return (
      <OffCanvasContainer open={open}>
        <OffCanvas position="left" revealFor="large" style={{ position: 'absolute' }}>
          Left Sidebar
        </OffCanvas>
        <OffCanvas position="right" revealFor="xxlarge" style={{ position: 'absolute' }}>
          Right Sidebar
        </OffCanvas>
        <OffCanvasContent onContentBlockerClick={this.handleClose}>
          <TitleBar>
            <TitleBarItem position="left">
              <HideForScreenSize
                screenSize="large"
                componentClass={TitleBarMenuIcon}
                onClick={this.handleToggleLeft}
                open={open === 'left'}
              />
              <TitleBarTitle>Foundation</TitleBarTitle>
            </TitleBarItem>
            <TitleBarItem position="right">
              <HideForScreenSize
                screenSize="xxlarge"
                componentClass={TitleBarMenuIcon}
                onClick={this.handleToggleRight}
                open={open === 'right'}
              />
            </TitleBarItem>
          </TitleBar>
          <br />
          <FlexTitleBar>
            <FlexTitleBarItem position="left">
              <HideForScreenSize
                screenSize="large"
                componentClass={FlexTitleBarMenuIcon}
                onClick={this.handleToggleLeft}
                open={open === 'left'}
              />
              <FlexTitleBarTitle>Foundation</FlexTitleBarTitle>
            </FlexTitleBarItem>
            <FlexTitleBarItem position="right">
              <HideForScreenSize
                screenSize="xxlarge"
                componentClass={FlexTitleBarMenuIcon}
                onClick={this.handleToggleRight}
                open={open === 'right'}
              />
            </FlexTitleBarItem>
          </FlexTitleBar>
          <br />
          <div style={{ margin: '0 auto', width: '100px' }}>Main Content</div>
        </OffCanvasContent>
      </OffCanvasContainer>
    );
  }
}
