import React, {Component} from 'react';

import {Switch} from '../../../src';

export default class SwitchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: true
    };
  }

  handleToggle = () => {
    const {value: currValue} = this.state;
    const value = !currValue;

    this.setState({value});
  };

  render() {
    const {value} = this.state;

    return (
      <div>
        <Switch id='asda' onToggle={this.handleToggle} value={value}/>
        <br/>
        <Switch onToggle={this.handleToggle} value={value}/>
        <br/>
        <Switch onToggle={this.handleToggle} size='tiny' value={value}/>
        <br/>
        <Switch onToggle={this.handleToggle} size='small' value={value}/>
        <br/>
        <Switch onToggle={this.handleToggle} size='large' value={value}/>
      </div>
    );
  }
}
