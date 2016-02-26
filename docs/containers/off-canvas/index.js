import React, { Component } from 'react';

import {
  OffCanvas,
  OffCanvasContent,
  OffCanvasContainer,
  TitleBar,
  TitleBarItem,
  TitleBarTitle,
  TitleBarMenuIcon,
  HideForScreenSize,
} from '../../../src';

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
            <HideForScreenSize size="large">
              <TitleBarItem position="left">
                <TitleBarMenuIcon onClick={this.handleToggleLeft} open={open === 'left'}/>
              </TitleBarItem>
            </HideForScreenSize>
            <TitleBarTitle>Foundation</TitleBarTitle>
            <HideForScreenSize size="xxlarge">
              <TitleBarItem position="right">
                <TitleBarMenuIcon onClick={this.handleToggleRight} open={open === 'right'}/>
              </TitleBarItem>
            </HideForScreenSize>
          </TitleBar>
          <br/>
          <div style={{ margin: '0 auto', width: '100px' }}>Main Content</div>
        </OffCanvasContent>
      </OffCanvasContainer>
    );
  }
}
