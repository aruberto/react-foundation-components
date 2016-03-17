import React from 'react';

import { FlexParent, FlexChild } from '../../../src/flex';

const rowStyle = { border: 'solid 1px #c6c6c6', marginTop: '0.5rem', marginBottom: '0.5rem' };
const styleOdd = { background: '#eee', minWidth: '250px' };
const styleEven = { background: '#e1e1e1', minWidth: '250px' };

const FlexPage = () => (
  <div>
    <h1>Flexbox</h1>
    <p>
      Simple layout with flexbox properties.
    </p>
    <h2>Basics</h2>
    <p>Importing the Flex components:</p>
    <pre>
      <code>
{
`// Import with local scoped class names (via CSS Modules)
import { FlexParent, FlexChild } from 'react-foundation-components/lib/flex';

or

// Import with global scoped class names
import { FlexParent, FlexChild } from 'react-foundation-components/lib/global/flex';`
}
      </code>
    </pre>
    <p>
      The FlexParent component can horizontally or vertically align its children. All immediate
      children of FlexParent should be FlexChild components. A FlexChild component can
      vertically align itself.
    </p>
    <h2>Horizontal Alignment</h2>
    <p>
      By default, all flex children align to the left but this can be overridden by setting the
      <code>horizontalAlignment</code> prop to left, right, center, justify or spaced.
    </p>
    <pre>
      <code>
{
`<FlexParent horizontalAlignment="left">
<FlexChild small={4}>Aligned to</FlexChild>
<FlexChild small={4}>the left</FlexChild>
</FlexParent>
<FlexParent horizontalAlignment="right">
<FlexChild small={4}>Aligned to</FlexChild>
<FlexChild small={4}>the right</FlexChild>
</FlexParent>
<FlexParent horizontalAlignment="center">
<FlexChild small={4}>Aligned to</FlexChild>
<FlexChild small={4}>the middle</FlexChild>
</FlexParent>
<FlexParent horizontalAlignment="justify">
<FlexChild small={4}>Aligned to</FlexChild>
<FlexChild small={4}>the edges</FlexChild>
</FlexParent>
<FlexParent horizontalAlignment="spaced">
<FlexChild small={4}>Aligned to</FlexChild>
<FlexChild small={4}>the space around</FlexChild>
</FlexParent>`
}
      </code>
    </pre>
    <FlexParent horizontalAlignment="left" style={rowStyle}>
      <FlexChild small={4} style={styleOdd}>Aligned to</FlexChild>
      <FlexChild small={4} style={styleEven}>the left</FlexChild>
    </FlexParent>
    <FlexParent horizontalAlignment="right" style={rowStyle}>
      <FlexChild small={4} style={styleOdd}>Aligned to</FlexChild>
      <FlexChild small={4} style={styleEven}>the right</FlexChild>
    </FlexParent>
    <FlexParent horizontalAlignment="center" style={rowStyle}>
      <FlexChild small={4} style={styleOdd}>Aligned to</FlexChild>
      <FlexChild small={4} style={styleEven}>the middle</FlexChild>
    </FlexParent>
    <FlexParent horizontalAlignment="justify" style={rowStyle}>
      <FlexChild small={4} style={styleOdd}>Aligned to</FlexChild>
      <FlexChild small={4} style={styleEven}>the edges</FlexChild>
    </FlexParent>
    <FlexParent horizontalAlignment="spaced" style={rowStyle}>
      <FlexChild small={4} style={styleOdd}>Aligned to</FlexChild>
      <FlexChild small={4} style={styleEven}>the space around</FlexChild>
    </FlexParent>
    <hr />
    <h2>Vertical Alignment</h2>
    <p>
      By default, all flex children stretch to be equal height but this can be overridden by
      setting the <code>verticalAlignment</code> prop to top, middle, bottom or stretch.
    </p>
    <pre>
      <code>
{
`<FlexParent verticalAlignment="top">
<FlexChild>I'm at the top!</FlexChild>
<FlexChild>
I am as well, but I have so much text I take up more space! Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Quis facere ducimus earum minus, inventore, ratione
doloremque deserunt neque perspiciatis accusamus explicabo soluta, quod provident
distinctio aliquam omnis? Labore, ullam possimus.
</FlexChild>
</FlexParent>
<FlexParent verticalAlignment="middle">
<FlexChild>I'm in the middle!</FlexChild>
<FlexChild>
I am as well, but I have so much text I take up more space! Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Quis facere ducimus earum minus, inventore, ratione
doloremque deserunt neque perspiciatis accusamus explicabo soluta, quod provident
distinctio aliquam omnis? Labore, ullam possimus.
</FlexChild>
</FlexParent>
<FlexParent verticalAlignment="bottom">
<FlexChild>I'm at the bottom!</FlexChild>
<FlexChild>
I am as well, but I have so much text I take up more space! Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Quis facere ducimus earum minus, inventore, ratione
doloremque deserunt neque perspiciatis accusamus explicabo soluta, quod provident
distinctio aliquam omnis? Labore, ullam possimus.
</FlexChild>
</FlexParent>
<FlexParent verticalAlignment="stretch">
<FlexChild>These colums have the same height.</FlexChild>
<FlexChild>
That's right, equal-height columns are possible with Flexbox too! Lorem ipsum dolor sit
amet, consectetur adipisicing elit. Voluptatum, tempora. Impedit eius officia possimus
laudantium? Molestiae eaque, sapiente atque doloremque placeat! In sint, fugiat saepe
sunt dolore tempore amet cupiditate.
</FlexChild>
</FlexParent>`
}
      </code>
    </pre>
    <FlexParent verticalAlignment="top" style={rowStyle}>
      <FlexChild style={styleOdd}>I'm at the top!</FlexChild>
      <FlexChild style={styleEven}>
        I am as well, but I have so much text I take up more space! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Quis facere ducimus earum minus, inventore, ratione
        doloremque deserunt neque perspiciatis accusamus explicabo soluta, quod provident
        distinctio aliquam omnis? Labore, ullam possimus.
      </FlexChild>
    </FlexParent>
    <FlexParent verticalAlignment="middle" style={rowStyle}>
      <FlexChild style={styleOdd}>I'm in the middle!</FlexChild>
      <FlexChild style={styleEven}>
        I am as well, but I have so much text I take up more space! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Quis facere ducimus earum minus, inventore, ratione
        doloremque deserunt neque perspiciatis accusamus explicabo soluta, quod provident
        distinctio aliquam omnis? Labore, ullam possimus.
      </FlexChild>
    </FlexParent>
    <FlexParent verticalAlignment="bottom" style={rowStyle}>
      <FlexChild style={styleOdd}>I'm at the bottom!</FlexChild>
      <FlexChild style={styleEven}>
        I am as well, but I have so much text I take up more space! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Quis facere ducimus earum minus, inventore, ratione
        doloremque deserunt neque perspiciatis accusamus explicabo soluta, quod provident
        distinctio aliquam omnis? Labore, ullam possimus.
      </FlexChild>
    </FlexParent>
    <FlexParent verticalAlignment="stretch" style={rowStyle}>
      <FlexChild style={styleOdd}>These colums have the same height.</FlexChild>
      <FlexChild style={styleEven}>
        That's right, equal-height columns are possible with Flexbox too! Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Voluptatum, tempora. Impedit eius officia possimus
        laudantium? Molestiae eaque, sapiente atque doloremque placeat! In sint, fugiat saepe
        sunt dolore tempore amet cupiditate.
      </FlexChild>
    </FlexParent>
    <p>
      <code>verticalAlignment</code> prop can also be set on a FlexChild to vary vertical
      alignment within a FlexParent.
    </p>
    <pre>
      <code>
{
`<FlexParent>
<FlexChild verticalAlignment="bottom">Align bottom.</FlexChild>
<FlexChild verticalAlignment="middle">Align middle.</FlexChild>
<FlexChild verticalAlignment="top">Align top.</FlexChild>
<FlexChild verticalAlignment="stretch">Align stretch.</FlexChild>
<FlexChild>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non harum laborum
cum voluptate vel, eius adipisci similique dignissimos nobis at excepturi incidunt fugit
molestiae quaerat, consequuntur porro temporibus. Nisi, ex?
</FlexChild>
</FlexParent>`
}
      </code>
    </pre>
    <FlexParent style={rowStyle}>
      <FlexChild style={styleOdd} verticalAlignment="bottom">Align bottom.</FlexChild>
      <FlexChild style={styleEven} verticalAlignment="middle">Align middle.</FlexChild>
      <FlexChild style={styleOdd} verticalAlignment="top">Align top.</FlexChild>
      <FlexChild style={styleEven} verticalAlignment="stretch">Align stretch.</FlexChild>
      <FlexChild style={styleOdd}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non harum laborum
        cum voluptate vel, eius adipisci similique dignissimos nobis at excepturi incidunt fugit
        molestiae quaerat, consequuntur porro temporibus. Nisi, ex?
      </FlexChild>
    </FlexParent>
    <hr />
    <h2>Source Ordering</h2>
    <p>
      Set the
      <code>smallOrder</code>, <code>mediumOrder</code>, <code>largeOrder</code>
      , <code>xlargeOrder</code> and/or <code>xxlargeOrder</code> to shift children around
      between breakpoints. These props accept a number between 1 and 6. Lower numbers are
      placed first. If multiple children have the same number, they are sorted in the order
      they appear
    </p>
    <pre>
      <code>
{
`<FlexParent>
<FlexChild mediumOrder={1} smallOrder={2}>
This column will come second on small, and first on medium and larger.
</FlexChild>
<FlexChild mediumOrder={2} smallOrder={1}>
This column will come first on small, and second on medium and larger.
</FlexChild>
</FlexParent>`
}
      </code>
    </pre>
    <FlexParent style={rowStyle}>
      <FlexChild mediumOrder={1} smallOrder={2} style={styleOdd}>
        This column will come second on small, and first on medium and larger.
      </FlexChild>
      <FlexChild mediumOrder={2} smallOrder={1} style={styleEven}>
        This column will come first on small, and second on medium and larger.
      </FlexChild>
    </FlexParent>
  </div>
);

export default FlexPage;
