import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import './docs.scss';
import {
  OffCanvas,
  OffCanvasContent,
  OffCanvasContainer,
} from '../src/off-canvas';
import {
  TitleBar,
  TitleBarItem,
  TitleBarTitle,
  TitleBarMenuIcon,
} from '../lib/title-bar-flex'; // eslint-disable-line import/no-unresolved
import { Menu, MenuItem } from '../lib/menu-flex'; // eslint-disable-line import/no-unresolved
import { HideForScreenSize } from '../src/visibility';

import GridPage from './general/grid';
import FlexGridPage from './general/grid-flex';
import FormsPage from './general/forms';
import VisibilityPage from './general/visibility';
import FloatPage from './general/float';
import FlexPage from './general/flex';
import BaseTypographyPage from './typography/base';
import PrintPage from './typography/print';
import TypographyHelpersPage from './typography/helpers';
import TextAlignmentPage from './typography/text-alignment';
import ButtonPage from './controls/button';
import ButtonGroupPage from './controls/button-group';
import CloseButtonPage from './controls/close-button';
import SwitchPage from './controls/switch';
import MenuPage from './navigation/menu';
import TopBarPage from './navigation/top-bar';
import PaginationPage from './navigation/pagination';
import BreadcrumbPage from './navigation/breadcrumb';
import AccordionPage from './containers/accordion';
import CalloutPage from './containers/callout';
import DropdownPage from './containers/dropdown';
import MediaObjectPage from './containers/media-object';
import OffCanvasPage from './containers/off-canvas';
import RevealPage from './containers/reveal';
import TablePage from './containers/table';
import TabsPage from './containers/tabs';
import BadgePage from './media/badge';
import FlexVideoPage from './media/flex-video';
import LabelPage from './media/label';
import ProgressBarPage from './media/progress-bar';
import ThumbnailPage from './media/thumbnail';
import TooltipPage from './media/tooltip';
import ToggleSwitchPage from './custom/toggle-switch';

function scrollToTop() {
  document.getElementById('app-content').scrollTop = 0;
}

class HomePage extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  state = {
    leftNavOpen: false,
  };

  handleClose = () => this.setState({ leftNavOpen: false });

  handleToggle = () => {
    const { leftNavOpen } = this.state;

    this.setState({ leftNavOpen: !leftNavOpen });
  };

  render() {
    const { leftNavOpen } = this.state;
    const open = leftNavOpen ? 'left' : null;

    return (
      <OffCanvasContainer id="app-content" open={open}>
        <OffCanvas position="left" revealFor="large">
          <Menu vertical>
            <MenuItem text>General</MenuItem>
            <MenuItem>
              <Menu nested vertical>
                <MenuItem>
                  <Link to="/general/grid">Grid</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/general/grid/flex">Flex Grid</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/general/forms">Forms</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/general/visibility">Visibility</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/general/float">Float</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/general/flex">Flexbox</Link>
                </MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem text>Typography</MenuItem>
            <MenuItem>
              <Menu nested vertical>
                <MenuItem>
                  <Link to="/typography/base">Base Typography</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/typography/print">Print</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/typography/helpers">Typography Helpers</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/typography/text-alignment">Text Alignment</Link>
                </MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem text>Controls</MenuItem>
            <MenuItem>
              <Menu nested vertical>
                <MenuItem>
                  <Link to="/controls/button">Button</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/controls/button-group">Button Group</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/controls/close-button">Close Button</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/controls/switch">Switch</Link>
                </MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem text>Navigation</MenuItem>
            <MenuItem>
              <Menu nested vertical>
                <MenuItem>
                  <Link to="/navigation/menu">Menu</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/navigation/top-bar">Top Bar</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/navigation/pagination">Pagination</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/navigation/breadcrumb">Breadcrumb</Link>
                </MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem text>Containers</MenuItem>
            <MenuItem>
              <Menu nested vertical>
                <MenuItem>
                  <Link to="/containers/accordion">Accordion</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/containers/callout">Callout</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/containers/dropdown">Dropdown</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/containers/media-object">Media Object</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/containers/off-canvas">Off Canvas</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/containers/reveal">Reveal</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/containers/table">Table</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/containers/tabs">Tabs</Link>
                </MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem text>Media</MenuItem>
            <MenuItem>
              <Menu nested vertical>
                <MenuItem>
                  <Link to="/media/badge">Badge</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/media/flex-video">Flex Video</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/media/label">Label</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/media/progress-bar">Progress Bar</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/media/thumbnail">Thumbnail</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/media/tooltip">Tooltip</Link>
                </MenuItem>
              </Menu>
            </MenuItem>
            <MenuItem text>Custom</MenuItem>
            <MenuItem>
              <Menu nested vertical>
                <MenuItem>
                  <Link to="/custom/toggle-switch">Toggle Switch</Link>
                </MenuItem>
              </Menu>
            </MenuItem>
          </Menu>
        </OffCanvas>
        <OffCanvasContent onContentBlockerClick={this.handleClose}>
          <TitleBar>
            <TitleBarItem position="left">
              <HideForScreenSize
                screenSize="large"
                componentClass={TitleBarMenuIcon}
                onClick={this.handleToggle}
                open={open === 'left'}
              />
              <TitleBarTitle>React Foundation Components</TitleBarTitle>
            </TitleBarItem>
          </TitleBar>
          <br />
          {this.props.children}
        </OffCanvasContent>
      </OffCanvasContainer>
    );
  }
}

const Demo = () => (
  <Router history={hashHistory} onUpdate={scrollToTop}>
    <Route component={HomePage} path="/">
      <Route component={GridPage} path="/general/grid" />
      <Route component={FlexGridPage} path="/general/grid/flex" />
      <Route component={FormsPage} path="/general/forms" />
      <Route component={VisibilityPage} path="/general/visibility" />
      <Route component={FloatPage} path="/general/float" />
      <Route component={FlexPage} path="/general/flex" />
      <Route component={BaseTypographyPage} path="/typography/base" />
      <Route component={PrintPage} path="/typography/print" />
      <Route component={TypographyHelpersPage} path="/typography/helpers" />
      <Route component={TextAlignmentPage} path="/typography/text-alignment" />
      <Route component={ButtonPage} path="/controls/button" />
      <Route component={ButtonGroupPage} path="/controls/button-group" />
      <Route component={CloseButtonPage} path="/controls/close-button" />
      <Route component={SwitchPage} path="/controls/switch" />
      <Route component={MenuPage} path="/navigation/menu" />
      <Route component={TopBarPage} path="/navigation/top-bar" />
      <Route component={PaginationPage} path="/navigation/pagination" />
      <Route component={BreadcrumbPage} path="/navigation/breadcrumb" />
      <Route component={AccordionPage} path="/containers/accordion" />
      <Route component={CalloutPage} path="/containers/callout" />
      <Route component={DropdownPage} path="/containers/dropdown" />
      <Route component={MediaObjectPage} path="/containers/media-object" />
      <Route component={OffCanvasPage} path="/containers/off-canvas" />
      <Route component={RevealPage} path="/containers/reveal" />
      <Route component={TablePage} path="/containers/table" />
      <Route component={TabsPage} path="/containers/tabs" />
      <Route component={BadgePage} path="/media/badge" />
      <Route component={FlexVideoPage} path="/media/flex-video" />
      <Route component={LabelPage} path="/media/label" />
      <Route component={ProgressBarPage} path="/media/progress-bar" />
      <Route component={ThumbnailPage} path="/media/thumbnail" />
      <Route component={TooltipPage} path="/media/tooltip" />
      <Route component={ToggleSwitchPage} path="/custom/toggle-switch" />
    </Route>
  </Router>
);

ReactDOM.render(<Demo />, document.getElementById('app'));
