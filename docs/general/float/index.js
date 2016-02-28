import React, { Component } from 'react';

import { Float, ClearFix } from '../../../src/float';

export default class FloatPage extends Component {
  render() {
    return (
      <div>
        <Float position="left">Left</Float>
        <br/>
        <Float position="right">Right</Float>
        <br/>
        <ClearFix style={{ borderStyle: 'solid' }}>
          <Float position="left">Left</Float>
          <Float position="right">Right</Float>
        </ClearFix>
        <br/>
        <Float position="center">
          <img src="http://foundation.zurb.com/sites/docs/assets/img/voyager.jpg"/>
        </Float>
      </div>
    );
  }
}
