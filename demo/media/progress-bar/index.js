import React, {Component} from 'react';

import {ProgressBar} from '../../../src';

function labelFormatter(percent) {
  return `${percent}%`;
}

export default class ProgressBarPage extends Component {
  render() {
    return (
      <div>
        <ProgressBar/>
        <ProgressBar value={25}/>
        <ProgressBar value={50}/>
        <ProgressBar value={75}/>
        <ProgressBar value={100}/>
        <ProgressBar max={200} min={50} value={100}/>
        <ProgressBar color='success' value={25}/>
        <ProgressBar color='warning' value={50}/>
        <ProgressBar color='alert' value={75}/>
        <ProgressBar color='secondary' value={100}/>
        <ProgressBar labelFormatter={labelFormatter}/>
        <ProgressBar labelFormatter={labelFormatter} value={25}/>
        <ProgressBar labelFormatter={labelFormatter} value={50}/>
        <ProgressBar labelFormatter={labelFormatter} value={75}/>
        <ProgressBar labelFormatter={labelFormatter} value={100}/>
        <ProgressBar labelFormatter={labelFormatter} max={200} min={50} value={100}/>
        <ProgressBar color='success' labelFormatter={labelFormatter} value={25}/>
        <ProgressBar color='warning' labelFormatter={labelFormatter} value={50}/>
        <ProgressBar color='alert' labelFormatter={labelFormatter} value={75}/>
        <ProgressBar color='secondary' labelFormatter={labelFormatter} value={100}/>
      </div>
    );
  }
}
