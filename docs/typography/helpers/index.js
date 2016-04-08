import React from 'react';

import { Subheader, Lead, UnbulletedList, Statistic } from '../../../src/typography-helpers';

const TypographyHelpersPage = () => (
  <div>
    <Subheader>unspecified subheader</Subheader>
    <Subheader><h1>h1 subheader</h1></Subheader>
    <Subheader><h2>h2 subheader</h2></Subheader>
    <Subheader><h3>h3 subheader</h3></Subheader>
    <Subheader><h4>h4 subheader</h4></Subheader>
    <Subheader><h5>h5 subheader</h5></Subheader>
    <Subheader><h6>h6 subheader</h6></Subheader>
    <br />
    <Lead>What are your cats <em>really</em> dreaming about while they sleep?</Lead>
    <br />
    <br />
    <UnbulletedList>
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
    </UnbulletedList>
    <br />
    Days without merge conflict<Statistic>128</Statistic>
  </div>
);

export default TypographyHelpersPage;
