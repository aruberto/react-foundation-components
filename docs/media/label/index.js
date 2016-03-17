import React from 'react';

import { Label } from '../../../src/label';

const LabelPage = () => (
  <div>
    <h1>Label</h1>
    <p>
      Labels are useful to call out certain sections or to attach metadata.
    </p>
    <hr />
    <h2>Basics</h2>
    <p>Importing the Label component:</p>
    <pre>
      <code>
{
`// Import with local scoped class names (via CSS Modules)
import { Label } from 'react-foundation-components/lib/label';

or

// Import with global scoped class names
import { Label } from 'react-foundation-components/lib/global/label';`
}
      </code>
    </pre>
    <pre>
      <code>
{
'<Label>Default Label</Label>'
}
      </code>
    </pre>
    <p>
      <Label>Default Label</Label>
    </p>
    <hr />
    <h2>Coloring</h2>
    <p>
      Give a Label additional meaning by setting the <code>color</code> prop. Possible values
      are primary, secondary, success, alert and warning.
    </p>
    <pre>
      <code>
{
`<Label color="primary">Primary Label</Label>
<Label color="secondary">Secondary Label</Label>
<Label color="success">Success Label</Label>
<Label color="alert">Alert Label</Label>
<Label color="warning">Warning Label</Label>`
}
      </code>
    </pre>
    <p>
      <Label color="primary">Primary Label</Label>
      &nbsp;
      <Label color="secondary">Secondary Label</Label>
      &nbsp;
      <Label color="success">Success Label</Label>
      &nbsp;
      <Label color="alert">Alert Label</Label>
      &nbsp;
      <Label color="warning">Warning Label</Label>
    </p>
    <hr />
    <h2>Accessibility</h2>
    <p>
      A Label will typically be describing another element on the page. To bind the two elements
      together, give the badge an <code>id</code>, and reference that <code>id</code> in an
      <code>aria-describedby</code> attribute on the main element.
    </p>
    <pre>
      <code>
{
`<span aria-describedby="emailLabel">
Re: re: re: you won't believe what's in this email!
</span>
<br/>
<Label id="emailLabel">High Priority</Label>`
}
      </code>
    </pre>
    <p>
      <span aria-describedby="emailLabel">
        Re: re: re: you won't believe what's in this email!
      </span>
      <br />
      <Label id="emailLabel">High Priority</Label>
    </p>
    <p>
      If an element is described by multiple labels, place multiple IDs inside
      of the <code>aria-describedby</code> prop.
    </p>
    <pre>
      <code>
{
`<span aria-describedby="emailLabel1 emailLabel2">
Re: re: re: you won't believe what's in this email!
</span>
<Label id="emailLabel1">High Priority</Label>
<Label id="emailLabel2">Unread</Label>`
}
      </code>
    </pre>
    <p>
      <span aria-describedby="emailLabel1 emailLabel2">
        Re: re: re: you won't believe what's in this email!
      </span>
      <br />
      <Label id="emailLabel1">High Priority</Label>
      &nbsp;
      <Label id="emailLabel2">Unread</Label>
    </p>
  </div>
);

export default LabelPage;
