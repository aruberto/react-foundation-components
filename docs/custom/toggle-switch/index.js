import React, { Component } from 'react';

import { ToggleSwitch, ToggleSwitchItem } from '../../../src/toggle-switch';

export default class ToggleSwitchPage extends Component {
  state = {
    activeKey: '3',
  };

  handleSelect = (activeKey) => this.setState({ activeKey });

  render() {
    const { activeKey } = this.state;

    return (
      <div>
        <h1>Toggle Switch</h1>
        <p>
          Toggle between a set of options.
        </p>
        <hr />
        <h2>Basics</h2>
        <p>
          <strong>
            This is a custom feature implemented in this library and will not work with stock
            Foundation stylesheet. Must use CSS Modules or import Foundation stylesheet from this
            library.
          </strong>
        </p>
        <p>Importing the ToggleSwitch components:</p>
        <pre>
          <code>
{
`// Import with local scoped class names (via CSS Modules)
import { ToggleSwitch, ToggleSwitchItem } from 'react-foundation-components/lib/toggle-switch';

or

// Import with global scoped class names
import {
  ToggleSwitch,
  ToggleSwitchItem,
} from 'react-foundation-components/lib/global/toggle-switch';`
}
          </code>
        </pre>
        <p>
          ToggleSwitch component is a component to toggle between a list of items. It is based
          on <a href="https://ghinda.net/css-toggle-switch/foundation.html">css-toggle-switch</a>.
          The ToggleSwitchItem components contained in a ToggleSwitch must set a
          unique <code>eventKey</code> prop so that ToggleSwitch knows what ToggleSwitchItem is
          currently selected.
        </p>
        <p>
          By default, ToggleSwitch is an uncontrolled input initially set to have nothing selected.
          Set the <code>defaultActiveKey</code> prop to some child <code>eventKey</code> value to
          create an uncontrolled input with that child initially selected.
        </p>
        <pre>
          <code>
{
`<ToggleSwitch>
  <ToggleSwitchItem eventKey="1">Hour</ToggleSwitchItem>
  <ToggleSwitchItem eventKey="2">Day</ToggleSwitchItem>
  <ToggleSwitchItem eventKey="3">Week</ToggleSwitchItem>
  <ToggleSwitchItem eventKey="4">Month</ToggleSwitchItem>
  <ToggleSwitchItem eventKey="5">Year</ToggleSwitchItem>
</ToggleSwitch>`
}
          </code>
        </pre>
        <ToggleSwitch>
          <ToggleSwitchItem eventKey="1">Hour</ToggleSwitchItem>
          <ToggleSwitchItem eventKey="2">Day</ToggleSwitchItem>
          <ToggleSwitchItem eventKey="3">Week</ToggleSwitchItem>
          <ToggleSwitchItem eventKey="4">Month</ToggleSwitchItem>
          <ToggleSwitchItem eventKey="5">Year</ToggleSwitchItem>
        </ToggleSwitch>
        <pre>
          <code>
{
`<ToggleSwitch defaultActiveKey="2">
  <ToggleSwitchItem eventKey="1">Hour</ToggleSwitchItem>
  <ToggleSwitchItem eventKey="2">Day</ToggleSwitchItem>
  <ToggleSwitchItem eventKey="3">Week</ToggleSwitchItem>
  <ToggleSwitchItem eventKey="4">Month</ToggleSwitchItem>
  <ToggleSwitchItem eventKey="5">Year</ToggleSwitchItem>
</ToggleSwitch>`
}
          </code>
        </pre>
        <ToggleSwitch defaultActiveKey="2">
          <ToggleSwitchItem eventKey="1">Hour</ToggleSwitchItem>
          <ToggleSwitchItem eventKey="2">Day</ToggleSwitchItem>
          <ToggleSwitchItem eventKey="3">Week</ToggleSwitchItem>
          <ToggleSwitchItem eventKey="4">Month</ToggleSwitchItem>
          <ToggleSwitchItem eventKey="5">Year</ToggleSwitchItem>
        </ToggleSwitch>
        <p>
          Use the <code>activeKey</code> and <code>onSelect</code> props to create a controlled
          component.
        </p>
        <pre>
          <code>
{
`state = { activeKey: '3' };

handleSelect = (activeKey) => this.setState({ activeKey });

render() {
  return (
    <ToggleSwitch activeKey={activeKey} onSelect={this.handleSelect}>
      <ToggleSwitchItem eventKey="1">Hour</ToggleSwitchItem>
      <ToggleSwitchItem eventKey="2">Day</ToggleSwitchItem>
      <ToggleSwitchItem eventKey="3">Week</ToggleSwitchItem>
      <ToggleSwitchItem eventKey="4">Month</ToggleSwitchItem>
      <ToggleSwitchItem eventKey="5">Year</ToggleSwitchItem>
    </ToggleSwitch>
  );
}`
}
          </code>
        </pre>
        <ToggleSwitch activeKey={activeKey} onSelect={this.handleSelect}>
          <ToggleSwitchItem eventKey="1">Hour</ToggleSwitchItem>
          <ToggleSwitchItem eventKey="2">Day</ToggleSwitchItem>
          <ToggleSwitchItem eventKey="3">Week</ToggleSwitchItem>
          <ToggleSwitchItem eventKey="4">Month</ToggleSwitchItem>
          <ToggleSwitchItem eventKey="5">Year</ToggleSwitchItem>
        </ToggleSwitch>
        <hr />
        <h2>Coloring</h2>
        <p>
          Give a ToggleSwitch additional meaning by setting the <code>color</code>
          and/or <code>paddleColor</code>. Possible values are primary, secondary, success, alert
          and warning.
        </p>
        <pre>
          <code>
{
`<ToggleSwitch defaultActiveKey="2" color="success" paddleColor="alert">
  <ToggleSwitchItem eventKey="1">Hour</ToggleSwitchItem>
  <ToggleSwitchItem eventKey="2">Day</ToggleSwitchItem>
  <ToggleSwitchItem eventKey="3">Week</ToggleSwitchItem>
  <ToggleSwitchItem eventKey="4">Month</ToggleSwitchItem>
  <ToggleSwitchItem eventKey="5">Year</ToggleSwitchItem>
</ToggleSwitch>`
}
          </code>
        </pre>
        <ToggleSwitch defaultActiveKey="2" color="success" paddleColor="alert">
          <ToggleSwitchItem eventKey="1">Hour</ToggleSwitchItem>
          <ToggleSwitchItem eventKey="2">Day</ToggleSwitchItem>
          <ToggleSwitchItem eventKey="3">Week</ToggleSwitchItem>
          <ToggleSwitchItem eventKey="4">Month</ToggleSwitchItem>
          <ToggleSwitchItem eventKey="5">Year</ToggleSwitchItem>
        </ToggleSwitch>
      </div>
    );
  }
}
