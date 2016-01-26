import React, {Component} from 'react';

import {Button, Visibility} from '../../src';

export default class ButtonPage extends Component {
  render() {
    return (
      <div>
        <Button href='about.html'>Learn More</Button>
        &nbsp;
        <Button href='#features'>View All Features</Button>
        &nbsp;
        <Button fType='success'>Save</Button>
        &nbsp;
        <Button fType='alert'>Delete</Button>
        <br/>
        <Button fSize='tiny'>So Tiny</Button>
        &nbsp;
        <Button fSize='small'>So Small</Button>
        &nbsp;
        <Button>So Basic</Button>
        &nbsp;
        <Button fSize='large'>So Large</Button>
        <br/>
        <Button expanded>Such Expand</Button>
        <br/>
        <Button expanded fSize='tiny'>Wow, Small Expand</Button>
        <br/>
        <Button fType='secondary'>Secondary Color</Button>
        &nbsp;
        <Button fType='success'>Success Color</Button>
        &nbsp;
        <Button fType='alert'>Alert Color</Button>
        &nbsp;
        <Button fType='warning'>Warning Color</Button>
        &nbsp;
        <Button disabled>Disabled Button</Button>
        <br/>
        <Button hollow>Primary Color</Button>
        &nbsp;
        <Button fType='secondary' hollow>Secondary Color</Button>
        &nbsp;
        <Button fType='success' hollow>Success Color</Button>
        &nbsp;
        <Button fType='alert' hollow>Alert Color</Button>
        &nbsp;
        <Button fType='warning' hollow>Warning Color</Button>
        <br/>
        <Button dropdown fSize='tiny'>Dropdown Button</Button>
        &nbsp;
        <Button dropdown fSize='small'>Dropdown Button</Button>
        &nbsp;
        <Button dropdown>Dropdown Button</Button>
        &nbsp;
        <Button dropdown fSize='large'>Dropdown Button</Button>
        <br/>
        <Button dropdown expanded>Dropdown Button</Button>
        <br/>
        <Button>
          <Visibility showForScreenReaderOnly>
            Close
          </Visibility>
          <Visibility hideForScreenReaderOnly>
            X
          </Visibility>
        </Button>
      </div>
    );
  }
}
