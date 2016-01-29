import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';
import {createHistory} from 'history';

import '../src/theme.scss';
import GridPage from './general/grid';
import FlexGridPage from './general/flex-grid';
import VisibilityPage from './general/visibility';
import FloatPage from './general/float';
import BaseTypographyPage from './typography/base';
import TypographyHelpersPage from './typography/helpers';
import TextAlignmentPage from './typography/text-alignment';
import ButtonPage from './controls/button';
import ButtonGroupPage from './controls/button-group';

const history = createHistory();

class HomePage extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        <Link to='/general/grid'>Grid</Link>
        &nbsp;|&nbsp;
        <Link to='/general/flex-grid'>Flex Grid</Link>
        &nbsp;|&nbsp;
        <Link to='/general/visibility'>Visibility</Link>
        &nbsp;|&nbsp;
        <Link to='/general/float'>Float</Link>
        &nbsp;|&nbsp;
        <Link to='/typography/base'>Base Typography</Link>
        &nbsp;|&nbsp;
        <Link to='/typography/helpers'>Typography Helpers</Link>
        &nbsp;|&nbsp;
        <Link to='/typography/text-alignment'>Text Alignment</Link>
        &nbsp;|&nbsp;
        <Link to='/controls/button'>Button</Link>
        &nbsp;|&nbsp;
        <Link to='/controls/button-group'>Button Group</Link>
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
          <Route component={GridPage} path='/general/grid'/>
          <Route component={FlexGridPage} path='/general/flex-grid'/>
          <Route component={VisibilityPage} path='/general/visibility'/>
          <Route component={FloatPage} path='/general/float'/>
          <Route component={BaseTypographyPage} path='/typography/base'/>
          <Route component={TypographyHelpersPage} path='/typography/helpers'/>
          <Route component={TextAlignmentPage} path='/typography/text-alignment'/>
          <Route component={ButtonPage} path='/controls/button'/>
          <Route component={ButtonGroupPage} path='/controls/button-group'/>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('app'));
