import React, { Component } from 'react';

import { CloseButton } from '../../../src/controls/close-button';
import Callout from '../../../src/containers/callout';

export default class CloseButtonPage extends Component {
  render() {
    return (
      <div>
        <h1>Close Button</h1>
        <p>
          The close button can be used anywhere you need something to go away on click.
        </p>
        <h2>Basics</h2>
        <p>Importing the CloseButton component:</p>
        <pre>
          <code>
{
`// Import with local scoped class names (via CSS Modules)
import { CloseButton } from '../../../src/controls/close-button';

or

// Import with global scoped class names
import { CloseButton } from 'react-foundation-components/lib/controls/close-button/global';`
}
          </code>
        </pre>
        <p>
          Clarify the button's purpose using the <code>aria-label</code> prop.
        </p>
        <pre>
          <code>
{
`<Callout>
  <CloseButton aria-label="Close Alert"/>
  <p>Look at this close button!</p>
</Callout>`
}
          </code>
        </pre>
        <Callout>
          <CloseButton aria-label="Close Alert"/>
          <p>Look at this close button!</p>
        </Callout>
        <br/>
      </div>
    );
  }
}
