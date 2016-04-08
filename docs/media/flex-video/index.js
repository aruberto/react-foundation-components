import React from 'react';

import { FlexVideo } from '../../../src/flex-video';

const FlexVideoPage = () => (
  <div>
    <h1>Flex Video</h1>
    <p>
      Wrap embedded videos from YouTube, Vimeo, and others in a flex video container to ensure
      they maintain the correct aspect ratio regardless of screen size.
    </p>
    <hr />
    <h2>Basics</h2>
    <p>Importing the FlexVideo component:</p>
    <pre>
      <code>
{
`// Import with local scoped class names (via CSS Modules)
import { FlexVideo } from 'react-foundation-components/lib/flex-video';

or

// Import with global scoped class names
import { FlexVideo } from 'react-foundation-components/lib/global/flex-video';`
}
      </code>
    </pre>
    <p>
      All the props you can set on iframe can also be set on the FlexVideo component.
    </p>
    <pre>
      <code>
{
`<FlexVideo
allowFullScreen
frameBorder="0"
height="315"
src="https://www.youtube.com/embed/V9gkYw35Vws"
width="420"
/>`
}
      </code>
    </pre>
    <FlexVideo
      allowFullScreen
      frameBorder="0"
      height="315"
      src="https://www.youtube.com/embed/V9gkYw35Vws"
      width="420"
    />
    <p>
      The default ratio is 4:3. Set the <code>widescreen</code> prop to change it to 16:9.
    </p>
    <pre>
      <code>
{
`<FlexVideo
allowFullScreen
frameBorder="0"
height="315"
src="https://www.youtube.com/embed/aiBt44rrslw"
widescreen
width="420"
/>`
}
      </code>
    </pre>
    <FlexVideo
      allowFullScreen
      frameBorder="0"
      height="315"
      src="https://www.youtube.com/embed/aiBt44rrslw"
      widescreen
      width="420"
    />
    <p>
      Embedded Vimeo videos are special snowflakes of their own. Set the <code>vimeo</code> prop
      to display a Vimeo video.
    </p>
    <pre>
      <code>
{
`<FlexVideo
allowFullScreen
frameBorder="0"
height="225"
src="http://player.vimeo.com/video/60122989"
vimeo
widescreen
width="400"
/>`
}
      </code>
    </pre>
    <FlexVideo
      allowFullScreen
      frameBorder="0"
      height="225"
      src="http://player.vimeo.com/video/60122989"
      vimeo
      widescreen
      width="400"
    />
  </div>
);

export default FlexVideoPage;
