import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Demo extends Component {
  render() {
    return (
      <div>Hello World!</div>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('app'));
