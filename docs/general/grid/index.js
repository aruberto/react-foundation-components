import React from 'react';

import { Row, Column } from '../../../src/grid';
import { ShowForScreenSize, ShowOnlyForScreenSize } from '../../../src/visibility';
import { Thumbnail } from '../../../src/thumbnail';

const rowStyle = { border: 'solid 1px #c6c6c6', marginTop: '0.5rem', marginBottom: '0.5rem' };
const styleOdd = { background: '#eee' };
const styleEven = { background: '#e1e1e1' };

const GridPage = () => (
  <div>
    <h1>Grid</h1>
    <p>
      Create powerful multi-device layouts quickly and easily with the default 12-column grid.
    </p>
    <hr />
    <h2>Basics</h2>
    <p>Importing the Grid component:</p>
    <pre>
      <code>
{
`// Import with local scoped class names (via CSS Modules)
import { Row, Column } from 'react-foundation-components/lib/grid';

or

// Import with global scoped class names
import { Row, Column } from 'react-foundation-components/lib/global/grid';`
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
    <hr />
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
    <h2>Incomplete Rows</h2>
    <p>
      In order to work around different browser rounding behaviors, Foundation will float the
      last column in a row to the right so the edge aligns. If your row doesn't have a count
      that adds up to 12 columns, you can tag the last column with the <code>end</code> prop
      in order to override that behavior.
    </p>
    <pre>
      <code>
{
`<Row>
<Column small={3}>3</Column>
<Column small={3}>3</Column>
<Column small={3}>3</Column>
</Row>
<Row>
<Column small={3}>3</Column>
<Column small={3}>3</Column>
<Column end small={3}>3 end</Column>
</Row>`
}
      </code>
    </pre>
    <Row style={rowStyle}>
      <Column small={3} style={styleOdd}>3</Column>
      <Column small={3} style={styleEven}>3</Column>
      <Column small={3} style={styleOdd}>3</Column>
    </Row>
    <Row style={rowStyle}>
      <Column small={3} style={styleOdd}>3</Column>
      <Column small={3} style={styleEven}>3</Column>
      <Column end small={3} style={styleOdd}>3 end</Column>
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
    <h2>Centered Columns</h2>
    <p>
      Center columns by setting the <code>smallCentered</code>, <code>mediumCentered</code>
      , <code>largeCentered</code>, <code>xlargeCentered</code>
      and/or <code>xxlargeCentered</code> props to centered or uncentered.
    </p>
    <pre>
      <code>
{
`<Row>
<Column small={3} smallCentered="centered">3 centered</Column>
</Row>
<Row>
<Column largeCentered="centered" small={6}>6 centered large</Column>
</Row>
<Row>
<Column largeCentered="uncentered" small={9} smallCentered="centered">9 centered small</Column>
</Row>
<Row>
<Column small={11} smallCentered="centered">11 centered</Column>
</Row>`
}
      </code>
    </pre>
    <Row style={rowStyle}>
      <Column small={3} smallCentered="centered" style={styleOdd}>3 centered</Column>
    </Row>
    <Row style={rowStyle}>
      <Column largeCentered="centered" small={6} style={styleOdd}>6 centered large</Column>
    </Row>
    <Row style={rowStyle}>
      <Column largeCentered="uncentered" small={9} smallCentered="centered" style={styleOdd}>
        9 centered small
      </Column>
    </Row>
    <Row style={rowStyle}>
      <Column small={11} smallCentered="centered" style={styleOdd}>11 centered</Column>
    </Row>
    <hr />
    <h2>Source Ordering</h2>
    <p>
      Set the source ordering props
      <code>smallPush</code>, <code>smallPull</code>
      , <code>mediumPush</code>, <code>mediumPull</code>
      , <code>largePush</code>, <code>largePull</code>
      , <code>xlargePush</code>, <code>xlargePull</code>
      , <code>xxlargePush</code> and/or <code>xxlargePull</code> to shift columns around between
      breakpoints. These props accept a number between 1 and 11.
    </p>
    <pre>
      <code>
{
`<Row>
<Column small={10} smallPush={2}>10</Column>
<Column small={2} smallPull={10}>2, last</Column>
</Row>
<Row style={rowStyle}>
<Column large={9} largePush={3}>9</Column>
<Column large={3} largePull={9}>3, last</Column>
</Row>
<Row style={rowStyle}>
<Column large={8} largePush={4}>8</Column>
<Column large={4} largePull={8}>4, last</Column>
</Row>
<Row style={rowStyle}>
<Column medium={7} mediumPush={5} small={5} smallPush={7}>7</Column>
<Column medium={5} mediumPull={7} small={7} smallPull={5}>5, last</Column>
</Row>
<Row>
<Column medium={6} mediumPush={6}>8</Column>
<Column medium={6} mediumPull={6}>4, last</Column>
</Row>`
}
      </code>
    </pre>
    <Row style={rowStyle}>
      <Column small={10} smallPush={2} style={styleOdd}>10</Column>
      <Column small={2} smallPull={10} style={styleEven}>2, last</Column>
    </Row>
    <Row style={rowStyle}>
      <Column large={9} largePush={3} style={styleOdd}>9</Column>
      <Column large={3} largePull={9} style={styleEven}>3, last</Column>
    </Row>
    <Row style={rowStyle}>
      <Column large={8} largePush={4} style={styleOdd}>8</Column>
      <Column large={4} largePull={8} style={styleEven}>4, last</Column>
    </Row>
    <Row style={rowStyle}>
      <Column medium={7} mediumPush={5} small={5} smallPush={7} style={styleOdd}>7</Column>
      <Column medium={5} mediumPull={7} small={7} smallPull={5} style={styleEven}>
        5, last
      </Column>
    </Row>
    <Row style={rowStyle}>
      <Column medium={6} mediumPush={6} style={styleOdd}>6</Column>
      <Column medium={6} mediumPull={6} style={styleEven}>6, last</Column>
    </Row>
    <hr />
    <h2>Block Grids</h2>
    <p>
      Set
      <code>smallUp</code>, <code>mediumUp</code>, <code>largeUp</code>, <code>xlargeUp</code>
      and/or <code>xxlargeUp</code> props to change the size of all columns within the row.
      These props accept a number between 1 and 8.
    </p>
    <pre>
      <code>
{
`<Row largeUp={4} mediumUp={2} smallUp={1}>
<Column><Thumbnail alt="" src="http://placehold.it/300x300" /></Column>
<Column><Thumbnail alt="" src="http://placehold.it/300x300" /></Column>
<Column><Thumbnail alt="" src="http://placehold.it/300x300" /></Column>
<Column><Thumbnail alt="" src="http://placehold.it/300x300" /></Column>
<Column><Thumbnail alt="" src="http://placehold.it/300x300" /></Column>
<Column><Thumbnail alt="" src="http://placehold.it/300x300" /></Column>
</Row>`
}
      </code>
    </pre>
    <Row largeUp={4} mediumUp={2} smallUp={1}>
      <Column><Thumbnail alt="" src="http://placehold.it/300x300" /></Column>
      <Column><Thumbnail alt="" src="http://placehold.it/300x300" /></Column>
      <Column><Thumbnail alt="" src="http://placehold.it/300x300" /></Column>
      <Column><Thumbnail alt="" src="http://placehold.it/300x300" /></Column>
      <Column><Thumbnail alt="" src="http://placehold.it/300x300" /></Column>
      <Column><Thumbnail alt="" src="http://placehold.it/300x300" /></Column>
    </Row>
  </div>
);

export default GridPage;
