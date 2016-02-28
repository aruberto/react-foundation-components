import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../../lib/_typography.scss';

import {
  Button,
} from '../../lib/button';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to CSS Modules example!</h1>
        <br/>
        <div>
          <h3>Button</h3>
          <Button>Click Me!</Button>
        </div>
        <div>
          <h3>Button</h3>
          <Button>Click Me!</Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
