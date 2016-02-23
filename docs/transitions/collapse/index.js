import React, { Component } from 'react';

import { Collapse, Button } from '../../../src';

export default class CollapsePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleClick = () => {
    const { show: prevShow } = this.state;
    const show = !prevShow;

    this.setState({ show });
  };

  render() {
    const { show } = this.state;

    return (
      <div style={{ whiteSpace: 'nowrap' }}>
        <Button onClick={this.handleClick}>Toggle</Button>
        <br/>
        <Collapse in={show}>
          <div>
            Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica, craft beer labore wes
            anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
        <Collapse dimension="width" in={show}>
          <div>
            Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica, craft beer labore wes
            anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </div>
    );
  }
}
