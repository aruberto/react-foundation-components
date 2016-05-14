import React from 'react';

import { MediaObjectSection, MediaObject } from '../../../src/media-object';
import {
  MediaObjectSection as FlexMediaObjectSection,
  MediaObject as FlexMediaObject,
} from '../../../lib/media-object-flex'; // eslint-disable-line import/no-unresolved

const MediaObjectPage = () => (
  <div>
    <MediaObject>
      <MediaObjectSection>
        <img
          role="presentation"
          src="http://foundation.zurb.com/sites/docs/assets/img/avatar-1.jpg"
        />
      </MediaObjectSection>
      <MediaObjectSection>
        <h4>Dreams feel real while we're in them.</h4>
        <p>
          I'm going to improvise. Listen, there's something you should know about me... about
          inception. An idea is like a virus, resilient, highly contagious. The smallest seed
          of an idea can grow. It can grow to define or destroy you.
        </p>
      </MediaObjectSection>
    </MediaObject>
    <br />
    <MediaObject>
      <MediaObjectSection verticalAlignment="middle">
        <img
          role="presentation"
          src="http://foundation.zurb.com/sites/docs/assets/img/avatar-2.jpg"
        />
      </MediaObjectSection>
      <MediaObjectSection>
        <h4>Why is it so important to dream?</h4>
        <p>
          So, once we've made the plant, how do we go out? Hope you have something more elegant
          in mind than shooting me in the head? A kick. Whats a kick? This, Ariadne, would be a
          kick.
        </p>
        <p>
          What is the most resilient parasite? Bacteria? A virus? An intestinal worm? An idea.
          Resilient... highly contagious. Once an idea has taken hold of the brain it's almost
          impossible to eradicate. An idea that is fully formed - fully understood - that
          sticks; right in there somewhere.
        </p>
      </MediaObjectSection>
      <MediaObjectSection verticalAlignment="bottom">
        <img
          role="presentation"
          src="http://foundation.zurb.com/sites/docs/assets/img/avatar-3.jpg"
        />
      </MediaObjectSection>
    </MediaObject>
    <br />
    <MediaObject stackForSmall>
      <MediaObjectSection>
        <img
          role="presentation"
          src="http://foundation.zurb.com/sites/docs/assets/img/rectangle-1.jpg"
        />
      </MediaObjectSection>
      <MediaObjectSection>
        <h4>I Can Stack.</h4>
        <p>
          Shrink the browser width to see me stack. I do tricks for dog treats, but I'm not a
          dog.
        </p>
      </MediaObjectSection>
    </MediaObject>
    <br />
    <FlexMediaObject>
      <FlexMediaObjectSection verticalAlignment="middle">
        <img
          role="presentation"
          src="http://foundation.zurb.com/sites/docs/assets/img/avatar-2.jpg"
        />
      </FlexMediaObjectSection>
      <FlexMediaObjectSection main>
        <h4>Why is it so important to dream?</h4>
        <p>
          So, once we've made the plant, how do we go out? Hope you have something more elegant
          in mind than shooting me in the head? A kick. Whats a kick? This, Ariadne, would be a
          kick.
        </p>
        <p>
          What is the most resilient parasite? Bacteria? A virus? An intestinal worm? An idea.
          Resilient... highly contagious. Once an idea has taken hold of the brain it's almost
          impossible to eradicate. An idea that is fully formed - fully understood - that
          sticks; right in there somewhere.
        </p>
      </FlexMediaObjectSection>
      <FlexMediaObjectSection verticalAlignment="bottom">
        <img
          role="presentation"
          src="http://foundation.zurb.com/sites/docs/assets/img/avatar-3.jpg"
        />
      </FlexMediaObjectSection>
    </FlexMediaObject>
  </div>
);

export default MediaObjectPage;
