import React from 'react';

const BaseTypographyPage = () => (
  <div>
    <p>
      This is a paragraph. Paragraphs are preset with a font size, line height and spacing to
      match the overall vertical rhythm. To show what a paragraph looks like this needs a little
      more content so, did you know that there are storms occurring on Jupiter that are larger
      than the Earth? Pretty cool. Wrap strong around type to <strong>make it bold!</strong>.
      You can also use em to <em>italicize your words</em>.
    </p>
    <h1>h1. This is a very large header.</h1>
    <h2>h2. This is a large header.</h2>
    <h3>h3. This is a medium header.</h3>
    <h4>h4. This is a moderate header.</h4>
    <h5>h5. This is a small header.</h5>
    <h6>h6. This is a tiny header.</h6>
    <h3>Foundation for Sites <small>Version 6.0.4</small></h3>
    <p>
      Links are very standard, and the color is preset to the Foundation primary color.
      <a href="http://foundation.zurb.com/sites/docs/global.html">
        Learn more about Foundation's global colors.
      </a>
    </p>
    <hr />
    <ul>
      <li>List item with a much longer description or more content.</li>
      <li>List item</li>
      <li>List item
        <ul>
          <li>Nested list item</li>
          <li>Nested list item</li>
          <li>Nested list item</li>
        </ul>
      </li>
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
    </ul>
    <ol>
      <li>Cheese (essential)</li>
      <li>Pepperoni</li>
      <li>Bacon
        <ol>
          <li>Normal bacon</li>
          <li>Canadian bacon</li>
        </ol>
      </li>
      <li>Sausage</li>
      <li>Onions</li>
      <li>Mushrooms</li>
    </ol>
    <dl>
      <dt>Time</dt>
      <dd>
        The indefinite continued progress of existence and events in the past, present, and
        future regarded as a whole.
      </dd>
      <dt>Space</dt>
      <dd>A continuous area or expanse that is free, available, or unoccupied.</dd>
      <dd>
        The dimensions of height, depth, and width within which all things exist and move.
      </dd>
    </dl>
    <blockquote>
      Those people who think they know everything are a great annoyance to those of us who do.
      <cite>Isaac Asimov</cite>
    </blockquote>
    <p>
      In my dream last night, I saw <abbr title="John Ronald Reuel">J. R. R.</abbr> Tolkien and
      George <abbr title="Raymond Richard">R. R.</abbr> Martin hanging out on
      Sunset <abbr title="Boulevard">Blvd</abbr>.
    </p>
    Remember to escape angle brackets when printing HTML: <code>&lt;div&gt;</code>
    <p>Press <kbd>Cmd+Q</kbd> (or <kbd>Ctrl+Q</kbd> on Windows) to play Half-Life 3.</p>
    <img alt="Buy now" src="assets/img/buy-now.jpg" />
  </div>
);

export default BaseTypographyPage;
