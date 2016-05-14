import React from 'react';

import { Button } from '../../../src/button';
import { ButtonGroup } from '../../../src/button-group';
import {
  ButtonGroup as FlexButtonGroup,
} from '../../../lib/button-group-flex'; // eslint-disable-line import/no-unresolved
import { ShowForScreenReader } from '../../../src/visibility';

const ButtonGroupPage = () => (
  <div>
    <h1>Button Group</h1>
    <p>
      Button Groups are containers for related action items.
    </p>
    <hr />
    <h2>Basics</h2>
    <p>Importing the ButtonGroup component:</p>
    <pre>
      <code>
{
`// Import with local scoped class names (via CSS Modules)
import { ButtonGroup } from 'react-foundation-components/lib/button-group';

or

// Import with global scoped class names
import { ButtonGroup } from 'react-foundation-components/lib/global/button-group';

or

// Import Flexbox version with local scoped class names (via CSS Modules)
import { ButtonGroup } from 'react-foundation-components/lib/controls/button-group-flex';

or

// Import Flexbox version with global scoped class names
import { ButtonGroup } from 'react-foundation-components/lib/controls/button-group-flex';`
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
    <hr />
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
    <hr />
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
    <hr />
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
      <Button>Expanded</Button>
      <Button>Button</Button>
      <Button>Group</Button>
    </ButtonGroup>
    <br />
    <hr />
    <h2>Stacking</h2>
    <p>
      A ButtonGroup can be made to stack vertically by setting the <code>stack</code> prop. A
      true value will cause the ButtonGroup to always stack vertically. The value "small"
      will cause the ButtonGroup to stack vertically on small screens only. The value "medium"
      will cause the ButtonGroup to stack vertically on medium or smaller screens.
    </p>
    <pre>
      <code>
{
`<ButtonGroup stack>
<Button>How</Button>
<Button>Low</Button>
<Button>Can</Button>
<Button>You</Button>
<Button>Go</Button>
</ButtonGroup>
<ButtonGroup stack="medium">
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
    <ButtonGroup stack>
      <Button>How</Button>
      <Button>Low</Button>
      <Button>Can</Button>
      <Button>You</Button>
      <Button>Go</Button>
    </ButtonGroup>
    <ButtonGroup stack="medium">
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
    <hr />
    <h2>Split Buttons</h2>
    <p>
      To build a split button, just create a ButtonGroup with two Buttons.
    </p>
    <p>
      To create a Button with only an arrow, set the <code>dropdown</code> and
      <code>dropdownArrowOnly</code> props on the Button. Note that the button still needs a
      label for screen readers, which can be embedded inside a ShowForScreenReader
      component. In the example below, an assistive device will read the arrow button as
      "Show Menu".
    </p>
    <pre>
      <code>
{
`<ButtonGroup>
<Button>Primary Action</Button>
<Button dropdown dropdownArrowOnly>
<ShowForScreenReader>Show Menu</ShowForScreenReader>
</Button>
</ButtonGroup>`
}
      </code>
    </pre>
    <ButtonGroup>
      <Button>Primary Action</Button>
      <Button dropdown dropdownArrowOnly>
        <ShowForScreenReader>Show Menu</ShowForScreenReader>
      </Button>
    </ButtonGroup>
    <hr />
    <h2>Flexbox</h2>
    <p>
      The Flexbox version of the ButtonGroup works same as float based version.
    </p>
    <pre>
      <code>
{
`<ButtonGroup stack="small">
<Button color="primary">I</Button>
<Button color="secondary">Am</Button>
<Button color="success">Using</Button>
<Button color="warning">Flexbox</Button>
<Button color="alert">Yay!</Button>
</ButtonGroup>`
}
      </code>
    </pre>
    <FlexButtonGroup stack="small">
      <Button color="primary">I</Button>
      <Button color="secondary">Am</Button>
      <Button color="success">Using</Button>
      <Button color="warning">Flexbox</Button>
      <Button color="alert">Yay!</Button>
    </FlexButtonGroup>
  </div>
);

export default ButtonGroupPage;
