import React, {Component} from 'react';

import {Thumbnail} from '../../../src';

export default class ThumbnailPage extends Component {
  render() {
    return (
      <div>
        <Thumbnail
          alt='Photo of Uranus.'
          src='http://foundation.zurb.com/sites/docs/assets/img/thumbnail/01.jpg'
        />
        <Thumbnail
          alt='Photo of Neptune.'
          src='http://foundation.zurb.com/sites/docs/assets/img/thumbnail/02.jpg'
        />
        <Thumbnail
          alt='Photo of Pluto.'
          src='http://foundation.zurb.com/sites/docs/assets/img/thumbnail/03.jpg'
        />
      </div>
    );
  }
}
