import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Button from '../src/button';

class Demo extends Component {
  render() {
    return (
      <div>
        <Button/>
      </div>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('app'));
