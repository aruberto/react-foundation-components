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
        <Switch checked={checked} onChange={this.handleChange}/>
        <Switch defaultChecked/>
        <Switch size='tiny'/>
        <Switch size='small'/>
        <Switch size='large'/>
        <Switch checkedLabel='Yes' paddleLabel='Do you like me?' uncheckedLabel='No'/>
        <RadioSwitch activeKey={activeKey} onSelect={this.handleSelect}>
          <Switch eventKey='1'/>
          <Switch eventKey='2'/>
          <Switch eventKey='3'/>
        </RadioSwitch>
        <RadioSwitch defaultActiveKey='2'>
          <Switch eventKey='1'/>
          <Switch eventKey='2'/>
          <Switch eventKey='3'/>
        </RadioSwitch>
        <RadioSwitch defaultActiveKey='1' size='tiny'>
          <Switch eventKey='1'/>
          <Switch eventKey='2'/>
          <Switch eventKey='3'/>
        </RadioSwitch>
        <RadioSwitch defaultActiveKey='2' size='small'>
          <Switch eventKey='1'/>
          <Switch eventKey='2'/>
          <Switch eventKey='3'/>
        </RadioSwitch>
        <RadioSwitch defaultActiveKey='3' size='large'>
          <Switch eventKey='1'/>
          <Switch eventKey='2'/>
          <Switch eventKey='3'/>
        </RadioSwitch>
      </div>
    );
  }
}
