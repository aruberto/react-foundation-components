import React, {Component} from 'react';

import {Switch, RadioSwitch} from '../../../src';

export default class SwitchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
      activeKey: '3'
    };
  }

  handleChange = () => {
    const {checked: currChecked} = this.state;
    const checked = !currChecked;

    this.setState({checked});
  };

  handleSelect = (activeKey) => this.setState({activeKey});

  render() {
    const {activeKey, checked} = this.state;

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
        <br/>
        <RadioSwitch activeKey={activeKey} onSelect={this.handleSelect}>
          <Switch eventKey='1'/>
          <br/>
          <Switch eventKey='2'/>
          <br/>
          <Switch eventKey='3'/>
        </RadioSwitch>
        <br/>
        <RadioSwitch defaultActiveKey='2'>
          <Switch eventKey='1'/>
          <br/>
          <Switch eventKey='2'/>
          <br/>
          <Switch eventKey='3'/>
        </RadioSwitch>
        <br/>
        <RadioSwitch defaultActiveKey='1' size='tiny'>
          <Switch eventKey='1'/>
          <br/>
          <Switch eventKey='2'/>
          <br/>
          <Switch eventKey='3'/>
        </RadioSwitch>
        <br/>
        <RadioSwitch defaultActiveKey='2' size='small'>
          <Switch eventKey='1'/>
          <br/>
          <Switch eventKey='2'/>
          <br/>
          <Switch eventKey='3'/>
        </RadioSwitch>
        <br/>
        <RadioSwitch defaultActiveKey='3' size='large'>
          <Switch eventKey='1'/>
          <br/>
          <Switch eventKey='2'/>
          <br/>
          <Switch eventKey='3'/>
        </RadioSwitch>
      </div>
    );
  }
}
