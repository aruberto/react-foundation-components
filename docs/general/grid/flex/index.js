import React, { Component } from 'react';

import { Row, Column } from '../../../../src/general/grid/flex';
import { ShowForScreenSize, ShowOnlyForScreenSize } from '../../../../src/general/visibility';

const style = { borderStyle: 'solid' };

export default class FlexGridPage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Column small={2} style={style}>2 Columns</Column>
          <Column small={10} style={style}>10 Columns</Column>
        </Row>
        <Row>
          <Column small={3} style={style}>3 Columns</Column>
          <Column small={9} style={style}>9 Columns</Column>
        </Row>
        <br/>
        <Row>
          <Column medium={2} style={style}>2 Columns</Column>
          <Column medium={10} style={style}>10 Columns</Column>
        </Row>
        <Row>
          <Column medium={3} style={style}>3 Columns</Column>
          <Column medium={9} style={style}>9 Columns</Column>
        </Row>
        <br/>
        <Row>
          <Column large={2} style={style}>2 Columns</Column>
          <Column large={10} style={style}>10 Columns</Column>
        </Row>
        <Row>
          <Column large={3} style={style}>3 Columns</Column>
          <Column large={9} style={style}>9 Columns</Column>
        </Row>
        <br/>
        <Row>
          <Column style={style} xlarge={2}>2 Columns</Column>
          <Column style={style} xlarge={10}>10 Columns</Column>
        </Row>
        <Row>
          <Column style={style} xlarge={3}>3 Columns</Column>
          <Column style={style} xlarge={9}>9 Columns</Column>
        </Row>
        <br/>
        <Row>
          <Column style={style} xxlarge={2}>2 Columns</Column>
          <Column style={style} xxlarge={10}>10 Columns</Column>
        </Row>
        <Row>
          <Column style={style} xxlarge={3}>3 Columns</Column>
          <Column style={style} xxlarge={9}>9 Columns</Column>
        </Row>
        <br/>
        <Row expanded>
          <Column small={2} style={style}>2 Columns</Column>
          <Column small={10} style={style}>10 Columns</Column>
        </Row>
        <br/>
        <Row>
          <Column small={4} style={style}>4 Columns</Column>
          <Column style={style}>Whatever's left!</Column>
        </Row>
        <Row>
          <Column small={4} style={style}>4 Columns</Column>
          <Column style={style}>Whatever's left!</Column>
          <Column style={style}>Whatever's left!</Column>
        </Row>
        <Row>
          <Column shrink style={style}>Shrink!</Column>
          <Column style={style}>Expand!</Column>
        </Row>
        <br/>
        <Row>
          <Column largeExpand small={12} style={style}>One</Column>
          <Column largeExpand small={12} style={style}>Two</Column>
          <Column largeExpand small={12} style={style}>Three</Column>
          <Column largeExpand small={12} style={style}>Four</Column>
          <Column largeExpand small={12} style={style}>Five</Column>
          <Column largeExpand small={12} style={style}>Six</Column>
        </Row>
        <br/>
        <Row mediumUnstack>
          <Column style={style}>One</Column>
          <Column style={style}>Two</Column>
          <Column style={style}>Three</Column>
          <Column style={style}>Four</Column>
          <Column style={style}>Five</Column>
          <Column style={style}>Six</Column>
        </Row>
        <br/>
        <Row>
          <Column small={4} style={style}>Aligned to</Column>
          <Column small={4} style={style}>the left</Column>
        </Row>
        <Row horizontalAlignment="right">
          <Column small={4} style={style}>Aligned to</Column>
          <Column small={4} style={style}>the right</Column>
        </Row>
        <Row horizontalAlignment="center">
          <Column small={4} style={style}>Aligned to</Column>
          <Column small={4} style={style}>the middle</Column>
        </Row>
        <Row horizontalAlignment="justify">
          <Column small={4} style={style}>Aligned to</Column>
          <Column small={4} style={style}>the edges</Column>
        </Row>
        <Row horizontalAlignment="spaced">
          <Column small={4} style={style}>Aligned to</Column>
          <Column small={4} style={style}>the space around</Column>
        </Row>
        <br/>
        <Row verticalAlignment="middle">
          <Column style={style}>I'm in the middle!</Column>
          <Column style={style}>
            I am as well, but I have so much text I take up more space! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quis facere ducimus earum minus, inventore, ratione
            doloremque deserunt neque perspiciatis accusamus explicabo soluta, quod provident
            distinctio aliquam omnis? Labore, ullam possimus.
          </Column>
        </Row>
        <Row verticalAlignment="stretch">
          <Column style={style}>These colums have the same height.</Column>
          <Column style={style}>
            That's right, equal-height columns are possible with Flexbox too! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Voluptatum, tempora. Impedit eius officia possimus
            laudantium? Molestiae eaque, sapiente atque doloremque placeat! In sint, fugiat saepe
            sunt dolore tempore amet cupiditate.
          </Column>
        </Row>
        <Row>
          <Column style={style} verticalAlignment="bottom">Align bottom.</Column>
          <Column style={style} verticalAlignment="middle">Align middle.</Column>
          <Column style={style} verticalAlignment="top">
            Align top. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non harum laborum
            cum voluptate vel, eius adipisci similique dignissimos nobis at excepturi incidunt fugit
            molestiae quaerat, consequuntur porro temporibus. Nisi, ex?
          </Column>
        </Row>
        <br/>
        <Row largeCollapse mediumUncollapse>
          <Column small={6} style={style}>
            <ShowOnlyForScreenSize size="small">
              On a small screen, I have gutters!
            </ShowOnlyForScreenSize>
            <ShowOnlyForScreenSize size="medium">
              On a medium screen, I have gutters!
            </ShowOnlyForScreenSize>
            <ShowForScreenSize size="large">
              On a large screen, I have no gutters!
            </ShowForScreenSize>
          </Column>
          <Column small={6} style={style}>
            <ShowOnlyForScreenSize size="small">
              On a small screen, I have gutters!
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
        <Row>
          <Column largeOffset={2} small={4} style={style}>Offset 2 on large</Column>
          <Column small={4} style={style}>4 columns</Column>
        </Row>
        <br/>
        <Row>
          <Column mediumOrder={1} smallOrder={2} style={style}>
            This column will come second on small, and first on medium and larger.
          </Column>
          <Column mediumOrder={2} smallOrder={1} style={style}>
            This column will come first on small, and second on medium and larger.
          </Column>
        </Row>
        <br/>
        <Row smallUp={1} mediumUp={2} largeUp={3}>
          <Column style={style}>1 per row on small</Column>
          <Column style={style}>2 per row on medium</Column>
          <Column style={style}>3 per row on large</Column>
        </Row>
      </div>
    );
  }
}
