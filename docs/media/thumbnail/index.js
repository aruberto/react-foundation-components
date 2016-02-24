import React, { Component } from 'react';

import { Thumbnail } from '../../../src';

export default class ThumbnailPage extends Component {
  render() {
    return (
      <div>
        <h1>Thumbnail</h1>
        <p>
          A reduced size image.
        </p>
        <h2>Basics</h2>
        <p>Importing the Thumbnail component:</p>
        <pre>
          <code>
{
`import Thumbnail from 'react-foundation-components/lib/media/thumbnail';`
}
          </code>
        </pre>
        <p>
          Thumbnail behaves similar to an img tag.
        </p>
        <pre>
          <code>
{
`<Thumbnail
  alt="Photo of Uranus."
  src="http://foundation.zurb.com/sites/docs/assets/img/thumbnail/01.jpg"
/>
<Thumbnail
  alt="Photo of Neptune."
  src="http://foundation.zurb.com/sites/docs/assets/img/thumbnail/02.jpg"
/>
<Thumbnail
  alt="Photo of Pluto."
  src="http://foundation.zurb.com/sites/docs/assets/img/thumbnail/03.jpg"
/>`
}
          </code>
        </pre>
        <p>
          <Thumbnail
            alt="Photo of Uranus."
            src="http://foundation.zurb.com/sites/docs/assets/img/thumbnail/01.jpg"
          />
          &nbsp;
          <Thumbnail
            alt="Photo of Neptune."
            src="http://foundation.zurb.com/sites/docs/assets/img/thumbnail/02.jpg"
          />
          &nbsp;
          <Thumbnail
            alt="Photo of Pluto."
            src="http://foundation.zurb.com/sites/docs/assets/img/thumbnail/03.jpg"
          />
        </p>
      </div>
    );
  }
}
