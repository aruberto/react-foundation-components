import React, {Component} from 'react';

import {Switch} from '../../../src';

export default class SwitchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };
  }

  handleToggle = () => {
    const {checked: currChecked} = this.state;
    const checked = !currChecked;

    this.setState({checked});
  };

  render() {
    const {checked} = this.state;

    return (
      <div>
        <Switch checked={checked} id='mySwitch' onToggle={this.handleToggle}/>
        <br/>
        <Switch checked={checked} onToggle={this.handleToggle}/>
        <br/>
        <Switch defaultChecked/>
        <br/>
        <Switch size='tiny'/>
        <br/>
        <Switch size='small'/>
        <br/>
        <Switch size='large'/>
      </div>
    );
  }
}
