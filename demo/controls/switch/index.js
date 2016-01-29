import React, {Component} from 'react';

import {Switch} from '../../../src';

export default class SwitchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };
  }

  handleChange = () => {
    const {checked: currChecked} = this.state;
    const checked = !currChecked;

    this.setState({checked});
  };

  render() {
    const {checked} = this.state;

    return (
      <div>
        <Switch checked={checked} id='mySwitch' onChange={this.handleChange}/>
        <br/>
        <Switch checked={checked} onChange={this.handleChange}/>
        <br/>
        <Switch defaultChecked/>
        <br/>
        <Switch size='tiny'/>
        <br/>
        <Switch size='small'/>
        <br/>
        <Switch size='large'/>
        <br/>
        <Switch checkedLabel='Yes' paddleLabel='Do you like me?' uncheckedLabel='No'/>
      </div>
    );
  }
}
