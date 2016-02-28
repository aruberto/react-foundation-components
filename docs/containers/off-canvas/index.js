import React, { Component } from 'react';

import {
  OffCanvas,
  OffCanvasContent,
  OffCanvasContainer,
} from '../../../src/containers/off-canvas';
import {
  TitleBar,
  TitleBarItem,
  TitleBarTitle,
  TitleBarMenuIcon,
} from '../../../src/containers/title-bar';
import {
  TitleBar as FlexTitleBar,
  TitleBarItem as FlexTitleBarItem,
  TitleBarTitle as FlexTitleBarTitle,
  TitleBarMenuIcon as FlexTitleBarMenuIcon,
} from '../../../src/containers/title-bar/flex';
import { HideForScreenSize } from '../../../src/general/visibility';

export default class OffCanvasPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: null,
    };
  }

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
        <OffCanvas position="left" revealForSize="large" style={{ position: 'absolute' }}>
          Left Sidebar
        </OffCanvas>
        <OffCanvas position="right" revealForSize="xxlarge" style={{ position: 'absolute' }}>
          Right Sidebar
        </OffCanvas>
        <OffCanvasContent onContentBlockerClick={this.handleClose}>
          <TitleBar>
            <TitleBarItem position="left">
              <HideForScreenSize size="large">
                <TitleBarMenuIcon onClick={this.handleToggleLeft} open={open === 'left'}/>
              </HideForScreenSize>
              <TitleBarTitle>Foundation</TitleBarTitle>
            </TitleBarItem>
            <TitleBarItem position="right">
              <HideForScreenSize size="xxlarge">
                <TitleBarMenuIcon onClick={this.handleToggleRight} open={open === 'right'}/>
              </HideForScreenSize>
            </TitleBarItem>
          </TitleBar>
          <br/>
          <FlexTitleBar>
            <FlexTitleBarItem position="left">
              <HideForScreenSize size="large">
                <FlexTitleBarMenuIcon onClick={this.handleToggleLeft} open={open === 'left'}/>
              </HideForScreenSize>
              <FlexTitleBarTitle>Foundation</FlexTitleBarTitle>
            </FlexTitleBarItem>
            <FlexTitleBarItem position="right">
              <HideForScreenSize size="xxlarge">
                <FlexTitleBarMenuIcon onClick={this.handleToggleRight} open={open === 'right'}/>
              </HideForScreenSize>
            </FlexTitleBarItem>
          </FlexTitleBar>
          <br/>
          <div style={{ margin: '0 auto', width: '100px' }}>Main Content</div>
        </OffCanvasContent>
      </OffCanvasContainer>
    );
  }
}
