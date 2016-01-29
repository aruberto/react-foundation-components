import React, {Component} from 'react';

import {CloseButton} from '../../../src';

export default class CloseButtonPage extends Component {
  render() {
    return (
      <div>
        <CloseButton style={{top: '100px'}}>+</CloseButton>
        <CloseButton aria-label='Close Alert' style={{top: '200px'}}/>
      </div>
    );
  }
}
