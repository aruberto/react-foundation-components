import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Button from '../src/button';

class Demo extends Component {
  render() {
    return (
      <div>
        <Button>Default Button</Button>
        <br/>
        <Button className='hello-world'>Button With Class</Button>
        <br/>
        <Button fSize='tiny'>Tiny Button</Button>
        <br/>
        <Button fSize='small'>Small Button</Button>
        <br/>
        <Button fSize='large'>Large Button</Button>
        <br/>
        <Button expanded>Expanded Button</Button>
        <br/>
        <Button expanded fSize='tiny'>Tiny Expanded Button</Button>
        <br/>
        <Button fStyle='secondary'>Secondary Button</Button>
        <br/>
        <Button fStyle='success'>Success Button</Button>
        <br/>
        <Button fStyle='alert'>Alert Button</Button>
        <br/>
        <Button fStyle='warning'>Warning Button</Button>
        <br/>
        <Button disabled>Disabled Button</Button>
        <br/>
        <Button disabled fStyle='alert'>Disabled Alert Button</Button>
        <br/>
        <Button hollow>Hollow Button</Button>
        <br/>
        <Button fStyle='secondary' hollow>Hollow Secondary Button</Button>
        <br/>
        <Button fStyle='success' hollow>Hollow Success Button</Button>
        <br/>
        <Button fStyle='alert' hollow>Hollow Alert Button</Button>
        <br/>
        <Button fStyle='warning' hollow>Hollow Warning Button</Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('app'));
