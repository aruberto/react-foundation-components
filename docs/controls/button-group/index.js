import React, { Component } from 'react';

import { Button } from '../../../src/controls/button';
import { ButtonGroup } from '../../../src/controls/button-group';
import { ShowOnlyForScreenReader } from '../../../src/general/visibility';

export default class ButtonGroupPage extends Component {
  render() {
    return (
      <div>
        <h1>Button Group</h1>
        <p>
          Button Groups are containers for related action items.
        </p>
        <h2>Basics</h2>
        <p>Importing the ButtonGroup component:</p>
        <pre>
          <code>
{
`// Import with local scoped class names (via CSS Modules)
import { Button } from '../../../src/controls/button';
import { ButtonGroup } from 'react-foundation-components/lib/controls/button-group';

or

// Import with global scoped class names
import { Button } from 'react-foundation-components/lib/global/controls/button';
import { ButtonGroup } from 'react-foundation-components/lib/global/controls/button-group';`
}
          </code>
        </pre>
        <p>
          Place any number of Button components inside the ButtonGroup component. The buttons are
          separated by a small border.
        </p>
        <pre>
          <code>
{
`<ButtonGroup>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>`
}
          </code>
        </pre>
        <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <h2>Sizing</h2>
        <p>
          Set the <code>size</code> prop to change all child button size and shape. Possible values
          are tiny, small and large.
        </p>
        <pre>
          <code>
{
`<ButtonGroup size="tiny">
  <Button>Tiny</Button>
  <Button>Button</Button>
  <Button>Group</Button>
</ButtonGroup>
<ButtonGroup size="small">
  <Button>Small</Button>
  <Button>Button</Button>
  <Button>Group</Button>
</ButtonGroup>
<ButtonGroup>
  <Button>Basic</Button>
  <Button>Button</Button>
  <Button>Group</Button>
</ButtonGroup>
<ButtonGroup size="large">
  <Button>Large</Button>
  <Button>Button</Button>
  <Button>Group</Button>
</ButtonGroup>`
}
          </code>
        </pre>
        <ButtonGroup size="tiny">
          <Button>Tiny</Button>
          <Button>Button</Button>
          <Button>Group</Button>
        </ButtonGroup>
        <ButtonGroup size="small">
          <Button>Small</Button>
          <Button>Button</Button>
          <Button>Group</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>Basic</Button>
          <Button>Button</Button>
          <Button>Group</Button>
        </ButtonGroup>
        <ButtonGroup size="large">
          <Button>Large</Button>
          <Button>Button</Button>
          <Button>Group</Button>
        </ButtonGroup>
        <h2>Coloring</h2>
        <p>
          Buttons within a button group can be colored individually by setting
          the <code>color</code> prop. All buttons can be colored the same color by setting
          the <code>color</code> prop on the ButtonGroup. Possible values are primary, secondary,
          success, alert and warning.
        </p>
        <pre>
          <code>
{
`<ButtonGroup>
  <Button color="primary">Save</Button>
  <Button color="secondary">View</Button>
  <Button color="success">Edit</Button>
  <Button color="warning">Share</Button>
  <Button color="alert">Delete</Button>
</ButtonGroup>
<ButtonGroup color="alert">
  <Button>Harder</Button>
  <Button>Better</Button>
  <Button>Faster</Button>
  <Button>Stronger</Button>
</ButtonGroup>`
}
          </code>
        </pre>
        <ButtonGroup>
          <Button color="primary">Save</Button>
          <Button color="secondary">View</Button>
          <Button color="success">Edit</Button>
          <Button color="warning">Share</Button>
          <Button color="alert">Delete</Button>
        </ButtonGroup>
        <ButtonGroup color="alert">
          <Button>Harder</Button>
          <Button>Better</Button>
          <Button>Faster</Button>
          <Button>Stronger</Button>
        </ButtonGroup>
        <h2>Even-width Group</h2>
        <p>
          Set the <code>expanded</code> prop to make the ButtonGroup take up entire width of its
          parent container. Each Button will automatically size itself based on how many buttons
          there are, up to a maximum of six.
        </p>
        <pre>
          <code>
{
`<ButtonGroup expanded>
  <Button>Expanded</Button>
  <Button>Button</Button>
  <Button>Group</Button>
</ButtonGroup>`
}
          </code>
        </pre>
        <ButtonGroup expanded>
          {

            /*
              expanded button group currently only works with anchors.
              https://github.com/zurb/foundation-sites/issues/7844
             */
          }
          <Button href="#">Expanded</Button>
          <Button href="#">Button</Button>
          <Button href="#">Group</Button>
        </ButtonGroup>
        <h2>Stacking</h2>
        <p>
          A ButtonGroup can be made to stack vertically by setting the <code>stack</code> prop. The
          value "always" will cause the ButtonGroup to always stack vertically. The value "small"
          will cause the ButtonGroup to stack vertically on small screens only.
        </p>
        <pre>
          <code>
{
`<ButtonGroup stack="always">
  <Button>How</Button>
  <Button>Low</Button>
  <Button>Can</Button>
  <Button>You</Button>
  <Button>Go</Button>
</ButtonGroup>
<ButtonGroup stack="small">
  <Button>How</Button>
  <Button>Low</Button>
  <Button>Can</Button>
  <Button>You</Button>
  <Button>Go</Button>
</ButtonGroup>`
}
          </code>
        </pre>
        <ButtonGroup stack="always">
          <Button>How</Button>
          <Button>Low</Button>
          <Button>Can</Button>
          <Button>You</Button>
          <Button>Go</Button>
        </ButtonGroup>
        <ButtonGroup stack="small">
          <Button>How</Button>
          <Button>Low</Button>
          <Button>Can</Button>
          <Button>You</Button>
          <Button>Go</Button>
        </ButtonGroup>
        <h2>Split Buttons</h2>
        <p>
          To build a split button, just create a ButtonGroup with two Buttons.
        </p>
        <p>
          To create a Button with only an arrow, set the <code>dropdown</code> and
          <code>dropdownArrowOnly</code> props on the Button. Note that the button still needs a
          label for screen readers, which can be embedded inside a ShowOnlyForScreenReader
          component. In the example below, an assistive device will read the arrow button as
          "Show Menu".
        </p>
        <pre>
          <code>
{
`<ButtonGroup>
  <Button>Primary Action</Button>
  <Button dropdown dropdownArrowOnly>
    <ShowOnlyForScreenReader>Show Menu</ShowOnlyForScreenReader>
  </Button>
</ButtonGroup>`
}
          </code>
        </pre>
        <ButtonGroup>
          <Button>Primary Action</Button>
          <Button dropdown dropdownArrowOnly>
            <ShowOnlyForScreenReader>Show Menu</ShowOnlyForScreenReader>
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}
