import React, { Component } from 'react';

import { ShowOnlyForPrint, HideOnlyForPrint } from '../../../src/print';

export default class PrintPage extends Component {
  render() {
    return (
      <div>
        <ShowOnlyForPrint>You can see me when printing!</ShowOnlyForPrint>
        <br/>
        <HideOnlyForPrint>You can not see me when printing!</HideOnlyForPrint>
      </div>
    );
  }
}
