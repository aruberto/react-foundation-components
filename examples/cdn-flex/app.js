/* eslint-disable import/no-unresolved */

import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '../../lib/global/button';
import { ButtonGroup } from '../../lib/global/button-group-flex';

const App = () => (
  <div>
    <h1>Welcome to CDN CSS with Flexbox example!</h1>
    <p>
      We've imported Foundation from CDN - https://cdnjs.cloudflare.com/ajax/libs/foundation/6.2.0/foundation-flex.min.css.
    </p>
    <p>
      Make sure to use the components under lib/global. These components use global scoped
      class names.
    </p>
    <p>
      Also make sure to use the Flexbox components. The non Flexbox components use class names
      that don't exist in the flex CDN stylesheet.
    </p>
    <div>
      <h3>Button <code>react-foundation-components/lib/global/button</code></h3>
      <Button>Click Me!</Button>
    </div>
    <div>
      <h3>ButtonGroup <code>react-foundation-components/lib/global/button-group-flex</code></h3>
      <p>This ButtonGroup uses Flexbox layout</p>
      <ButtonGroup>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
      </ButtonGroup>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
