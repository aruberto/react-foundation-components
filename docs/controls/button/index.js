import React from 'react';

import { Button } from '../../../src/button';
import { ShowForScreenReader, HideForScreenReader } from '../../../src/visibility';

const ButtonPage = () => (
  <div>
    <h1>Button</h1>
    <p>
      Buttons are convenient tools when you need more traditional actions.
    </p>
    <hr />
    <h2>Basics</h2>
    <p>Importing the Button component:</p>
    <pre>
      <code>
{
`// Import with local scoped class names (via CSS Modules)
import { Button } from 'react-foundation-components/lib/button';

or

// Import with global scoped class names
import { Button } from 'react-foundation-components/lib/global/button';`
}
      </code>
    </pre>
    <p>
      Because buttons can be used for many purposes, the underlying tag changes based on
      if certain props are set. If the <code>href</code> or <code>target</code> prop is
      provided, an &lt;a&gt; tag is generated. Otherwise a &lt;button&gt; tag is generated.
    </p>
    <pre>
      <code>
{
`<Button href="../typography/base">Learn More</Button>
<Button href="../general/visibility#mainContent">View All Features</Button>
<Button color="success">Save</Button>
<Button color="alert">Delete</Button>`
}
      </code>
    </pre>
    <p>
      <Button href="../typography/base">Learn More</Button>
      &nbsp;
      <Button href="../general/visibility#mainContent">View All Features</Button>
      &nbsp;
      <Button color="success">Save</Button>
      &nbsp;
      <Button color="alert">Delete</Button>
    </p>
    <hr />
    <h2>Sizing</h2>
    <p>
      Set the <code>size</code> prop to change button size and shape. Possible values are tiny,
      small and large.
    </p>
    <pre>
      <code>
{
`<Button size="tiny">So Tiny</Button>
<Button size="small">So Small</Button>
<Button>So Basic</Button>
<Button size="large">So Large</Button>`
}
      </code>
    </pre>
    <p>
      <Button size="tiny">So Tiny</Button>
      &nbsp;
      <Button size="small">So Small</Button>
      &nbsp;
      <Button>So Basic</Button>
      &nbsp;
      <Button size="large">So Large</Button>
    </p>
    <p>
      Set the <code>expanded</code> prop to make the Button take up entire width of its parent
      container.
    </p>
    <pre>
      <code>
{
`<Button expanded>Such Expand</Button>
<Button expanded size="tiny">Wow, Small Expand</Button>`
}
      </code>
    </pre>
    <p>
      <Button expanded>Such Expand</Button>
      <Button expanded size="tiny">Wow, Small Expand</Button>
    </p>
    <hr />
    <h2>Coloring</h2>
    <p>
      Give a button additional meaning by setting the <code>color</code> prop. Possible values
      are primary, secondary, success, alert and warning.
    </p>
    <pre>
      <code>
{
`<Button color="primary">Primary Color</Button>
<Button color="secondary">Secondary Color</Button>
<Button color="success">Success Color</Button>
<Button color="alert">Alert Color</Button>
<Button color="warning">Warning Color</Button>`
}
      </code>
    </pre>
    <p>
      <Button color="primary">Primary Color</Button>
      &nbsp;
      <Button color="secondary">Secondary Color</Button>
      &nbsp;
      <Button color="success">Success Color</Button>
      &nbsp;
      <Button color="alert">Alert Color</Button>
      &nbsp;
      <Button color="warning">Warning Color</Button>
    </p>
    <p>
      Set the <code>disabled</code> prop to give the button a faded appearance.
    </p>
    <pre>
      <code>
{
`<Button color="primary" disabled>Primary Color</Button>
<Button color="secondary" disabled>Secondary Color</Button>
<Button color="success" disabled>Success Color</Button>
<Button color="alert" disabled>Alert Color</Button>
<Button color="warning" disabled>Warning Color</Button>`
}
      </code>
    </pre>
    <p>
      <Button color="primary" disabled>Primary Color</Button>
      &nbsp;
      <Button color="secondary" disabled>Secondary Color</Button>
      &nbsp;
      <Button color="success" disabled>Success Color</Button>
      &nbsp;
      <Button color="alert" disabled>Alert Color</Button>
      &nbsp;
      <Button color="warning" disabled>Warning Color</Button>
    </p>
    <hr />
    <h2>Hollow Style</h2>
    <p>
      Set the <code>hollow</code> prop to give the button a hollow style.
    </p>
    <pre>
      <code>
{
`<Button color="primary" hollow>Primary Color</Button>
<Button color="secondary" hollow>Secondary Color</Button>
<Button color="success" hollow>Success Color</Button>
<Button color="alert" hollow>Alert Color</Button>
<Button color="warning" hollow>Warning Color</Button>`
}
      </code>
    </pre>
    <p>
      <Button color="primary" hollow>Primary Color</Button>
      &nbsp;
      <Button color="secondary" hollow>Secondary Color</Button>
      &nbsp;
      <Button color="success" hollow>Success Color</Button>
      &nbsp;
      <Button color="alert" hollow>Alert Color</Button>
      &nbsp;
      <Button color="warning" hollow>Warning Color</Button>
    </p>
    <hr />
    <h2>Dropdown Arrows</h2>
    <p>
      Set the <code>dropdown</code> prop to add a dropdown arrow to your button.
    </p>
    <pre>
      <code>
{
`<Button dropdown size="tiny">Dropdown Button</Button>
<Button dropdown size="small">Dropdown Button</Button>
<Button dropdown>Dropdown Button</Button>
<Button dropdown size="large">Dropdown Button</Button>
<Button dropdown expanded>Dropdown Button</Button>`
}
      </code>
    </pre>
    <p>
      <Button dropdown size="tiny">Dropdown Button</Button>
      &nbsp;
      <Button dropdown size="small">Dropdown Button</Button>
      &nbsp;
      <Button dropdown>Dropdown Button</Button>
      &nbsp;
      <Button dropdown size="large">Dropdown Button</Button>
      <Button dropdown expanded>Dropdown Button</Button>
    </p>
    <hr />
    <h2>Accessibility</h2>
    <p>
      Make sure that the text of the Button is descriptive. If for some reason, your button
      contains no readable text (for example, just a symbol or icon), add text wrapped in the
      ShowForScreenReader component to the Button component to clarify it's purpose. The
      symbol or icon should be wrapped in a HideForScreenReader component to prevent screen
      readers from trying to pronounce the symbol.
    </p>
    <pre>
      <code>
{
`<Button>
<ShowForScreenReader>Close</ShowForScreenReader>
<HideForScreenReader>&times;</HideForScreenReader>
</Button>`
}
      </code>
    </pre>
    <Button>
      <ShowForScreenReader>Close</ShowForScreenReader>
      <HideForScreenReader>&times;</HideForScreenReader>
    </Button>
  </div>
);

export default ButtonPage;
