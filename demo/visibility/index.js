import React, {Component} from 'react';

import {Visibility} from '../../src';

export default class VisibilityPage extends Component {
  render() {
    return (
      <div>
        <p>You are on a small screen or larger.</p>
        <Visibility showForMedium>
          <p>You are on a medium screen or larger.</p>
        </Visibility>
        <Visibility showForLarge>
          <p>You are on a large screen or larger.</p>
        </Visibility>
        <Visibility showForSmallOnly>
          <p>You are <em>definitely</em> on a small screen.</p>
        </Visibility>
        <Visibility showForMediumOnly>
          <p>You are <em>definitely</em> on a medium screen.</p>
        </Visibility>
        <Visibility showForLargeOnly>
          <p>You are <em>definitely</em> on a large screen.</p>
        </Visibility>
        <Visibility hideForMedium>
          <p>You are <em>not</em> on a medium screen or larger.</p>
        </Visibility>
        <Visibility hideForLarge>
          <p>You are <em>not</em> on a large screen or larger.</p>
        </Visibility>
        <Visibility hideForSmallOnly>
          <p>You are <em>definitely not</em> on a small screen.</p>
        </Visibility>
        <Visibility hideForMediumOnly>
          <p>You are <em>definitely not</em> on a medium screen.</p>
        </Visibility>
        <Visibility hideForLargeOnly>
          <p>You are <em>definitely not</em> on a large screen.</p>
        </Visibility>
        <Visibility hide>
          <p>Can't touch this.</p>
        </Visibility>
        <Visibility invisible>
          <p>Can sort of touch this.</p>
        </Visibility>
        <Visibility showForLandscape>
          <p>You are in landscape orientation.</p>
        </Visibility>
        <Visibility showForPortrait>
          <p>You are in portrait orientation.</p>
        </Visibility>
        <Visibility hideForLandscape>
          <p>You are <em>not</em> in landscape orientation.</p>
        </Visibility>
        <Visibility hideForPortrait>
          <p>You are <em>not</em> in portrait orientation.</p>
        </Visibility>
        <Visibility showForScreenReaderOnly>
          <p>This text can only be read by a screen reader.</p>
        </Visibility>
        <p>There's a line of text above this one, you just can't see it.</p>
        <Visibility hideForScreenReaderOnly>
          <p>This text can be seen, but won't be read by a screen reader.</p>
        </Visibility>
        <p>
          <Visibility showOnFocus>
            <a href='#mainContent'>Skip to Content</a>
          </Visibility>
        </p>
        <header id='header' role='banner'/>
        <main id='mainContent' role='main' tabIndex='0'/>
      </div>
    );
  }
}
