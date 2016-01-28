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
        <p>You are on a small screen or larger.</p>
        <ShowForScreenSize size='medium'>
          <p>You are on a medium screen or larger.</p>
        </ShowForScreenSize>
        <ShowForScreenSize size='large'>
          <p>You are on a large screen or larger.</p>
        </ShowForScreenSize>
        <ShowForScreenSize size='xlarge'>
          <p>You are on an extra large screen or larger.</p>
        </ShowForScreenSize>
        <ShowForScreenSize size='xxlarge'>
          <p>You are on an extra extra large screen or larger.</p>
        </ShowForScreenSize>
        <ShowOnlyForScreenSize size='small'>
          <p>You are <em>definitely</em> on a small screen.</p>
        </ShowOnlyForScreenSize>
        <ShowOnlyForScreenSize size='medium'>
          <p>You are <em>definitely</em> on a medium screen.</p>
        </ShowOnlyForScreenSize>
        <ShowOnlyForScreenSize size='large'>
          <p>You are <em>definitely</em> on a large screen.</p>
        </ShowOnlyForScreenSize>
        <ShowOnlyForScreenSize size='xlarge'>
          <p>You are <em>definitely</em> on an extra large screen.</p>
        </ShowOnlyForScreenSize>
        <ShowOnlyForScreenSize size='xxlarge'>
          <p>You are <em>definitely</em> on an extra extra large screen.</p>
        </ShowOnlyForScreenSize>
        <HideForScreenSize size='medium'>
          <p>You are <em>not</em> on a medium screen or larger.</p>
        </HideForScreenSize>
        <HideForScreenSize size='large'>
          <p>You are <em>not</em> on a large screen or larger.</p>
        </HideForScreenSize>
        <HideForScreenSize size='xlarge'>
          <p>You are <em>not</em> on an extra large screen or larger.</p>
        </HideForScreenSize>
        <HideForScreenSize size='xxlarge'>
          <p>You are <em>not</em> on an extra extra large screen or larger.</p>
        </HideForScreenSize>
        <HideOnlyForScreenSize size='small'>
          <p>You are <em>definitely not</em> on a small screen.</p>
        </HideOnlyForScreenSize>
        <HideOnlyForScreenSize size='medium'>
          <p>You are <em>definitely not</em> on a medium screen.</p>
        </HideOnlyForScreenSize>
        <HideOnlyForScreenSize size='large'>
          <p>You are <em>definitely not</em> on a large screen.</p>
        </HideOnlyForScreenSize>
        <HideOnlyForScreenSize size='xlarge'>
          <p>You are <em>definitely not</em> on an extra large screen.</p>
        </HideOnlyForScreenSize>
        <HideOnlyForScreenSize size='xxlarge'>
          <p>You are <em>definitely not</em> on an extra extra large screen.</p>
        </HideOnlyForScreenSize>
        <Hide>
          <p>Can't touch this.</p>
        </Hide>
        <Invisible>
          <p>Can sort of touch this.</p>
        </Invisible>
        <ShowForScreenOrientation orientation='landscape'>
          <p>You are in landscape orientation.</p>
        </ShowForScreenOrientation>
        <ShowForScreenOrientation orientation='portrait'>
          <p>You are in portrait orientation.</p>
        </ShowForScreenOrientation>
        <HideForScreenOrientation orientation='landscape'>
          <p>You are <em>not</em> in landscape orientation.</p>
        </HideForScreenOrientation>
        <HideForScreenOrientation orientation='portrait'>
          <p>You are <em>not</em> in portrait orientation.</p>
        </HideForScreenOrientation>
        <ShowOnlyForScreenReader>
          <p>This text can only be read by a screen reader.</p>
        </ShowOnlyForScreenReader>
        <p>There's a line of text above this one, you just can't see it.</p>
        <HideOnlyForScreenReader>
          <p>This text can be seen, but won't be read by a screen reader.</p>
        </HideOnlyForScreenReader>
        <p>
          <ShowOnlyOnFocus>
            <a href='#mainContent'>Skip to Content</a>
          </ShowOnlyOnFocus>
        </p>
        <header id='header' role='banner'/>
        <main id='mainContent' role='main' tabIndex='0'/>
      </div>
    );
  }
}
