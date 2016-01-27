import React, {Component} from 'react';

import {Row, Column} from '../../src';

export default class GridPage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Column large={6} small={12}>
            Test
          </Column>
          <Column large={6} small={12}>
            Small/Large
          </Column>
        </Row>
        <Row fluid>Test Fluid</Row>
        <Row smallUp={6}>Test up</Row>
      </div>
    );
  }
}
