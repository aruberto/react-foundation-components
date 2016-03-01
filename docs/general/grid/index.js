import React, { Component } from 'react';

import { Row, Column } from '../../../src/grid';
import { ShowForScreenSize, ShowOnlyForScreenSize } from '../../../src/visibility';

const style = { borderStyle: 'solid' };
const rowStyle = { border: 'solid 1px #c6c6c6', whiteSpace: 'nowrap' };
const styleOdd = { background: '#eee' };
const styleEven = { background: '#e1e1e1' };

export default class FloatGridPage extends Component {
  render() {
    return (
      <div>
        <h1>Grid</h1>
        <p>
          Create powerful multi-device layouts quickly and easily with the default 12-column grid.
        </p>
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
`<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>Column 1</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>Column 2</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>Column 3</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>Column 4</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>Column 5</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>Column 6</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>Column 7</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>Column 8</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>Column 9</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>Column 10</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>Column 11</Column>
<Column small={12} medium={6} large={4} xlarge={2} xxlarge={1}>Column 12</Column>s`
}
          </code>
        </pre>
        <Row style={rowStyle}>
          <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleOdd}>
            Column 1
          </Column>
          <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleEven}>
            Column 2
          </Column>
          <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleOdd}>
            Column 3
          </Column>
          <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleEven}>
            Column 4
          </Column>
          <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleOdd}>
            Column 5
          </Column>
          <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleEven}>
            Column 6
          </Column>
          <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleOdd}>
            Column 7
          </Column>
          <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleEven}>
            Column 8
          </Column>
          <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleOdd}>
            Column 9
          </Column>
          <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleEven}>
            Column 10
          </Column>
          <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleOdd}>
            Column 11
          </Column>
          <Column small={12} medium={6} large={4} xlarge={2} xxlarge={1} style={styleEven}>
            Column 12
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
        <h2>Offsets</h2>
        <p>
          Move blocks up to 11 columns to the right by using the <code>smallOffset</code>
          , <code>mediumOffset</code>, <code>largeOffset</code>, <code>xlargeOffset</code>
          and <code>xxlargeOffset</code> props.
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
  <Column smallsmall={1}>1</Column>
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
          <Column smallsmall={1} style={styleOdd}>1</Column>
          <Column small={9} smallOffset={2} style={styleEven}>9, offset 2</Column>
        </Row>
        <Row style={rowStyle}>
          <Column small={1} style={styleOdd}>1</Column>
          <Column small={8} smallOffset={3} style={styleEven}>8, offset 3</Column>
        </Row>
        <h2>Incomplete Rows</h2>
        <p>
          In order to work around browser' different rounding behaviors, Foundation will float the
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
          this case, use the media query size you want and collapse or uncollapse and add that to
          your row element. Example shows no gutter at small media size and then adds the gutter to
          columns at medium.
        </p>
        <Row style={rowStyle} smallCollapse mediumUncollapse largeCollapse>
          <Column small={6} style={styleEven}>
            <ShowOnlyForScreenSize size="small">
              On a small screen, I have no gutters!
            </ShowOnlyForScreenSize>
            <ShowOnlyForScreenSize size="medium">
              On a medium screen, I have gutters!
            </ShowOnlyForScreenSize>
            <ShowForScreenSize size="large">
              On a large screen, I have no gutters!
            </ShowForScreenSize>
          </Column>
          <Column small={6} style={styleOdd}>
            <ShowOnlyForScreenSize size="small">
              On a small screen, I have no gutters!
            </ShowOnlyForScreenSize>
            <ShowOnlyForScreenSize size="medium">
              On a medium screen, I have gutters!
            </ShowOnlyForScreenSize>
            <ShowForScreenSize size="large">
              On a large screen, I have no gutters!
            </ShowForScreenSize>
          </Column>
        </Row>
        <br/>
        <Row style={rowStyle}>
          <Column small={3} smallCentered style={style}>3 centered</Column>
        </Row>
        <Row style={rowStyle}>
          <Column largeCentered small={6} style={style}>6 centered large</Column>
        </Row>
        <Row style={rowStyle}>
          <Column largeUncentered small={9} smallCentered style={style}>9 centered small</Column>
        </Row>
        <Row style={rowStyle}>
          <Column small={11} smallCentered style={style}>11 centered</Column>
        </Row>
        <br/>
        <Row style={rowStyle}>
          <Column small={10} smallPush={2} style={style}>10</Column>
          <Column small={2} smallPull={10} style={style}>2, last</Column>
        </Row>
        <Row style={rowStyle}>
          <Column large={9} largePush={3} style={style}>9</Column>
          <Column large={3} largePull={9} style={style}>3, last</Column>
        </Row>
        <Row style={rowStyle}>
          <Column large={8} largePush={4} style={style}>8</Column>
          <Column large={4} largePull={8} style={style}>4, last</Column>
        </Row>
        <Row style={rowStyle}>
          <Column medium={7} mediumPush={5} small={5} smallPush={7} style={style}>7</Column>
          <Column medium={5} mediumPull={7} small={7} smallPull={5} style={style}>5, last</Column>
        </Row>
        <br/>
        <Row style={rowStyle} largeUp={4} mediumUp={2} smallUp={1}>
          <Column><img alt="" src="http://placehold.it/300x300"/></Column>
          <Column><img alt="" src="http://placehold.it/300x300"/></Column>
          <Column><img alt="" src="http://placehold.it/300x300"/></Column>
          <Column><img alt="" src="http://placehold.it/300x300"/></Column>
          <Column><img alt="" src="http://placehold.it/300x300"/></Column>
          <Column><img alt="" src="http://placehold.it/300x300"/></Column>
        </Row>
      </div>
    );
  }
}
