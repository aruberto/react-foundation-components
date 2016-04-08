import React from 'react';

import {
  ShowForScreenSize,
  ShowOnlyForScreenSize,
  HideForScreenSize,
  HideOnlyForScreenSize,
  Hide,
  Invisible,
  ShowForScreenOrientation,
  HideForScreenOrientation,
  ShowForScreenReader,
  HideForScreenReader,
  ShowOnFocus,
} from '../../../src/visibility';

const VisibilityPage = () => (
  <div>
    <h1>Visibility</h1>
    <p>
      Show or hide elements based on screen size or device orientation. Control which elements
      users see depending on their browsing environment.
    </p>
    <h2>Basics</h2>
    <p>Importing the Visibility components:</p>
    <pre>
      <code>
{
`// Import with local scoped class names (via CSS Modules)
import {
ShowForScreenSize,
ShowOnlyForScreenSize,
HideForScreenSize,
HideOnlyForScreenSize,
Hide,
Invisible,
ShowForScreenOrientation,
HideForScreenOrientation,
ShowForScreenReader,
HideForScreenReader,
ShowOnFocus,
} from 'react-foundation-components/lib/visibility';

or

// Import with global scoped class names
import {
ShowForScreenSize,
ShowOnlyForScreenSize,
HideForScreenSize,
HideOnlyForScreenSize,
Hide,
Invisible,
ShowForScreenOrientation,
HideForScreenOrientation,
ShowForScreenReader,
HideForScreenReader,
ShowOnFocus,
} from 'react-foundation-components/lib/global/visibility';`
}
      </code>
    </pre>
    <hr />
    <h2>Show by Screen Size</h2>
    <p>
      Use the ShowForScreenSize component to show a piece of content when users screen is at a
      given screen size or larger. Set the <code>screenSize</code> prop to small, medium, large,
      xlarge or xxlarge to specify the screen size.
    </p>
    <pre>
      <code>
        {
`<ShowForScreenSize screenSize="small">
You are on a small screen or larger.
</ShowForScreenSize>
<ShowForScreenSize screenSize="medium">
You are on a medium screen or larger.
</ShowForScreenSize>
<ShowForScreenSize screenSize="large">
You are on a large screen or larger.
</ShowForScreenSize>
<ShowForScreenSize screenSize="xlarge">
You are on an extra large screen or larger.
</ShowForScreenSize>
<ShowForScreenSize screenSize="xxlarge">
You are on an extra extra large screen or larger.
</ShowForScreenSize>`
        }
      </code>
    </pre>
    <p>
      <ShowForScreenSize screenSize="small">
        You are on a small screen or larger.
      </ShowForScreenSize>
    </p>
    <p>
      <ShowForScreenSize screenSize="medium">
        You are on a medium screen or larger.
      </ShowForScreenSize>
    </p>
    <p>
      <ShowForScreenSize screenSize="large">
        You are on a large screen or larger.
      </ShowForScreenSize>
    </p>
    <p>
      <ShowForScreenSize screenSize="xlarge">
        You are on an extra large screen or larger.
      </ShowForScreenSize>
    </p>
    <p>
      <ShowForScreenSize screenSize="xxlarge">
        You are on an extra extra large screen or larger.
      </ShowForScreenSize>
    </p>
    <p>
      Use the ShowOnlyForScreenSize component to show a piece of content when users screen is at
      a given screen size (hide when smaller or larger). Set the <code>screenSize</code> prop to
      small, medium, large, xlarge or xxlarge to specify the screen size.
    </p>
    <pre>
      <code>
        {
`<ShowOnlyForScreenSize screenSize="small">
You are <em>definitely</em> on a small screen.
</ShowOnlyForScreenSize>
<ShowOnlyForScreenSize screenSize="medium">
You are <em>definitely</em> on a medium screen.
</ShowOnlyForScreenSize>
<ShowOnlyForScreenSize screenSize="large">
You are <em>definitely</em> on a large screen.
</ShowOnlyForScreenSize>
<ShowOnlyForScreenSize screenSize="xlarge">
You are <em>definitely</em> on an extra large screen.
</ShowOnlyForScreenSize>
<ShowOnlyForScreenSize screenSize="xxlarge">
You are <em>definitely</em> on an extra extra large screen.
</ShowOnlyForScreenSize>`
        }
      </code>
    </pre>
    <p>
      <ShowOnlyForScreenSize screenSize="small">
        You are <em>definitely</em> on a small screen.
      </ShowOnlyForScreenSize>
    </p>
    <p>
      <ShowOnlyForScreenSize screenSize="medium">
        You are <em>definitely</em> on a medium screen.
      </ShowOnlyForScreenSize>
    </p>
    <p>
      <ShowOnlyForScreenSize screenSize="large">
        You are <em>definitely</em> on a large screen.
      </ShowOnlyForScreenSize>
    </p>
    <p>
      <ShowOnlyForScreenSize screenSize="xlarge">
        You are <em>definitely</em> on an extra large screen.
      </ShowOnlyForScreenSize>
    </p>
    <p>
      <ShowOnlyForScreenSize screenSize="xxlarge">
        You are <em>definitely</em> on an extra extra large screen.
      </ShowOnlyForScreenSize>
    </p>
    <hr />
    <h2>Hide by Screen Size</h2>
    <p>
      Use the HideForScreenSize component to hide a piece of content when users screen is at a
      given screen size or larger. Set the <code>screenSize</code> prop to small, medium, large,
      xlarge or xxlarge to specify the screen size.
    </p>
    <pre>
      <code>
        {
`<HideForScreenSize screenSize="small">
You are <em>not</em> on a small screen or larger.
</HideForScreenSize>
<HideForScreenSize screenSize="medium">
You are <em>not</em> on a medium screen or larger.
</HideForScreenSize>
<HideForScreenSize screenSize="large">
You are <em>not</em> on a large screen or larger.
</HideForScreenSize>
<HideForScreenSize screenSize="xlarge">
You are <em>not</em> on an extra large screen or larger.
</HideForScreenSize>
<HideForScreenSize screenSize="xxlarge">
You are <em>not</em> on an extra extra large screen or larger.
</HideForScreenSize>`
        }
      </code>
    </pre>
    <p>
      <HideForScreenSize screenSize="small">
        You are <em>not</em> on a small screen or larger.
      </HideForScreenSize>
    </p>
    <p>
      <HideForScreenSize screenSize="medium">
        You are <em>not</em> on a medium screen or larger.
      </HideForScreenSize>
    </p>
    <p>
      <HideForScreenSize screenSize="large">
        You are <em>not</em> on a large screen or larger.
      </HideForScreenSize>
    </p>
    <p>
      <HideForScreenSize screenSize="xlarge">
        You are <em>not</em> on an extra large screen or larger.
      </HideForScreenSize>
    </p>
    <p>
      <HideForScreenSize screenSize="xxlarge">
        You are <em>not</em> on an extra extra large screen or larger.
      </HideForScreenSize>
    </p>
    <p>
      Use the HideOnlyForScreenSize component to hide a piece of content when users screen is at
      a given screen size (show when smaller or larger). Set the <code>screenSize</code> prop to
      small, medium, large, xlarge or xxlarge to specify the screen size.
    </p>
    <pre>
      <code>
        {
`<HideOnlyForScreenSize screenSize="small">
You are <em>definitely not</em> on a small screen.
</HideOnlyForScreenSize>
<HideOnlyForScreenSize screenSize="medium">
You are <em>definitely not</em> on a medium screen.
</HideOnlyForScreenSize>
<HideOnlyForScreenSize screenSize="large">
You are <em>definitely not</em> on a large screen.
</HideOnlyForScreenSize>
<HideOnlyForScreenSize screenSize="xlarge">
You are <em>definitely not</em> on an extra large screen.
</HideOnlyForScreenSize>
<HideOnlyForScreenSize screenSize="xxlarge">
You are <em>definitely not</em> on an extra extra large screen.
</HideOnlyForScreenSize>`
        }
      </code>
    </pre>
    <p>
      <HideOnlyForScreenSize screenSize="small">
        You are <em>definitely not</em> on a small screen.
      </HideOnlyForScreenSize>
    </p>
    <p>
      <HideOnlyForScreenSize screenSize="medium">
        You are <em>definitely not</em> on a medium screen.
      </HideOnlyForScreenSize>
    </p>
    <p>
      <HideOnlyForScreenSize screenSize="large">
        You are <em>definitely not</em> on a large screen.
      </HideOnlyForScreenSize>
    </p>
    <p>
      <HideOnlyForScreenSize screenSize="xlarge">
        You are <em>definitely not</em> on an extra large screen.
      </HideOnlyForScreenSize>
    </p>
    <p>
      <HideOnlyForScreenSize screenSize="xxlarge">
        You are <em>definitely not</em> on an extra extra large screen.
      </HideOnlyForScreenSize>
    </p>
    <p>
      Use the Hide and Invisible to make content not display or hidden permanently.
    </p>
    <pre>
      <code>
        {
`<Hide>
Can't touch this.
</Hide>
<br/>
<Invisible>
Can sort of touch this.
</Invisible>`
        }
      </code>
    </pre>
    <p>
      <Hide>
        Can't touch this.
      </Hide>
    </p>
    <p>
      <Invisible>
        Can sort of touch this.
      </Invisible>
    </p>
    <hr />
    <h2>Orientation Detection</h2>
    <p>
      Use the ShowForScreenOrientation and/or HideForScreenOrientation component to show/hide a
      piece of content based on users screen aspect ratio. Set
      the <code>screenOrientation</code> prop to landscape or portrait to specify the screen
      size.
    </p>
    <pre>
      <code>
        {
`<ShowForScreenOrientation screenOrientation="landscape">
You are in landscape orientation.
</ShowForScreenOrientation>
<ShowForScreenOrientation screenOrientation="portrait">
You are in portrait orientation.
</ShowForScreenOrientation>
<HideForScreenOrientation screenOrientation="landscape">
You are <em>not</em> in landscape orientation.
</HideForScreenOrientation>
<HideForScreenOrientation screenOrientation="portrait">
You are <em>not</em> in portrait orientation.
</HideForScreenOrientation>`
        }
      </code>
    </pre>
    <p>
      <ShowForScreenOrientation screenOrientation="landscape">
        You are in landscape orientation.
      </ShowForScreenOrientation>
    </p>
    <p>
      <ShowForScreenOrientation screenOrientation="portrait">
        You are in portrait orientation.
      </ShowForScreenOrientation>
    </p>
    <p>
      <HideForScreenOrientation screenOrientation="landscape">
        You are <em>not</em> in landscape orientation.
      </HideForScreenOrientation>
    </p>
    <p>
      <HideForScreenOrientation screenOrientation="portrait">
        You are <em>not</em> in portrait orientation.
      </HideForScreenOrientation>
    </p>
    <hr />
    <h2>Accessibility</h2>
    <p>
      Use the ShowForScreenReader component to visually hide content while still allowing
      assistive technology to read it. Use the HideForScreenReader to hide content from
      assistive technology while still keeping it visual.
    </p>
    <pre>
      <code>
        {
`<ShowForScreenReader>
This text can only be read by a screen reader.
</ShowForScreenReader>
There's a line of text above this one, you just can't see it.
<HideForScreenReader>
This text can be seen, but won't be read by a screen reader.
</HideForScreenReader>`
        }
      </code>
    </pre>
    <p>
      <ShowForScreenReader>
        This text can only be read by a screen reader.
      </ShowForScreenReader>
    </p>
    <p>There's a line of text above this one, you just can't see it.</p>
    <p>
      <HideForScreenReader>
        This text can be seen, but won't be read by a screen reader.
      </HideForScreenReader>
    </p>
    <hr />
    <h2>Focus</h2>
    <p>
      Use the ShowOnFocus component to hide content except when it is focused.
    </p>
    <pre>
      <code>
        {
`Hit tab to see the link.
<ShowOnFocus tabIndex="1" componentClass="a">Link</ShowOnFocus>`
        }
      </code>
    </pre>
    <p>
      Hit tab to see the link.
    </p>
    <p>
      <ShowOnFocus tabIndex="1" componentClass="a">Link</ShowOnFocus>
    </p>
  </div>
);

export default VisibilityPage;
