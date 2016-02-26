import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import './docs.scss';
import {
  OffCanvas,
  OffCanvasContent,
  OffCanvasContainer,
  TitleBar,
  TitleBarItem,
  TitleBarTitle,
  TitleBarMenuIcon,
  HideForScreenSize,
} from '../src';

import GridPage from './general/grid';
import FlexGridPage from './general/grid/flex';
import VisibilityPage from './general/visibility';
import FloatPage from './general/float';
import BaseTypographyPage from './typography/base';
import TypographyHelpersPage from './typography/helpers';
import TextAlignmentPage from './typography/text-alignment';
import ButtonPage from './controls/button';
import ButtonGroupPage from './controls/button-group';
import CloseButtonPage from './controls/close-button';
import SwitchPage from './controls/switch';
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

class HomePage extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);

    this.state = {
      leftNavOpen: false,
    };
  }

  handleClose = () => this.setState({ leftNavOpen: false });

  handleToggle = () => {
    const { leftNavOpen } = this.state;

    this.setState({ leftNavOpen: !leftNavOpen });
  };

  render() {
    const { leftNavOpen } = this.state;
    const open = leftNavOpen ? 'left' : null;

    return (
      <OffCanvasContainer open={open}>
        <OffCanvas position="left" revealForSize="large">
          <Link to="/general/grid">Grid</Link>
          <br/>
          <Link to="/general/grid/flex">Flex Grid</Link>
          <br/>
          <Link to="/general/visibility">Visibility</Link>
          <br/>
          <Link to="/general/float">Float</Link>
          <br/>
          <Link to="/typography/base">Base Typography</Link>
          <br/>
          <Link to="/typography/helpers">Typography Helpers</Link>
          <br/>
          <Link to="/typography/text-alignment">Text Alignment</Link>
          <br/>
          <Link to="/controls/button">Button</Link>
          <br/>
          <Link to="/controls/button-group">Button Group</Link>
          <br/>
          <Link to="/controls/close-button">Close Button</Link>
          <br/>
          <Link to="/controls/switch">Switch</Link>
          <br/>
          <Link to="/containers/accordion">Accordion</Link>
          <br/>
          <Link to="/containers/callout">Callout</Link>
          <br/>
          <Link to="/containers/dropdown">Dropdown</Link>
          <br/>
          <Link to="/containers/media-object">Media Object</Link>
          <br/>
          <Link to="/containers/off-canvas">Off Canvas</Link>
          <br/>
          <Link to="/containers/reveal">Reveal</Link>
          <br/>
          <Link to="/containers/table">Table</Link>
          <br/>
          <Link to="/containers/tabs">Tabs</Link>
          <br/>
          <Link to="/media/badge">Badge</Link>
          <br/>
          <Link to="/media/flex-video">Flex Video</Link>
          <br/>
          <Link to="/media/label">Label</Link>
          <br/>
          <Link to="/media/progress-bar">Progress Bar</Link>
          <br/>
          <Link to="/media/thumbnail">Thumbnail</Link>
          <br/>
          <Link to="/media/tooltip">Tooltip</Link>
        </OffCanvas>
        <OffCanvasContent onContentBlockerClick={this.handleClose}>
          <TitleBar>
            <HideForScreenSize size="large">
              <TitleBarItem position="left">
                <TitleBarMenuIcon onClick={this.handleToggle} open={leftNavOpen}/>
              </TitleBarItem>
            </HideForScreenSize>
            <TitleBarTitle>React Foundation Components</TitleBarTitle>
          </TitleBar>
          <br/>
          {this.props.children}
        </OffCanvasContent>
      </OffCanvasContainer>
    );
  }
}

class Demo extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route component={HomePage} path="/">
          <Route component={GridPage} path="/general/grid"/>
          <Route component={FlexGridPage} path="/general/grid/flex"/>
          <Route component={VisibilityPage} path="/general/visibility"/>
          <Route component={FloatPage} path="/general/float"/>
          <Route component={BaseTypographyPage} path="/typography/base"/>
          <Route component={TypographyHelpersPage} path="/typography/helpers"/>
          <Route component={TextAlignmentPage} path="/typography/text-alignment"/>
          <Route component={ButtonPage} path="/controls/button"/>
          <Route component={ButtonGroupPage} path="/controls/button-group"/>
          <Route component={CloseButtonPage} path="/controls/close-button"/>
          <Route component={SwitchPage} path="/controls/switch"/>
          <Route component={AccordionPage} path="/containers/accordion"/>
          <Route component={CalloutPage} path="/containers/callout"/>
          <Route component={DropdownPage} path="/containers/dropdown"/>
          <Route component={MediaObjectPage} path="/containers/media-object"/>
          <Route component={OffCanvasPage} path="/containers/off-canvas"/>
          <Route component={RevealPage} path="/containers/reveal"/>
          <Route component={TablePage} path="/containers/table"/>
          <Route component={TabsPage} path="/containers/tabs"/>
          <Route component={BadgePage} path="/media/badge"/>
          <Route component={FlexVideoPage} path="/media/flex-video"/>
          <Route component={LabelPage} path="/media/label"/>
          <Route component={ProgressBarPage} path="/media/progress-bar"/>
          <Route component={ThumbnailPage} path="/media/thumbnail"/>
          <Route component={TooltipPage} path="/media/tooltip"/>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('app'));
