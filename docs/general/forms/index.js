import React, { Component } from 'react';

import {
  FormField,
  FormFieldInput,
  FormFieldLabel,
  FormFieldError,
  FormFieldGroup,
  FormFieldRight,
} from '../../../src/forms';
import { Button } from '../../../src/button';

export default class FormsPage extends Component {
  render() {
    return (
      <div>
        <FormField>
          <FormFieldLabel>Text</FormFieldLabel>
          <FormFieldInput defaultValue="XYZ"/>
          <FormFieldError>text error</FormFieldError>
        </FormField>
        <br/>
        <FormField>
          <FormFieldLabel>Text Multiline</FormFieldLabel>
          <FormFieldInput type="textarea" defaultValue="XYZ"/>
          <FormFieldError>text multiline error</FormFieldError>
        </FormField>
        <br/>
        <FormField>
          <FormFieldLabel>Select</FormFieldLabel>
          <FormFieldInput type="select">
            <option>ABC</option>
            <option>XYZ</option>
          </FormFieldInput>
          <FormFieldError>select error</FormFieldError>
        </FormField>
        <br/>
        <FormField>
          <FormFieldInput type="checkbox" defaultChecked/>
          <FormFieldLabel>Number</FormFieldLabel>
          <FormFieldError>number error</FormFieldError>
        </FormField>
        <br/>
        <FormField>
          <FormFieldLabel>Number</FormFieldLabel>
          <FormFieldInput type="number" defaultValue="12"/>
          <FormFieldError>number error</FormFieldError>
        </FormField>
        <br/>
        <FormField>
          <FormFieldLabel>Date</FormFieldLabel>
          <FormFieldInput type="date"/>
          <FormFieldError>date error</FormFieldError>
        </FormField>
        <br/>
        <FormField>
          <FormFieldLabel>Date</FormFieldLabel>
          <FormFieldInput type="time"/>
          <FormFieldError>time error</FormFieldError>
        </FormField>
        <br/>
        <FormField>
          <FormFieldLabel>Range</FormFieldLabel>
          <FormFieldInput type="range"/>
          <FormFieldError>range error</FormFieldError>
        </FormField>
        <br/>
        <FormField>
          <FormFieldLabel>Static</FormFieldLabel>
          <FormFieldInput type="static">XYZ</FormFieldInput>
          <FormFieldError>static error</FormFieldError>
        </FormField>
        <br/>
        <FormField error>
          <FormFieldLabel>Text</FormFieldLabel>
          <FormFieldInput defaultValue="XYZ"/>
          <FormFieldError>text error</FormFieldError>
        </FormField>
        <br/>
        <FormField error>
          <FormFieldLabel>Text Multiline</FormFieldLabel>
          <FormFieldInput type="textarea" defaultValue="XYZ"/>
          <FormFieldError>text multiline error</FormFieldError>
        </FormField>
        <br/>
        <FormField error>
          <FormFieldLabel>Select</FormFieldLabel>
          <FormFieldInput type="select">
            <option>ABC</option>
            <option>XYZ</option>
          </FormFieldInput>
          <FormFieldError>select error</FormFieldError>
        </FormField>
        <br/>
        <FormField error>
          <FormFieldLabel>Number</FormFieldLabel>
          <FormFieldInput type="number" defaultValue="12"/>
          <FormFieldError>number error</FormFieldError>
        </FormField>
        <br/>
        <FormField error>
          <FormFieldLabel>Date</FormFieldLabel>
          <FormFieldInput type="date"/>
          <FormFieldError>date error</FormFieldError>
        </FormField>
        <br/>
        <FormField error>
          <FormFieldLabel>Date</FormFieldLabel>
          <FormFieldInput type="time"/>
          <FormFieldError>time error</FormFieldError>
        </FormField>
        <br/>
        <FormField error>
          <FormFieldLabel>Range</FormFieldLabel>
          <FormFieldInput type="range"/>
          <FormFieldError>range error</FormFieldError>
        </FormField>
        <br/>
        <FormField error>
          <FormFieldLabel>Static</FormFieldLabel>
          <FormFieldInput type="static">XYZ</FormFieldInput>
          <FormFieldError>static error</FormFieldError>
        </FormField>
        <br/>
        <FormField>
          <FormFieldGroup>
            <FormFieldLabel>Text</FormFieldLabel>
            <FormFieldInput defaultValue="XYZ"/>
            <FormFieldRight><Button>Click</Button></FormFieldRight>
          </FormFieldGroup>
          <FormFieldError>text error</FormFieldError>
        </FormField>
        <br/>
        <FormField error>
          <FormFieldGroup>
            <FormFieldLabel>Text</FormFieldLabel>
            <FormFieldInput defaultValue="XYZ"/>
            <FormFieldRight><Button>Click</Button></FormFieldRight>
          </FormFieldGroup>
          <FormFieldError>text error</FormFieldError>
        </FormField>
        <br/>
      </div>
    );
  }
}
