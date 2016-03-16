import React, { Component } from 'react';

import { Accordion, AccordionItem } from '../../../src/accordion';

export default class AccordionPage extends Component {
  state = {
    activeKey: '1',
    activeKeys: ['1', '3'],
  };

  handleSingleSelect = (activeKey) => this.setState({ activeKey });

  handleMultiSelect = (activeKeys) => this.setState({ activeKeys });

  render() {
    const { activeKey, activeKeys } = this.state;

    return (
      <div>
        <h4>Controlled Single Select</h4>
        <Accordion activeKey={activeKey} onSelect={this.handleSingleSelect}>
          <AccordionItem eventKey="1" title="Accordion 1">
            Panel 1. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="2" title="Accordion 2">
            Panel 2. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="3" title="Accordion 3">
            Panel 3. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="4" title="Accordion 4">
            Panel 4. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="5" title="Accordion 5">
            Panel 5. Lorem ipsum dolor.
          </AccordionItem>
        </Accordion>
        <br />
        <h4>Controlled Multi Select</h4>
        <Accordion activeKey={activeKeys} onSelect={this.handleMultiSelect} multiExpand>
          <AccordionItem eventKey="1" title="Accordion 1">
            Panel 1. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="2" title="Accordion 2">
            Panel 2. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="3" title="Accordion 3">
            Panel 3. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="4" title="Accordion 4">
            Panel 4. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="5" title="Accordion 5">
            Panel 5. Lorem ipsum dolor.
          </AccordionItem>
        </Accordion>
        <br />
        <h4>Uncontrolled Single Select</h4>
        <Accordion>
          <AccordionItem eventKey="1" title="Accordion 1">
            Panel 1. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="2" title="Accordion 2">
            Panel 2. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="3" title="Accordion 3">
            Panel 3. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="4" title="Accordion 4">
            Panel 4. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="5" title="Accordion 5">
            Panel 5. Lorem ipsum dolor.
          </AccordionItem>
        </Accordion>
        <br />
        <h4>Uncontrolled Single Select With Default 3</h4>
        <Accordion defaultActiveKey="3">
          <AccordionItem eventKey="1" title="Accordion 1">
            Panel 1. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="2" title="Accordion 2">
            Panel 2. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="3" title="Accordion 3">
            Panel 3. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="4" title="Accordion 4">
            Panel 4. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="5" title="Accordion 5">
            Panel 5. Lorem ipsum dolor.
          </AccordionItem>
        </Accordion>
        <br />
        <h4>Uncontrolled Single Select Allowing All Closed</h4>
        <Accordion allowAllClosed>
          <AccordionItem eventKey="1" title="Accordion 1">
            Panel 1. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="2" title="Accordion 2">
            Panel 2. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="3" title="Accordion 3">
            Panel 3. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="4" title="Accordion 4">
            Panel 4. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="5" title="Accordion 5">
            Panel 5. Lorem ipsum dolor.
          </AccordionItem>
        </Accordion>
        <br />
        <h4>Uncontrolled Multi Select</h4>
        <Accordion multiExpand>
          <AccordionItem eventKey="1" title="Accordion 1">
            Panel 1. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="2" title="Accordion 2">
            Panel 2. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="3" title="Accordion 3">
            Panel 3. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="4" title="Accordion 4">
            Panel 4. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="5" title="Accordion 5">
            Panel 5. Lorem ipsum dolor.
          </AccordionItem>
        </Accordion>
        <br />
        <h4>Uncontrolled Multi Select With 2 And 4 Defaults</h4>
        <Accordion defaultActiveKey={['2', '4']} multiExpand>
          <AccordionItem eventKey="1" title="Accordion 1">
            Panel 1. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="2" title="Accordion 2">
            Panel 2. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="3" title="Accordion 3">
            Panel 3. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="4" title="Accordion 4">
            Panel 4. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="5" title="Accordion 5">
            Panel 5. Lorem ipsum dolor.
          </AccordionItem>
        </Accordion>
        <br />
        <h4>Uncontrolled Multi Select Allowing All Closed</h4>
        <Accordion allowAllClosed multiExpand>
          <AccordionItem eventKey="1" title="Accordion 1">
            Panel 1. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="2" title="Accordion 2">
            Panel 2. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="3" title="Accordion 3">
            Panel 3. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="4" title="Accordion 4">
            Panel 4. Lorem ipsum dolor.
          </AccordionItem>
          <AccordionItem eventKey="5" title="Accordion 5">
            Panel 5. Lorem ipsum dolor.
          </AccordionItem>
        </Accordion>
        <br />
      </div>
    );
  }
}
