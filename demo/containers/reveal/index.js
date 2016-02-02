import React, {Component} from 'react';

import {Reveal} from '../../../src';

export default class RevealPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  handleToggle = () => {
    const {show: prevShow} = this.state;
    const show = !prevShow;

    this.setState({show});
  };

  render() {
    const {show} = this.state;

    return (
      <div>
        <button onClick={this.handleToggle} type='button'>Show</button>
        <Reveal show={show}>
          This is a controlled reveal!
        </Reveal>
      </div>
    );
  }
}
