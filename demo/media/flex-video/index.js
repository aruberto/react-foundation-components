import React, { Component } from 'react';

import { FlexVideo } from '../../../src';

export default class FlexVideoPage extends Component {
  render() {
    return (
      <div>
        <FlexVideo
          allowFullScreen
          frameBorder="0"
          height="315"
          src="https://www.youtube.com/embed/V9gkYw35Vws"
          width="420"
        />
        <br/>
        <FlexVideo
          allowFullScreen
          frameBorder="0"
          height="315"
          src="https://www.youtube.com/embed/aiBt44rrslw"
          widescreen
          width="420"
        />
        <br/>
        <FlexVideo
          allowFullScreen
          frameBorder="0"
          height="225"
          src="http://player.vimeo.com/video/60122989"
          vimeo
          width="400"
        />
      </div>
    );
  }
}
