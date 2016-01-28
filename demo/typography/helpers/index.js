import React, {Component} from 'react';

import {Subheader, Lead, UnBulletedList, Statistic} from '../../../src';

export default class TypographyHelpersPage extends Component {
  render() {
    return (
      <div>
        <Subheader>h1 subheader unspecified</Subheader>
        <Subheader><h1>h1 subheader</h1></Subheader>
        <Subheader><h2>h2 subheader</h2></Subheader>
        <Subheader><h3>h3 subheader</h3></Subheader>
        <Subheader><h4>h4 subheader</h4></Subheader>
        <Subheader><h5>h5 subheader</h5></Subheader>
        <Subheader><h6>h6 subheader</h6></Subheader>
        <br/>
        <Lead>What are your cats <em>really</em> dreaming about while they sleep?</Lead>
        <Lead><p>What are your cats <em>really</em> dreaming about while they sleep?</p></Lead>
        <br/>
        <UnBulletedList>
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
        </UnBulletedList>
        <br/>
        <p>Days without merge conflict</p><Statistic>128</Statistic>
      </div>
    );
  }
}
