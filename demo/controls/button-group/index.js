import React, {Component} from 'react';

import {Button, ButtonGroup, ShowOnlyForScreenReader} from '../../../src';

export default class ButtonGroupPage extends Component {
  render() {
    return (
      <div>
        <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <br/>
        <ButtonGroup size='small'>
          <Button>Small</Button>
          <Button>Button</Button>
          <Button>Group</Button>
        </ButtonGroup>
        <br/>
        <ButtonGroup>
          <Button color='primary'>Save</Button>
          <Button color='secondary'>View</Button>
          <Button color='success'>Edit</Button>
          <Button color='warning'>Share</Button>
          <Button color='alert'>Delete</Button>
        </ButtonGroup>
        <ButtonGroup color='secondary'>
          <Button>Harder</Button>
          <Button>Better</Button>
          <Button>Faster</Button>
          <Button>Stronger</Button>
        </ButtonGroup>
        <br/>
        <ButtonGroup expanded>
          {

            /*
              expanded button group currently only works with anchors.
              https://github.com/zurb/foundation-sites/issues/7844
             */
          }
          <Button href='#'>Expanded</Button>
          <Button href='#'>Button</Button>
          <Button href='#'>Group</Button>
        </ButtonGroup>
        <br/>
        <ButtonGroup stack='always'>
          <Button>How</Button>
          <Button>Low</Button>
          <Button>Can</Button>
          <Button>You</Button>
          <Button>Go</Button>
        </ButtonGroup>
        <ButtonGroup stack='small'>
          <Button>How</Button>
          <Button>Low</Button>
          <Button>Can</Button>
          <Button>You</Button>
          <Button>Go</Button>
        </ButtonGroup>
        <br/>
        <ButtonGroup>
          <Button>Primary Action</Button>
          <Button dropdown dropdownArrowOnly>
            <ShowOnlyForScreenReader>Show Menu</ShowOnlyForScreenReader>
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}
