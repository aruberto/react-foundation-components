import React, { Component } from 'react';

import { FlexParent, FlexChild } from '../../../src/flex';

const style = { minWidth: '250px', borderStyle: 'solid' };

export default class FlexPage extends Component {
  render() {
    return (
      <div>
        <FlexParent>
          <FlexChild style={style}>Aligned to</FlexChild>
          <FlexChild style={style}>the left</FlexChild>
        </FlexParent>
        <br/>
        <FlexParent horizontalAlignment="right">
          <FlexChild style={style}>Aligned to</FlexChild>
          <FlexChild style={style}>the right</FlexChild>
        </FlexParent>
        <br/>
        <FlexParent horizontalAlignment="center">
          <FlexChild style={style}>Aligned to</FlexChild>
          <FlexChild style={style}>the center</FlexChild>
        </FlexParent>
        <br/>
        <FlexParent horizontalAlignment="justify">
          <FlexChild style={style}>Aligned to</FlexChild>
          <FlexChild style={style}>the edges</FlexChild>
        </FlexParent>
        <br/>
        <FlexParent horizontalAlignment="spaced">
          <FlexChild style={style}>Aligned to</FlexChild>
          <FlexChild style={style}>the space around</FlexChild>
        </FlexParent>
        <br/>
        <FlexParent smallHorizontalAlignment="center" largeHorizontalAlignment="justify">
          <FlexChild style={style}>Aligned to</FlexChild>
          <FlexChild style={style}>the center on small, the edges on large</FlexChild>
        </FlexParent>
        <br/>
        <FlexParent verticalAlignment="top">
          <FlexChild style={style}>I'm at the top!</FlexChild>
          <FlexChild style={style}>
            I am as well, but I have so much text I take up more space! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quis facere ducimus earum minus, inventore, ratione
            doloremque deserunt neque perspiciatis accusamus explicabo soluta, quod provident
            distinctio aliquam omnis? Labore, ullam possimus.
          </FlexChild>
        </FlexParent>
        <br/>
        <FlexParent verticalAlignment="middle">
          <FlexChild style={style}>I'm in the middle!</FlexChild>
          <FlexChild style={style}>
            I am as well, but I have so much text I take up more space! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quis facere ducimus earum minus, inventore, ratione
            doloremque deserunt neque perspiciatis accusamus explicabo soluta, quod provident
            distinctio aliquam omnis? Labore, ullam possimus.
          </FlexChild>
        </FlexParent>
        <br/>
        <FlexParent verticalAlignment="bottom">
          <FlexChild style={style}>I'm at the bottom!</FlexChild>
          <FlexChild style={style}>
            I am as well, but I have so much text I take up more space! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quis facere ducimus earum minus, inventore, ratione
            doloremque deserunt neque perspiciatis accusamus explicabo soluta, quod provident
            distinctio aliquam omnis? Labore, ullam possimus.
          </FlexChild>
        </FlexParent>
        <br/>
        <FlexParent verticalAlignment="stretch">
          <FlexChild style={style}>These colums have the same height.</FlexChild>
          <FlexChild style={style}>
            That's right, equal-height columns are possible with Flexbox too! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Voluptatum, tempora. Impedit eius officia possimus
            laudantium? Molestiae eaque, sapiente atque doloremque placeat! In sint, fugiat saepe
            sunt dolore tempore amet cupiditate.
          </FlexChild>
        </FlexParent>
        <br/>
        <FlexParent smallVerticalAlignment="top" largeVerticalAlignment="bottom">
          <FlexChild style={style}>I'm at the top on small, at the bottom on large!</FlexChild>
          <FlexChild style={style}>
            I am as well, but I have so much text I take up more space! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quis facere ducimus earum minus, inventore, ratione
            doloremque deserunt neque perspiciatis accusamus explicabo soluta, quod provident
            distinctio aliquam omnis? Labore, ullam possimus.
          </FlexChild>
        </FlexParent>
        <br/>
        <FlexParent>
          <FlexChild verticalAlignment="bottom" style={style}>Align bottom</FlexChild>
          <FlexChild verticalAlignment="middle" style={style}>Align middle</FlexChild>
          <FlexChild verticalAlignment="top" style={style}>
            Align top. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non harum laborum
            cum voluptate vel, eius adipisci similique dignissimos nobis at excepturi incidunt fugit
            molestiae quaerat, consequuntur porro temporibus. Nisi, ex?
          </FlexChild>
        </FlexParent>
        <br/>
        <FlexParent>
          <FlexChild smallVerticalAlignment="bottom" largeVerticalAlignment="middle" style={style}>
            Align bottom on small, middle on large
          </FlexChild>
          <FlexChild smallVerticalAlignment="middle" largeVerticalAlignment="bottom" style={style}>
            Align middle on small, bottom on large
          </FlexChild>
          <FlexChild verticalAlignment="top" style={style}>
            Align top. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non harum laborum
            cum voluptate vel, eius adipisci similique dignissimos nobis at excepturi incidunt fugit
            molestiae quaerat, consequuntur porro temporibus. Nisi, ex?
          </FlexChild>
        </FlexParent>
        <br/>
        <FlexParent>
          <FlexChild smallOrder={2} mediumOrder={1} style={style}>
            This column will come second on small, and first on medium and larger.
          </FlexChild>
          <FlexChild smallOrder={1} mediumOrder={2} style={style}>
            This column will come first on small, and second on medium and larger.
          </FlexChild>
        </FlexParent>
      </div>
    );
  }
}
