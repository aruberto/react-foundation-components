import React from 'react';

import { Row, Column } from '../../../src/grid-flex';
import { ShowForScreenSize, ShowOnlyForScreenSize } from '../../../src/visibility';

const rowStyle = { border: 'solid 1px #c6c6c6', marginTop: '0.5rem', marginBottom: '0.5rem' };
const styleOdd = { background: '#eee' };
const styleEven = { background: '#e1e1e1' };

const FlexGridPage = () => (
  <div>
    <h1>Flex Grid</h1>
    <p>
      Create powerful multi-device layouts quickly and easily with a Flexbox based 12-column
      grid.
    </p>
    <hr />
    <h2>Basics</h2>
    <p>Importing the Flex Grid component:</p>
    <pre>
      <code>
{
`// Import with local scoped class names (via CSS Modules)
import { Row, Column } from 'react-foundation-components/lib/grid-flex';

or

// Import with global scoped class names
import { Row, Column } from 'react-foundation-components/lib/global/grid-flex';`
}
      </code>
    </pre>
    <p>
      Specify the widths of each column with the <code>small</code>, <code>medium</code>
      , <code>large</code>, <code>xlarge</code> and <code>xxlarge</code> props. These props
      accept a number between 1 and 12.
    </p>
    <pre>
      <code>
{
`
<Row>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>1</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>2</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>3</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>4</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>5</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>6</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>7</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>8</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>9</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>10</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>11</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>12</Column>
</Row>`
}
      </code>
    </pre>
    <Row style={rowStyle}>
      <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleOdd}>
        1
      </Column>
      <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleEven}>
        2
      </Column>
      <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleOdd}>
        3
      </Column>
      <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleEven}>
        4
      </Column>
      <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleOdd}>
        5
      </Column>
      <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleEven}>
        6
      </Column>
      <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleOdd}>
        7
      </Column>
      <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleEven}>
        8
      </Column>
      <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleOdd}>
        9
      </Column>
      <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleEven}>
        10
      </Column>
      <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleOdd}>
        11
      </Column>
      <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleEven}>
        12
      </Column>
    </Row>
    <h2>Fluid Row</h2>
    <p>
      Normally, a row is always 1200 pixels wide. Make a row completely fluid by setting
      the <code>expanded</code> prop.
    </p>
    <pre>
      <code>
{
`<Row expanded>
<Column small={2}>2 Columns</Column>
<Column small={10}>10 Columns</Column>
</Row>`
}
      </code>
    </pre>
    <Row expanded style={rowStyle}>
      <Column small={2} style={styleOdd}>2 Columns</Column>
      <Column small={10} style={styleEven}>10 Columns</Column>
    </Row>
    <hr />
    <h2>Nesting</h2>
    <p>
      You can nest the grids indefinitely, though at a certain point it will get absurd.
    </p>
    <pre>
      <code>
{
`<Row>
<Column small={8}>
8
<Row>
  <Column small={8}>
    8 Nested
    <Row>
      <Column small={8}>8 Nested Again</Column>
      <Column small={4}>4</Column>
    </Row>
  </Column>
  <Column small={4}>4</Column>
</Row>
</Column>
<Column small={4}>4</Column>
</Row>`
}
      </code>
    </pre>
    <Row style={rowStyle}>
      <Column small={8} style={styleOdd}>
        8
        <Row style={rowStyle}>
          <Column small={8} style={styleOdd}>
            8 Nested
            <Row style={rowStyle}>
              <Column small={8} style={styleOdd}>8 Nested Again</Column>
              <Column small={4} style={styleEven}>4</Column>
            </Row>
          </Column>
          <Column small={4} style={styleEven}>4</Column>
        </Row>
      </Column>
      <Column small={4} style={styleEven}>4</Column>
    </Row>
    <hr />
    <h2>Advanced Sizing</h2>
    <p>
      If no sizing prop is set on the Column, it will expand to fill the leftover space. This
      is called an expand behavior. Multiple expanding columns will share the leftover space
      equally. A column can also be made to shrink, by setting the <code>shrink</code> prop.
      This means it will only take up the horizontal space its contents need.
    </p>
    <pre>
      <code>
{
`<Row>
<Column small={4}>4 Columns</Column>
<Column>Whatever's left!</Column>
</Row>
<Row>
<Column small={4}>4 Columns</Column>
<Column>Whatever's left!</Column>
<Column>Whatever's left!</Column>
</Row>
<Row>
<Column shrink>Shrink!</Column>
<Column>Expand!</Column>
</Row>`
}
      </code>
    </pre>
    <Row style={rowStyle}>
      <Column small={4} style={styleOdd}>4 Columns</Column>
      <Column style={styleEven}>Whatever's left!</Column>
    </Row>
    <Row style={rowStyle}>
      <Column small={4} style={styleOdd}>4 Columns</Column>
      <Column style={styleEven}>Whatever's left!</Column>
      <Column style={styleOdd}>Whatever's left!</Column>
    </Row>
    <Row style={rowStyle}>
      <Column shrink style={styleOdd}>Shrink!</Column>
      <Column style={styleEven}>Expand!</Column>
    </Row>
    <hr />
    <h2>Responsive Adjustments</h2>
    <p>
      Columns in a flex grid will not wrap if not given an explicit size, this is what allows
      the magical auto-sizing to work. To make Columns stack on smaller screens, set the
      <code>small</code> prop to 12 manually.
    </p>
    <p>
      To switch back to the expand behavior from a percentage or shrink behavior, set the
      <code>expand</code> prop to medium, large, xlarge or xxlarge. In the below example, the
      columns stack on small screens, and become even-width on large screens.
    </p>
    <pre>
      <code>
{
`<Row>
<Column small={12} expand="large">One</Column>
<Column small={12} expand="large">Two</Column>
<Column small={12} expand="large">Three</Column>
<Column small={12} expand="large">Four</Column>
<Column small={12} expand="large">Five</Column>
<Column small={12} expand="large">Six</Column>
</Row>`
}
      </code>
    </pre>
    <Row style={rowStyle}>
      <Column small={12} expand="large" style={styleOdd}>One</Column>
      <Column small={12} expand="large" style={styleEven}>Two</Column>
      <Column small={12} expand="large" style={styleOdd}>Three</Column>
      <Column small={12} expand="large" style={styleEven}>Four</Column>
      <Column small={12} expand="large" style={styleOdd}>Five</Column>
      <Column small={12} expand="large" style={styleEven}>Six</Column>
    </Row>
    <hr />
    <h2>Automatic Stacking</h2>
    <p>
      There is a shorthand for the above behavior. Simply set the
      <code>unstack</code> prop to medium, large, xlarge or xxlarge on the Row. Columns will
      then stack on any smaller screen size and become even-width on the specified screen size
      or larger.
    </p>
    <pre>
      <code>
{
`<Row unstack="medium">
<Column>One</Column>
<Column>Two</Column>
<Column>Three</Column>
<Column>Four</Column>
<Column>Five</Column>
<Column>Six</Column>
</Row>`
}
      </code>
    </pre>
    <Row unstack="medium" style={rowStyle}>
      <Column style={styleOdd}>One</Column>
      <Column style={styleEven}>Two</Column>
      <Column style={styleOdd}>Three</Column>
      <Column style={styleEven}>Four</Column>
      <Column style={styleOdd}>Five</Column>
      <Column style={styleEven}>Six</Column>
    </Row>
    <hr />
    <h2>Horizontal Alignment</h2>
    <p>
      By default, all columns align to the left but this can be overridden by setting the
      <code>horizontalAlignment</code> prop to left, right, center, justify or spaced.
    </p>
    <pre>
      <code>
{
`<Row horizontalAlignment="left">
<Column small={4}>Aligned to</Column>
<Column small={4}>the left</Column>
</Row>
<Row horizontalAlignment="right">
<Column small={4}>Aligned to</Column>
<Column small={4}>the right</Column>
</Row>
<Row horizontalAlignment="center">
<Column small={4}>Aligned to</Column>
<Column small={4}>the middle</Column>
</Row>
<Row horizontalAlignment="justify">
<Column small={4}>Aligned to</Column>
<Column small={4}>the edges</Column>
</Row>
<Row horizontalAlignment="spaced">
<Column small={4}>Aligned to</Column>
<Column small={4}>the space around</Column>
</Row>`
}
      </code>
    </pre>
    <Row horizontalAlignment="left" style={rowStyle}>
      <Column small={4} style={styleOdd}>Aligned to</Column>
      <Column small={4} style={styleEven}>the left</Column>
    </Row>
    <Row horizontalAlignment="right" style={rowStyle}>
      <Column small={4} style={styleOdd}>Aligned to</Column>
      <Column small={4} style={styleEven}>the right</Column>
    </Row>
    <Row horizontalAlignment="center" style={rowStyle}>
      <Column small={4} style={styleOdd}>Aligned to</Column>
      <Column small={4} style={styleEven}>the middle</Column>
    </Row>
    <Row horizontalAlignment="justify" style={rowStyle}>
      <Column small={4} style={styleOdd}>Aligned to</Column>
      <Column small={4} style={styleEven}>the edges</Column>
    </Row>
    <Row horizontalAlignment="spaced" style={rowStyle}>
      <Column small={4} style={styleOdd}>Aligned to</Column>
      <Column small={4} style={styleEven}>the space around</Column>
    </Row>
    <hr />
    <h2>Vertical Alignment</h2>
    <p>
      By default, all columns stretch to be equal height but this can be overridden by setting
      the <code>verticalAlignment</code> prop to top, middle, bottom or stretch.
    </p>
    <pre>
      <code>
{
`<Row verticalAlignment="top">
<Column>I'm at the top!</Column>
<Column>
I am as well, but I have so much text I take up more space! Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Quis facere ducimus earum minus, inventore, ratione
doloremque deserunt neque perspiciatis accusamus explicabo soluta, quod provident
distinctio aliquam omnis? Labore, ullam possimus.
</Column>
</Row>
<Row verticalAlignment="middle">
<Column>I'm in the middle!</Column>
<Column>
I am as well, but I have so much text I take up more space! Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Quis facere ducimus earum minus, inventore, ratione
doloremque deserunt neque perspiciatis accusamus explicabo soluta, quod provident
distinctio aliquam omnis? Labore, ullam possimus.
</Column>
</Row>
<Row verticalAlignment="bottom">
<Column>I'm at the bottom!</Column>
<Column>
I am as well, but I have so much text I take up more space! Lorem ipsum dolor sit amet,
consectetur adipisicing elit. Quis facere ducimus earum minus, inventore, ratione
doloremque deserunt neque perspiciatis accusamus explicabo soluta, quod provident
distinctio aliquam omnis? Labore, ullam possimus.
</Column>
</Row>
<Row verticalAlignment="stretch">
<Column>These colums have the same height.</Column>
<Column>
That's right, equal-height columns are possible with Flexbox too! Lorem ipsum dolor sit
amet, consectetur adipisicing elit. Voluptatum, tempora. Impedit eius officia possimus
laudantium? Molestiae eaque, sapiente atque doloremque placeat! In sint, fugiat saepe
sunt dolore tempore amet cupiditate.
</Column>
</Row>`
}
      </code>
    </pre>
    <Row verticalAlignment="top" style={rowStyle}>
      <Column style={styleOdd}>I'm at the top!</Column>
      <Column style={styleEven}>
        I am as well, but I have so much text I take up more space! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Quis facere ducimus earum minus, inventore, ratione
        doloremque deserunt neque perspiciatis accusamus explicabo soluta, quod provident
        distinctio aliquam omnis? Labore, ullam possimus.
      </Column>
    </Row>
    <Row verticalAlignment="middle" style={rowStyle}>
      <Column style={styleOdd}>I'm in the middle!</Column>
      <Column style={styleEven}>
        I am as well, but I have so much text I take up more space! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Quis facere ducimus earum minus, inventore, ratione
        doloremque deserunt neque perspiciatis accusamus explicabo soluta, quod provident
        distinctio aliquam omnis? Labore, ullam possimus.
      </Column>
    </Row>
    <Row verticalAlignment="bottom" style={rowStyle}>
      <Column style={styleOdd}>I'm at the bottom!</Column>
      <Column style={styleEven}>
        I am as well, but I have so much text I take up more space! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Quis facere ducimus earum minus, inventore, ratione
        doloremque deserunt neque perspiciatis accusamus explicabo soluta, quod provident
        distinctio aliquam omnis? Labore, ullam possimus.
      </Column>
    </Row>
    <Row verticalAlignment="stretch" style={rowStyle}>
      <Column style={styleOdd}>These colums have the same height.</Column>
      <Column style={styleEven}>
        That's right, equal-height columns are possible with Flexbox too! Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Voluptatum, tempora. Impedit eius officia possimus
        laudantium? Molestiae eaque, sapiente atque doloremque placeat! In sint, fugiat saepe
        sunt dolore tempore amet cupiditate.
      </Column>
    </Row>
    <p>
      <code>verticalAlignment</code> prop can also be set on Column to vary vertical alignment
      within a row.
    </p>
    <pre>
      <code>
{
`<Row>
<Column verticalAlignment="bottom">Align bottom.</Column>
<Column verticalAlignment="middle">Align middle.</Column>
<Column verticalAlignment="top">Align top.</Column>
<Column verticalAlignment="stretch">Align stretch.</Column>
<Column>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non harum laborum
cum voluptate vel, eius adipisci similique dignissimos nobis at excepturi incidunt fugit
molestiae quaerat, consequuntur porro temporibus. Nisi, ex?
</Column>
</Row>`
}
      </code>
    </pre>
    <Row style={rowStyle}>
      <Column style={styleOdd} verticalAlignment="bottom">Align bottom.</Column>
      <Column style={styleEven} verticalAlignment="middle">Align middle.</Column>
      <Column style={styleOdd} verticalAlignment="top">Align top.</Column>
      <Column style={styleEven} verticalAlignment="stretch">Align stretch.</Column>
      <Column style={styleOdd}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non harum laborum
        cum voluptate vel, eius adipisci similique dignissimos nobis at excepturi incidunt fugit
        molestiae quaerat, consequuntur porro temporibus. Nisi, ex?
      </Column>
    </Row>
    <hr />
    <h2>Collapse/Uncollapse Rows</h2>
    <p>
      Set the <code>collapse</code> prop to remove column gutters (padding).
    </p>
    <pre>
      <code>
{
`<Row collapse>
<Column small={6}>I have no gutters!</Column>
<Column small={6}>I have no gutters!</Column>
</Row>`
}
      </code>
    </pre>
    <Row style={rowStyle} collapse>
      <Column small={6} style={styleEven}>
        I have no gutters!
      </Column>
      <Column small={6} style={styleOdd}>
        I have no gutters!
      </Column>
    </Row>
    <p>
      There are times when you want each screen size to be collapsed or uncollapsed. In
      this case, set the <code>smallCollapse</code>, <code>mediumCollapse</code>
      , <code>largeCollapse</code>, <code>xlargeCollapse</code>
      and/or <code>xxlargeCollapse</code> props to collapse or uncollapse. In the following
      example, only medium size screens will add gutters to grid.
    </p>
    <pre>
      <code>
{
`<Row smallCollapse="collapse" mediumCollapse="uncollapse" largeCollapse="collapse">
<Column small={6}>
<ShowOnlyForScreenSize screenSize="small">
  On a small screen, I have no gutters!
</ShowOnlyForScreenSize>
<ShowOnlyForScreenSize screenSize="medium">
  On a medium screen, I have gutters!
</ShowOnlyForScreenSize>
<ShowForScreenSize screenSize="large">
  On a large screen, I have no gutters!
</ShowForScreenSize>
</Column>
<Column small={6}>
<ShowOnlyForScreenSize screenSize="small">
  On a small screen, I have no gutters!
</ShowOnlyForScreenSize>
<ShowOnlyForScreenSize screenSize="medium">
  On a medium screen, I have gutters!
</ShowOnlyForScreenSize>
<ShowForScreenSize screenSize="large">
  On a large screen, I have no gutters!
</ShowForScreenSize>
</Column>
</Row>`
}
      </code>
    </pre>
    <Row
      style={rowStyle}
      smallCollapse="collapse"
      mediumCollapse="uncollapse"
      largeCollapse="collapse"
    >
      <Column small={6} style={styleEven}>
        <ShowOnlyForScreenSize screenSize="small">
          On a small screen, I have no gutters!
        </ShowOnlyForScreenSize>
        <ShowOnlyForScreenSize screenSize="medium">
          On a medium screen, I have gutters!
        </ShowOnlyForScreenSize>
        <ShowForScreenSize screenSize="large">
          On a large screen, I have no gutters!
        </ShowForScreenSize>
      </Column>
      <Column small={6} style={styleOdd}>
        <ShowOnlyForScreenSize screenSize="small">
          On a small screen, I have no gutters!
        </ShowOnlyForScreenSize>
        <ShowOnlyForScreenSize screenSize="medium">
          On a medium screen, I have gutters!
        </ShowOnlyForScreenSize>
        <ShowForScreenSize screenSize="large">
          On a large screen, I have no gutters!
        </ShowForScreenSize>
      </Column>
    </Row>
    <hr />
    <h2>Offsets</h2>
    <p>
      Move blocks up to 11 columns to the right by using the <code>smallOffset</code>
      , <code>mediumOffset</code>, <code>largeOffset</code>, <code>xlargeOffset</code>
      and <code>xxlargeOffset</code> props. These props accept a number between 0 and 1.
    </p>
    <pre>
      <code>
{
`<Row>
<Column small={1}>1</Column>
<Column small={11}>11</Column>
</Row>
<Row>
<Column small={1}>1</Column>
<Column small={10} smallOffset={1}>10, offset 1</Column>
</Row>
<Row>
<Column small={1}>1</Column>
<Column small={9} smallOffset={2}>9, offset 2</Column>
</Row>
<Row>
<Column small={1}>1</Column>
<Column small={8} smallOffset={3}>8, offset 3</Column>
</Row>`
}
      </code>
    </pre>
    <Row style={rowStyle}>
      <Column small={1} style={styleOdd}>1</Column>
      <Column small={11} style={styleEven}>11</Column>
    </Row>
    <Row style={rowStyle}>
      <Column small={1} style={styleOdd}>1</Column>
      <Column small={10} smallOffset={1} style={styleEven}>10, offset 1</Column>
    </Row>
    <Row style={rowStyle}>
      <Column small={1} style={styleOdd}>1</Column>
      <Column small={9} smallOffset={2} style={styleEven}>9, offset 2</Column>
    </Row>
    <Row style={rowStyle}>
      <Column small={1} style={styleOdd}>1</Column>
      <Column small={8} smallOffset={3} style={styleEven}>8, offset 3</Column>
    </Row>
    <hr />
    <h2>Source Ordering</h2>
    <p>
      Set the
      <code>smallOrder</code>, <code>mediumOrder</code>, <code>largeOrder</code>
      , <code>xlargeOrder</code> and/or <code>xxlargeOrder</code> to shift columns around
      between breakpoints. These props accept a number between 1 and 6. Lower numbers are
      placed first. If multiple columns have the same number, they are sorted in the order
      they appear
    </p>
    <pre>
      <code>
{
`<Row>
<Column mediumOrder={1} smallOrder={2}>
This column will come second on small, and first on medium and larger.
</Column>
<Column mediumOrder={2} smallOrder={1}>
This column will come first on small, and second on medium and larger.
</Column>
</Row>`
}
      </code>
    </pre>
    <Row style={rowStyle}>
      <Column mediumOrder={1} smallOrder={2} style={styleOdd}>
        This column will come second on small, and first on medium and larger.
      </Column>
      <Column mediumOrder={2} smallOrder={1} style={styleEven}>
        This column will come first on small, and second on medium and larger.
      </Column>
    </Row>
    <hr />
    <h2>Block Grids</h2>
    <p>
      To define column widths at the row-level, instead of the individual column level, set the
      <code>smallUp</code>, <code>mediumUp</code>, <code>largeUp</code>
      , <code>xlargeUp</code> and/or <code>xxlargeUp</code> props to the number of columns to
      display per row. These props accept a number between 1 and 8.
    </p>
    <pre>
      <code>
{
`<Row smallUp={1} mediumUp={2} largeUp={3}>
<Column>1 per row on small</Column>
<Column>2 per row on medium</Column>
<Column>3 per row on large</Column>
</Row>`
}
      </code>
    </pre>
    <Row smallUp={1} mediumUp={2} largeUp={3} style={rowStyle}>
      <Column style={styleOdd}>1 per row on small</Column>
      <Column style={styleEven}>2 per row on medium</Column>
      <Column style={styleOdd}>3 per row on large</Column>
    </Row>
  </div>
);

export default FlexGridPage;
