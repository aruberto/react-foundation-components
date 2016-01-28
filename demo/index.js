import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';
import {createHistory} from 'history';

import '../src/theme.scss';
import BaseTypographyPage from './typography/base';
import GridPage from './general/grid';
import FlexGridPage from './general/flex-grid';
import VisibilityPage from './general/visibility';
import FloatPage from './general/float';
import ButtonPage from './controls/button';

const history = createHistory();

class HomePage extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        <Link to='/typography/base'>Base Typography</Link>
        &nbsp;|&nbsp;
        <Link to='/general/grid'>Grid</Link>
        &nbsp;|&nbsp;
        <Link to='/general/flex-grid'>Flex Grid</Link>
        &nbsp;|&nbsp;
        <Link to='/general/visibility'>Visibility</Link>
        &nbsp;|&nbsp;
        <Link to='/general/float'>Float</Link>
        &nbsp;|&nbsp;
        <Link to='/controls/button'>Button</Link>
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
          <Route component={BaseTypographyPage} path='/typography/base'/>
          <Route component={GridPage} path='/general/grid'/>
          <Route component={FlexGridPage} path='/general/flex-grid'/>
          <Route component={VisibilityPage} path='/general/visibility'/>
          <Route component={FloatPage} path='/general/float'/>
          <Route component={ButtonPage} path='/controls/button'/>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('app'));
