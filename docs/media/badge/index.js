import React from 'react';

import { Badge } from '../../../src/badge';
import { ShowForScreenReader } from '../../../src/visibility';

const BadgePage = () => (
  <div>
    <h1>Badge</h1>
    <p>
      The badge is a basic component that displays a number.
    </p>
    <hr />
    <h2>Basics</h2>
    <p>Importing the Badge component:</p>
    <pre>
      <code>
{
`// Import with local scoped class names (via CSS Modules)
import { Badge } from 'react-foundation-components/lib/badge';

or

// Import with global scoped class names
import { Badge } from 'react-foundation-components/lib/global/badge';`
}
      </code>
    </pre>
    <pre>
      <code>
{
'<Badge>1</Badge>'
}
      </code>
    </pre>
    <p>
      <Badge>1</Badge>
    </p>
    <hr />
    <h2>Coloring</h2>
    <p>
      Give a Badge additional meaning by setting the <code>color</code> prop. Possible values
      are primary, secondary, success, alert and warning.
    </p>
    <pre>
      <code>
{
`<Badge color="primary">1</Badge>
<Badge color="secondary">2</Badge>
<Badge color="success">3</Badge>
<Badge color="alert">A</Badge>
<Badge color="warning">B</Badge>`
}
      </code>
    </pre>
    <p>
      <Badge color="primary">1</Badge>
      &nbsp;
      <Badge color="secondary">2</Badge>
      &nbsp;
      <Badge color="success">3</Badge>
      &nbsp;
      <Badge color="alert">A</Badge>
      &nbsp;
      <Badge color="warning">B</Badge>
    </p>
    <hr />
    <h2>Accessibility</h2>
    <p>
      A Badge will typically be describing another element on the page. To bind the two elements
      together, give the badge an <code>id</code>, and reference that <code>id</code> in an
      <code>aria-describedby</code> attribute on the main element. The Badge content itself
      might need more context for users that use screen readers. You can add extra text inside
      the badge by wrapping the text with the ShowForScreenReader component.
    </p>
    <pre>
      <code>
{
`<label aria-describedby="messageCount">Unread Messages</label>
<Badge id="messageCount">
12
<ShowForScreenReader>Unread Messages</ShowForScreenReader>
</Badge>`
}
      </code>
    </pre>
    <p>
      <label aria-describedby="messageCount">Unread Messages</label>
      <Badge id="messageCount">
        12
        <ShowForScreenReader>Unread Messages</ShowForScreenReader>
      </Badge>
    </p>
  </div>
);

export default BadgePage;
