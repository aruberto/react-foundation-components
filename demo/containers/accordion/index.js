import React, {Component} from 'react';

import {Accordion, AccordionItem} from '../../../src';

export default class AccordionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  handleClick = () => {
    const {show: prevShow} = this.state;
    const show = !prevShow;

    this.setState({show});
  };

  render() {
    const {show} = this.state;

    return (
      <div>
        <button onClick={this.handleClick} type='button'>Toggle</button>
        <br/>
        <Accordion>
          <AccordionItem active={show} title='Title 1'>
            Item 1
          </AccordionItem>
          <AccordionItem title='Title 2'>
            Item 2
          </AccordionItem>
          <AccordionItem title='Title 3'>
            Item 3
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}
