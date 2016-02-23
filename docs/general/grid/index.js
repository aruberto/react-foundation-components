import React, { Component } from 'react';

import {
  FloatRow as Row,
  FloatColumn as Column,
  ShowForScreenSize,
  ShowOnlyForScreenSize,
} from '../../../src';

const style = { borderStyle: 'solid' };

export default class GridPage extends Component {
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
          <Column small={8} style={style}>
            8
            <Row>
              <Column small={8} style={style}>
                8 Nested
                <Row>
                  <Column small={8} style={style}>8 Nested Again</Column>
                  <Column small={4} style={style}>4</Column>
                </Row>
              </Column>
              <Column small={4} style={style}>4</Column>
            </Row>
          </Column>
          <Column small={4} style={style}>4</Column>
        </Row>
        <br/>
        <Row>
          <Column large={1} style={style}>1</Column>
          <Column large={11} style={style}>11</Column>
        </Row>
        <Row>
          <Column large={1} style={style}>1</Column>
          <Column large={10} largeOffset={1} style={style}>10, offset 1</Column>
        </Row>
        <Row>
          <Column large={1} style={style}>1</Column>
          <Column large={9} largeOffset={2} style={style}>9, offset 2</Column>
        </Row>
        <Row>
          <Column large={1} style={style}>1</Column>
          <Column large={8} largeOffset={3} style={style}>8, offset 3</Column>
        </Row>
        <br/>
        <Row>
          <Column medium={3} style={style}>3</Column>
          <Column medium={3} style={style}>3</Column>
          <Column medium={3} style={style}>3</Column>
        </Row>
        <Row>
          <Column medium={3} style={style}>3</Column>
          <Column medium={3} style={style}>3</Column>
          <Column end medium={3} style={style}>3 end</Column>
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
          <Column small={3} smallCentered style={style}>3 centered</Column>
        </Row>
        <Row>
          <Column largeCentered small={6} style={style}>6 centered large</Column>
        </Row>
        <Row>
          <Column largeUncentered small={9} smallCentered style={style}>9 centered small</Column>
        </Row>
        <Row>
          <Column small={11} smallCentered style={style}>11 centered</Column>
        </Row>
        <br/>
        <Row>
          <Column small={10} smallPush={2} style={style}>10</Column>
          <Column small={2} smallPull={10} style={style}>2, last</Column>
        </Row>
        <Row>
          <Column large={9} largePush={3} style={style}>9</Column>
          <Column large={3} largePull={9} style={style}>3, last</Column>
        </Row>
        <Row>
          <Column large={8} largePush={4} style={style}>8</Column>
          <Column large={4} largePull={8} style={style}>4, last</Column>
        </Row>
        <Row>
          <Column medium={7} mediumPush={5} small={5} smallPush={7} style={style}>7</Column>
          <Column medium={5} mediumPull={7} small={7} smallPull={5} style={style}>5, last</Column>
        </Row>
        <br/>
        <Row largeUp={4} mediumUp={2} smallUp={1}>
          <Column style={style}><img alt="" src="http://placehold.it/300x300"/></Column>
          <Column style={style}><img alt="" src="http://placehold.it/300x300"/></Column>
          <Column style={style}><img alt="" src="http://placehold.it/300x300"/></Column>
          <Column style={style}><img alt="" src="http://placehold.it/300x300"/></Column>
          <Column style={style}><img alt="" src="http://placehold.it/300x300"/></Column>
          <Column style={style}><img alt="" src="http://placehold.it/300x300"/></Column>
        </Row>
      </div>
    );
  }
}
