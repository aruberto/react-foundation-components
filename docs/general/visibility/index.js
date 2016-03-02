import React, { Component } from 'react';

import {
  ShowForScreenSize,
  ShowOnlyForScreenSize,
  HideForScreenSize,
  HideOnlyForScreenSize,
  Hide,
  Invisible,
  ShowForScreenOrientation,
  HideForScreenOrientation,
  ShowOnlyForScreenReader,
  HideOnlyForScreenReader,
  ShowOnlyOnFocus,
} from '../../../src/visibility';

export default class VisibilityPage extends Component {
  render() {
    return (
      <div>
        You are on a small screen or larger.
        <br/>
        <ShowForScreenSize screenSize="medium">
          You are on a medium screen or larger.
        </ShowForScreenSize>
        <br/>
        <ShowForScreenSize screenSize="large">
          You are on a large screen or larger.
        </ShowForScreenSize>
        <br/>
        <ShowForScreenSize screenSize="xlarge">
          You are on an extra large screen or larger.
        </ShowForScreenSize>
        <br/>
        <ShowForScreenSize screenSize="xxlarge">
          You are on an extra extra large screen or larger.
        </ShowForScreenSize>
        <br/>
        <ShowOnlyForScreenSize screenSize="small">
          You are <em>definitely</em> on a small screen.
        </ShowOnlyForScreenSize>
        <br/>
        <ShowOnlyForScreenSize screenSize="medium">
          You are <em>definitely</em> on a medium screen.
        </ShowOnlyForScreenSize>
        <br/>
        <ShowOnlyForScreenSize screenSize="large">
          You are <em>definitely</em> on a large screen.
        </ShowOnlyForScreenSize>
        <br/>
        <ShowOnlyForScreenSize screenSize="xlarge">
          You are <em>definitely</em> on an extra large screen.
        </ShowOnlyForScreenSize>
        <br/>
        <ShowOnlyForScreenSize screenSize="xxlarge">
          You are <em>definitely</em> on an extra extra large screen.
        </ShowOnlyForScreenSize>
        <br/>
        <HideForScreenSize screenSize="medium">
          You are <em>not</em> on a medium screen or larger.
        </HideForScreenSize>
        <br/>
        <HideForScreenSize screenSize="large">
          You are <em>not</em> on a large screen or larger.
        </HideForScreenSize>
        <br/>
        <HideForScreenSize screenSize="xlarge">
          You are <em>not</em> on an extra large screen or larger.
        </HideForScreenSize>
        <br/>
        <HideForScreenSize screenSize="xxlarge">
          You are <em>not</em> on an extra extra large screen or larger.
        </HideForScreenSize>
        <br/>
        <HideOnlyForScreenSize screenSize="small">
          You are <em>definitely not</em> on a small screen.
        </HideOnlyForScreenSize>
        <br/>
        <HideOnlyForScreenSize screenSize="medium">
          You are <em>definitely not</em> on a medium screen.
        </HideOnlyForScreenSize>
        <br/>
        <HideOnlyForScreenSize screenSize="large">
          You are <em>definitely not</em> on a large screen.
        </HideOnlyForScreenSize>
        <br/>
        <HideOnlyForScreenSize screenSize="xlarge">
          You are <em>definitely not</em> on an extra large screen.
        </HideOnlyForScreenSize>
        <br/>
        <HideOnlyForScreenSize screenSize="xxlarge">
          You are <em>definitely not</em> on an extra extra large screen.
        </HideOnlyForScreenSize>
        <br/>
        <Hide>
          Can't touch this.
        </Hide>
        <br/>
        <Invisible>
          Can sort of touch this.
        </Invisible>
        <br/>
        <ShowForScreenOrientation screenOrientation="landscape">
          You are in landscape orientation.
        </ShowForScreenOrientation>
        <br/>
        <ShowForScreenOrientation screenOrientation="portrait">
          You are in portrait orientation.
        </ShowForScreenOrientation>
        <br/>
        <HideForScreenOrientation screenOrientation="landscape">
          You are <em>not</em> in landscape orientation.
        </HideForScreenOrientation>
        <br/>
        <HideForScreenOrientation screenOrientation="portrait">
          You are <em>not</em> in portrait orientation.
        </HideForScreenOrientation>
        <br/>
        <ShowOnlyForScreenReader>
          This text can only be read by a screen reader.
        </ShowOnlyForScreenReader>
        There's a line of text above this one, you just can't see it.
        <br/>
        <HideOnlyForScreenReader>
          This text can be seen, but won't be read by a screen reader.
        </HideOnlyForScreenReader>
        <br/>
        <ShowOnlyOnFocus>
          <a href="#mainContent">Skip to Content</a>
        </ShowOnlyOnFocus>
        <header id="header" role="banner"/>
        <main id="mainContent" role="main" tabIndex="0"/>
      </div>
    );
  }
}
