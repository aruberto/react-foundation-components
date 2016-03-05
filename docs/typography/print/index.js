import React, { Component } from 'react';

import { ShowForPrint, HideForPrint } from '../../../src/print';

export default class PrintPage extends Component {
  render() {
    return (
      <div>
        <ShowForPrint>You can see me when printing!</ShowForPrint>
        <br/>
        <HideForPrint>You can not see me when printing!</HideForPrint>
      </div>
    );
  }
}
