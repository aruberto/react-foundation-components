import React, {Component} from 'react';

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
  ShowOnlyOnFocus
} from '../../../src';

export default class VisibilityPage extends Component {
  render() {
    return (
      <div>
        <div>
          You are on a small screen or larger.
        </div>
        <ShowForScreenSize size='medium'>
          You are on a medium screen or larger.
        </ShowForScreenSize>
        <ShowForScreenSize size='large'>
          You are on a large screen or larger.
        </ShowForScreenSize>
        <ShowForScreenSize size='xlarge'>
          You are on an extra large screen or larger.
        </ShowForScreenSize>
        <ShowForScreenSize size='xxlarge'>
          You are on an extra extra large screen or larger.
        </ShowForScreenSize>
        <ShowOnlyForScreenSize size='small'>
          You are <em>definitely</em> on a small screen.
        </ShowOnlyForScreenSize>
        <ShowOnlyForScreenSize size='medium'>
          You are <em>definitely</em> on a medium screen.
        </ShowOnlyForScreenSize>
        <ShowOnlyForScreenSize size='large'>
          You are <em>definitely</em> on a large screen.
        </ShowOnlyForScreenSize>
        <ShowOnlyForScreenSize size='xlarge'>
          You are <em>definitely</em> on an extra large screen.
        </ShowOnlyForScreenSize>
        <ShowOnlyForScreenSize size='xxlarge'>
          You are <em>definitely</em> on an extra extra large screen.
        </ShowOnlyForScreenSize>
        <HideForScreenSize size='medium'>
          You are <em>not</em> on a medium screen or larger.
        </HideForScreenSize>
        <HideForScreenSize size='large'>
          You are <em>not</em> on a large screen or larger.
        </HideForScreenSize>
        <HideForScreenSize size='xlarge'>
          You are <em>not</em> on an extra large screen or larger.
        </HideForScreenSize>
        <HideForScreenSize size='xxlarge'>
          You are <em>not</em> on an extra extra large screen or larger.
        </HideForScreenSize>
        <HideOnlyForScreenSize size='small'>
          You are <em>definitely not</em> on a small screen.
        </HideOnlyForScreenSize>
        <HideOnlyForScreenSize size='medium'>
          You are <em>definitely not</em> on a medium screen.
        </HideOnlyForScreenSize>
        <HideOnlyForScreenSize size='large'>
          You are <em>definitely not</em> on a large screen.
        </HideOnlyForScreenSize>
        <HideOnlyForScreenSize size='xlarge'>
          You are <em>definitely not</em> on an extra large screen.
        </HideOnlyForScreenSize>
        <HideOnlyForScreenSize size='xxlarge'>
          You are <em>definitely not</em> on an extra extra large screen.
        </HideOnlyForScreenSize>
        <Hide>
          Can't touch this.
        </Hide>
        <Invisible>
          Can sort of touch this.
        </Invisible>
        <ShowForScreenOrientation orientation='landscape'>
          You are in landscape orientation.
        </ShowForScreenOrientation>
        <ShowForScreenOrientation orientation='portrait'>
          You are in portrait orientation.
        </ShowForScreenOrientation>
        <HideForScreenOrientation orientation='landscape'>
          You are <em>not</em> in landscape orientation.
        </HideForScreenOrientation>
        <HideForScreenOrientation orientation='portrait'>
          You are <em>not</em> in portrait orientation.
        </HideForScreenOrientation>
        <ShowOnlyForScreenReader>
          This text can only be read by a screen reader.
        </ShowOnlyForScreenReader>
        <div>
          There's a line of text above this one, you just can't see it.
        </div>
        <HideOnlyForScreenReader>
          This text can be seen, but won't be read by a screen reader.
        </HideOnlyForScreenReader>
        <ShowOnlyOnFocus>
          <a href='#mainContent'>Skip to Content</a>
        </ShowOnlyOnFocus>
        <header id='header' role='banner'/>
        <main id='mainContent' role='main' tabIndex='0'/>
      </div>
    );
  }
}
