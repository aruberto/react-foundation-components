import React, { Component } from 'react';

import {
  Switch,
  RadioSwitch,
  SwitchCheckedLabel,
  SwitchUncheckedLabel,
  SwitchPadelLabel,
} from '../../../src/switch';

export default class SwitchPage extends Component {
  state = {
    checked: false,
    activeKey: null,
  };

  handleToggle = () => this.setState({ checked: !this.state.checked });

  handleSelect = (activeKey) => this.setState({ activeKey });

  render() {
    const { activeKey, checked } = this.state;

    return (
      <div>
        <h1>Switch</h1>
        <p>
          Now you can tell your users to flip the switch or switch off.
        </p>
        <hr />
        <h2>Basics</h2>
        <p>Importing the Switch components:</p>
        <pre>
          <code>
{
`// Import with local scoped class names (via CSS Modules)
import {
  Switch,
  RadioSwitch,
  SwitchCheckedLabel,
  SwitchUncheckedLabel,
  SwitchPadelLabel
} from 'react-foundation-components/lib/switch';

or

// Import with global scoped class names
import {
  Switch,
  RadioSwitch,
  SwitchCheckedLabel,
  SwitchUncheckedLabel,
  SwitchPadelLabel
} from 'react-foundation-components/lib/global/switch';`
}
          </code>
        </pre>
        <p>
          The Switch component behaves similiarly to a
          &nbsp;
          <a href="https://facebook.github.io/react/docs/forms.html">
            input of type checkbox.
          </a>
          &nbsp;
          By default, Switch is an uncontrolled input initially set to false. Set
          the <code>defaultChecked</code> prop to create an uncontrolled input initially set to
          true.
        </p>
        <pre>
          <code>
{
`<Switch />
<Switch defaultChecked />`
}
          </code>
        </pre>
        <Switch />
        <Switch defaultChecked />
        <p>
          Use the <code>checked</code> and <code>onToggle</code> props to create a controlled
          component.
        </p>
        <pre>
          <code>
{
`state = { checked: false };

handleToggle = () => this.setState({ checked: !this.state.checked });

render() {
  return <Switch checked={this.state.checked} onToggle={this.handleToggle} />;
}`
}
          </code>
        </pre>
        <Switch checked={checked} onToggle={this.handleToggle} />
        <hr />
        <h2>Sizing</h2>
        <p>
          Set the <code>size</code> prop to change switch size and shape. Possible values are tiny,
          small and large.
        </p>
        <pre>
          <code>
{
`<Switch size="tiny" />
<Switch size="small" />
<Switch />
<Switch size="large" />`
}
          </code>
        </pre>
        <Switch size="tiny" />
        <Switch size="small" />
        <Switch />
        <Switch size="large" />
        <hr />
        <h2>Accessibility</h2>
        <p>
          Provide an <code>id</code> so the Switch populates the for attribute of the Switch
          paddle/label. Declare SwitchPadelLabel component as a child to provide a label for screen
          readers.
        </p>
        <p>
          You can also place active and inactive text inside of the switch using
          the SwitchCheckedLabel and SwitchUncheckedLabel child components. These labels are
          hidden for screen readers.
        </p>
        <pre>
          <code>
{
`<Switch id="mySwitch">
  <SwitchPadelLabel>Do you like me?</SwitchPadelLabel>
  <SwitchCheckedLabel>Yes</SwitchCheckedLabel>
  <SwitchUncheckedLabel>No</SwitchUncheckedLabel>
</Switch>`
}
          </code>
        </pre>
        <Switch id="mySwitch">
          <SwitchPadelLabel>Do you like me?</SwitchPadelLabel>
          <SwitchCheckedLabel>Yes</SwitchCheckedLabel>
          <SwitchUncheckedLabel>No</SwitchUncheckedLabel>
        </Switch>
        <hr />
        <h2>Radio Switch</h2>
        <p>
          RadioSwitch component is a container for Switches. Switches contained in a RadioSwitch
          must set a unique <code>eventKey</code> prop so that RadioSwitch knows what switch
          is currently selected.
        </p>
        <p>
          By default, RadioSwitch is an uncontrolled input initially set to have nothing selected.
          Set the <code>defaultActiveKey</code> prop to some child <code>eventKey</code> value to
          create an uncontrolled input with that child initially selected.
        </p>
        <pre>
          <code>
{
`<RadioSwitch>
  <Switch eventKey="1" />
  <Switch eventKey="2" />
  <Switch eventKey="3" />
</RadioSwitch>`
}
          </code>
        </pre>
        <RadioSwitch>
          <Switch eventKey="1" />
          <Switch eventKey="2" />
          <Switch eventKey="3" />
        </RadioSwitch>
        <pre>
          <code>
{
`<RadioSwitch defaultActiveKey="2">
  <Switch eventKey="1" />
  <Switch eventKey="2" />
  <Switch eventKey="3" />
</RadioSwitch>`
}
          </code>
        </pre>
        <RadioSwitch defaultActiveKey="2">
          <Switch eventKey="1" />
          <Switch eventKey="2" />
          <Switch eventKey="3" />
        </RadioSwitch>
        <p>
          Use the <code>activeKey</code> and <code>onSelect</code> props to create a controlled
          component.
        </p>
        <pre>
          <code>
{
`state = { activeKey: null };

handleSelect = (activeKey) => this.setState({ activeKey });

render() {
  return (
    <RadioSwitch activeKey={this.state.activeKey} onSelect={this.handleSelect}>
      <Switch eventKey="1" />
      <Switch eventKey="2" />
      <Switch eventKey="3" />
    </RadioSwitch>
  );
}`
}
          </code>
        </pre>
        <RadioSwitch activeKey={activeKey} onSelect={this.handleSelect}>
          <Switch eventKey="1" />
          <Switch eventKey="2" />
          <Switch eventKey="3" />
        </RadioSwitch>
        <hr />
        <h2>Sizing</h2>
        <p>
          Set the <code>size</code> prop to change size and shape of all child switches. Possible
          values are tiny, small and large.
        </p>
        <pre>
          <code>
{
`<RadioSwitch size="tiny">
  <Switch eventKey="1" />
  <Switch eventKey="2" />
</RadioSwitch>
<RadioSwitch size="small">
  <Switch eventKey="1" />
  <Switch eventKey="2" />
</RadioSwitch>
<RadioSwitch>
  <Switch eventKey="1" />
  <Switch eventKey="2" />
</RadioSwitch>
<RadioSwitch size="large">
  <Switch eventKey="1" />
  <Switch eventKey="2" />
</RadioSwitch>`
}
          </code>
        </pre>
        <RadioSwitch size="tiny">
          <Switch eventKey="1" />
          <Switch eventKey="2" />
        </RadioSwitch>
        <RadioSwitch size="small">
          <Switch eventKey="1" />
          <Switch eventKey="2" />
        </RadioSwitch>
        <RadioSwitch>
          <Switch eventKey="1" />
          <Switch eventKey="2" />
        </RadioSwitch>
        <RadioSwitch size="large">
          <Switch eventKey="1" />
          <Switch eventKey="2" />
        </RadioSwitch>
      </div>
    );
  }
}
