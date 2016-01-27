import React, {Component} from 'react';

import {Button, ShowOnlyForScreenReader, HideOnlyForScreenReader} from '../../src';

export default class ButtonPage extends Component {
  render() {
    return (
      <div>
        <Button href='about.html'>Learn More</Button>
        &nbsp;
        <Button href='#features'>View All Features</Button>
        &nbsp;
        <Button color='success'>Save</Button>
        &nbsp;
        <Button color='alert'>Delete</Button>
        <br/>
        <Button size='tiny'>So Tiny</Button>
        &nbsp;
        <Button size='small'>So Small</Button>
        &nbsp;
        <Button>So Basic</Button>
        &nbsp;
        <Button size='large'>So Large</Button>
        <br/>
        <Button expanded>Such Expand</Button>
        <br/>
        <Button expanded size='tiny'>Wow, Small Expand</Button>
        <br/>
        <Button color='secondary'>Secondary Color</Button>
        &nbsp;
        <Button color='success'>Success Color</Button>
        &nbsp;
        <Button color='alert'>Alert Color</Button>
        &nbsp;
        <Button color='warning'>Warning Color</Button>
        &nbsp;
        <Button disabled>Disabled Button</Button>
        <br/>
        <Button hollow>Primary Color</Button>
        &nbsp;
        <Button color='secondary' hollow>Secondary Color</Button>
        &nbsp;
        <Button color='success' hollow>Success Color</Button>
        &nbsp;
        <Button color='alert' hollow>Alert Color</Button>
        &nbsp;
        <Button color='warning' hollow>Warning Color</Button>
        <br/>
        <Button dropdown size='tiny'>Dropdown Button</Button>
        &nbsp;
        <Button dropdown size='small'>Dropdown Button</Button>
        &nbsp;
        <Button dropdown>Dropdown Button</Button>
        &nbsp;
        <Button dropdown size='large'>Dropdown Button</Button>
        <br/>
        <Button dropdown expanded>Dropdown Button</Button>
        <br/>
        <Button>
          <ShowOnlyForScreenReader>
            Close
          </ShowOnlyForScreenReader>
          <HideOnlyForScreenReader>
            &times;
          </HideOnlyForScreenReader>
        </Button>
      </div>
    );
  }
}
