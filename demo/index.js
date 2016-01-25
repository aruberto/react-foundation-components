import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';
import {createHistory} from 'history';

import ButtonPage from './button';

const history = createHistory();

class HomePage extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        <Link to='/button'>Button</Link>
        <br/>
        {this.props.children}
      </div>
    );
  }
}

class Demo extends Component {
  render() {
    return (
      <Router history={history}>
        <Route component={HomePage} path='/'>
          <Route component={ButtonPage} path='/button'/>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('app'));
