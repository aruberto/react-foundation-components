import React, { Component } from 'react';

import { OffCanvas, TitleBar, TitleBarItem, TitleBarTitle, MenuIcon } from '../../../src';

const MAX_HEIGHT_STYLE = { height: '100%' };

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
      <div style={{ height: '800px' }}>
        <TitleBar>
          <TitleBarItem position="left">
            <MenuIcon onClick={this.handleToggleLeft} open={open === 'left'}/>
          </TitleBarItem>
          <TitleBarTitle>Foundation</TitleBarTitle>
          <TitleBarItem position="right">
            <MenuIcon onClick={this.handleToggleRight} open={open === 'right'}/>
          </TitleBarItem>
        </TitleBar>
        <br/>
        <OffCanvas
          contentStyle={MAX_HEIGHT_STYLE}
          innerStyle={MAX_HEIGHT_STYLE}
          leftContent="Left Sidebar"
          leftRevealForSize="large"
          leftStyle={MAX_HEIGHT_STYLE}
          onClose={this.handleClose}
          open={open}
          rightContent="Right Sidebar"
          rightRevealForSize="xxlarge"
          rightStyle={MAX_HEIGHT_STYLE}
          style={MAX_HEIGHT_STYLE}
        >
          <div style={{ margin: '0 auto', width: '100px' }}>Main Content</div>
        </OffCanvas>
      </div>
    );
  }
}
