import React, { Component } from 'react';

import { Tabs, Tab } from '../../../src/tabs';

export default class TabPage extends Component {
  state = {
    activeKey: '1',
  };

  handleSelect = (activeKey) => this.setState({ activeKey });

  render() {
    const { activeKey } = this.state;

    return (
      <div>
        <Tabs activeKey={activeKey} onSelect={this.handleSelect}>
          <Tab eventKey="1" title="Tab 1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Tab>
          <Tab eventKey="2" title="Tab 2">
            Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut
            eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non
            venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
          </Tab>
          <Tab eventKey="3" title="Tab 3">
            <img
              role="presentation"
              src="http://foundation.zurb.com/sites/docs/assets/img/rectangle-3.jpg"
            />
          </Tab>
          <Tab eventKey="4" title="Tab 4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Tab>
          <Tab eventKey="5" title="Tab 5">
            <img
              role="presentation"
              src="http://foundation.zurb.com/sites/docs/assets/img/rectangle-3.jpg"
            />
          </Tab>
          <Tab eventKey="6" title="Tab 6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Tab>
        </Tabs>
        <br />
        <Tabs defaultActiveKey="3">
          <Tab eventKey="1" id="tab1" title="Tab 1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Tab>
          <Tab eventKey="2" id="tab2" title="Tab 2">
            Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut
            eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non
            venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
          </Tab>
          <Tab eventKey="3" id="tab3" title="Tab 3">
            <img
              role="presentation"
              src="http://foundation.zurb.com/sites/docs/assets/img/rectangle-3.jpg"
            />
          </Tab>
          <Tab eventKey="4" id="tab4" title="Tab 4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Tab>
          <Tab eventKey="5" id="tab5" title="Tab 5">
            <img
              role="presentation"
              src="http://foundation.zurb.com/sites/docs/assets/img/rectangle-3.jpg"
            />
          </Tab>
          <Tab eventKey="6" id="tab6" title="Tab 6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Tab>
        </Tabs>
        <br />
        <Tabs defaultActiveKey="2" vertical>
          <Tab eventKey="1" title="Tab 1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Tab>
          <Tab eventKey="2" title="Tab 2">
            Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut
            eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non
            venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
          </Tab>
          <Tab eventKey="3" title="Tab 3">
            <img
              role="presentation"
              src="http://foundation.zurb.com/sites/docs/assets/img/rectangle-3.jpg"
            />
          </Tab>
          <Tab eventKey="4" title="Tab 4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Tab>
          <Tab eventKey="5" title="Tab 5">
            <img
              role="presentation"
              src="http://foundation.zurb.com/sites/docs/assets/img/rectangle-3.jpg"
            />
          </Tab>
          <Tab eventKey="6" title="Tab 6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Tab>
        </Tabs>
      </div>
    );
  }
}
