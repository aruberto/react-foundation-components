import React, { Component } from 'react';

import {
  FormField,
  FormFieldInput,
  FormFieldLabel,
  FormFieldError,
  FormFieldHelp,
  FormFieldInline,
  FormFieldButton,
} from '../../../src/forms';
import {
  FormField as FlexFormField,
  FormFieldInput as FlexFormFieldInput,
  FormFieldLabel as FlexFormFieldLabel,
  FormFieldError as FlexFormFieldError,
  FormFieldHelp as FlexFormFieldHelp,
  FormFieldInline as FlexFormFieldInline,
  FormFieldButton as FlexFormFieldButton,
} from '../../../lib/forms-flex'; // eslint-disable-line import/no-unresolved
import { Row, Column } from '../../../src/grid';
import { Button } from '../../../src/button';

export default class FormsPage extends Component {
  state = {
    text: 'Controlled Default Value',
    error: false,
  };

  handleTextChange = (event) => this.setState({ text: event.target.value });

  handleToggleError = () => this.setState({ error: !this.state.error });

  render() {
    return (
      <div>
        <h1>Forms</h1>
        <p>
          Easy, powerful and versatile form layout system.
        </p>
        <h2>Basics</h2>
        <p>Importing the Form components:</p>
        <pre>
          <code>
{
`// Import with local scoped class names (via CSS Modules)
import {
  FormField,
  FormFieldInput,
  FormFieldLabel,
  FormFieldError,
  FormFieldInline,
  FormFieldButton,
} from 'react-foundation-components/lib/forms';

or

// Import with global scoped class names
import {
  FormField,
  FormFieldInput,
  FormFieldLabel,
  FormFieldError,
  FormFieldInline,
  FormFieldButton,
} from 'react-foundation-components/lib/global/forms';

or

// Import Flexbox version with local scoped class names (via CSS Modules)
import {
  FormField,
  FormFieldInput,
  FormFieldLabel,
  FormFieldError,
  FormFieldInline,
  FormFieldButton,
} from 'react-foundation-components/lib/forms/flex';

or

// Import Flexbox version with global scoped class names
import {
  FormField,
  FormFieldInput,
  FormFieldLabel,
  FormFieldError,
  FormFieldInline,
  FormFieldButton,
} from 'react-foundation-components/lib/global/forms/flex';`
}
          </code>
        </pre>
        <p>
          The FormField component is a container for all other components that make up a field on
          a form. The basic components include:
        </p>
        <ul>
          <li>
            FormFieldLabel - Contains label content. Based on TextAlignment component, thus can
            use all alignment props to alter position on inner content. Set the <code>middle</code>
            prop to vertically center label content.
          </li>
          <li>
            FormFieldInput - Wrapper around basic HTML input tag. If <code>type</code> prop is set
            to textarea, a textarea tag is rendered instead of an input tag.
            If <code>type</code> prop is set to select, a select tag is rendered instead of an
            input tag. Use the <code>value</code>, <code>checked</code>, <code>onChange</code>
            , <code>defaultValue</code> and/or <code>defaultChecked</code> props on FormFieldInput
            just as you would normally use it on React input.
          </li>
          <li>
            FormFieldError - Contains error information.
          </li>
          <li>
            FormFieldHelp - Contains help information.
          </li>
        </ul>
        <p>
          Set the <code>id</code> prop on FormField component will propogate the id to
          id of FormFieldInput component and htmlFor of FormFieldLabel component. This is important
          to set on checkbox and radio type inputs so that input is toggleable by clicking the
          label.
        </p>
        <p>
          Set the <code>error</code> prop on FormField component to show error styles on
          FormFieldInput and FormFieldLabel as well as make FormFieldError visible.
        </p>
        <pre>
          <code>
            {
`state = { text: 'Controlled Default Value', error: false };

handleTextChange = (event) => this.setState({ text: event.target.value });

handleToggleError = () => this.setState({ error: !this.state.error });

render() {
  return (
    <Button onClick={this.handleToggleError}>Toggle Error</Button>
    <FormField error={this.state.error}>
      <FormFieldLabel>Uncontrolled Text</FormFieldLabel>
      <FormFieldInput defaultValue="Uncontrolled Default Value" />
      <FormFieldError>Uncontrolled Text Error</FormFieldError>
      <FormFieldHelp>Uncontrolled Text Help</FormFieldHelp>
    </FormField>
    <FormField error={this.state.error}>
      <FormFieldLabel>Controlled Text</FormFieldLabel>
      <FormFieldInput value={this.state.text} onChange={this.handleTextChange} />
      <FormFieldError>Controlled Text Error</FormFieldError>
      <FormFieldHelp>Controlled Text Help</FormFieldHelp>
    </FormField>
    <FormField error={this.state.error}>
      <FormFieldLabel>Number</FormFieldLabel>
      <FormFieldInput type="number" defaultValue="12" />
      <FormFieldError>Number Error</FormFieldError>
      <FormFieldHelp>Number Help</FormFieldHelp>
    </FormField>
    <FormField error={this.state.error}>
      <FormFieldInput type="checkbox" defaultChecked />
      <FormFieldLabel>Does not have id, clicking this label does not work :(</FormFieldLabel>
      <FormFieldError>Checkbox Error</FormFieldError>
      <FormFieldHelp>Checkbox Help</FormFieldHelp>
    </FormField>
    <FormField id="checkboxFormField" error={this.state.error}>
      <FormFieldInput type="checkbox" defaultChecked />
      <FormFieldLabel>Has id, clicking this label works :)</FormFieldLabel>
      <FormFieldError>Checkbox Error</FormFieldError>
      <FormFieldHelp>Checkbox Help</FormFieldHelp>
    </FormField>
    <FormField error={this.state.error}>
      <FormFieldLabel>Multiline Text</FormFieldLabel>
      <FormFieldInput type="textarea" defaultValue="Multiline Text" />
      <FormFieldError>Multiline Text Error</FormFieldError>
      <FormFieldHelp>Multiline Text Help</FormFieldHelp>
    </FormField>
    <FormField error={this.state.error}>
      <FormFieldLabel>Select</FormFieldLabel>
      <FormFieldInput type="select">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </FormFieldInput>
      <FormFieldError>Select Error</FormFieldError>
      <FormFieldHelp>Select Help</FormFieldHelp>
    </FormField>
  )
}`
            }
          </code>
        </pre>
        <Button onClick={this.handleToggleError}>Toggle Error</Button>
        <FormField error={this.state.error}>
          <FormFieldLabel>Uncontrolled Text</FormFieldLabel>
          <FormFieldInput defaultValue="Uncontrolled Default Value" />
          <FormFieldError>Uncontrolled Text Error</FormFieldError>
          <FormFieldHelp>Uncontrolled Text Help</FormFieldHelp>
        </FormField>
        <FormField error={this.state.error}>
          <FormFieldLabel>Controlled Text</FormFieldLabel>
          <FormFieldInput value={this.state.text} onChange={this.handleTextChange} />
          <FormFieldError>Controlled Text Error</FormFieldError>
          <FormFieldHelp>Controlled Text Help</FormFieldHelp>
        </FormField>
        <FormField error={this.state.error}>
          <FormFieldLabel>Number</FormFieldLabel>
          <FormFieldInput type="number" defaultValue="12" />
          <FormFieldError>Number Error</FormFieldError>
          <FormFieldHelp>Number Help</FormFieldHelp>
        </FormField>
        <FormField error={this.state.error}>
          <FormFieldInput type="checkbox" defaultChecked />
          <FormFieldLabel>Does not have id, cicking this label does not work :(</FormFieldLabel>
          <FormFieldError>Checkbox Error</FormFieldError>
          <FormFieldHelp>Checkbox Help</FormFieldHelp>
        </FormField>
        <FormField id="checkboxFormField" error={this.state.error}>
          <FormFieldInput type="checkbox" defaultChecked />
          <FormFieldLabel>Has id, clicking this label works :)</FormFieldLabel>
          <FormFieldError>Checkbox Error</FormFieldError>
          <FormFieldHelp>Checkbox Help</FormFieldHelp>
        </FormField>
        <FormField error={this.state.error}>
          <FormFieldLabel>Multiline Text</FormFieldLabel>
          <FormFieldInput type="textarea" defaultValue="Multiline Text" />
          <FormFieldError>Multiline Text Error</FormFieldError>
          <FormFieldHelp>Multiline Text Help</FormFieldHelp>
        </FormField>
        <FormField error={this.state.error}>
          <FormFieldLabel>Select</FormFieldLabel>
          <FormFieldInput type="select">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </FormFieldInput>
          <FormFieldError>Select Error</FormFieldError>
          <FormFieldHelp>Select Help</FormFieldHelp>
        </FormField>
        <hr />
        <h2>Advanced Layout</h2>
        <p>
          By default, all items in a FormField stack. Set the <code>grid</code> prop on FormField
          to convert FormField into a grid Row and each child into a Grid column.
        </p>
        <pre>
          <code>
            {
`<Row>
  <Column small={12} medium={6}>
    <FormField grid error={this.state.error}>
      <FormFieldLabel mediumAlignment="right" middle="medium" small={12} medium={2}>
        Field 1
      </FormFieldLabel>
      <FormFieldInput small={12} medium={10} />
      <FormFieldError small={12} medium={10} mediumOffset={2}>Field 1 Error</FormFieldError>
      <FormFieldHelp small={12} medium={10} mediumOffset={2}>Field 1 Help</FormFieldHelp>
    </FormField>
  </Column>
  <Column small={12} medium={6}>
    <FormField grid error={this.state.error}>
      <FormFieldLabel mediumAlignment="right" middle="medium" small={12} medium={2}>
        Field 2
      </FormFieldLabel>
      <FormFieldInput small={12} medium={10} />
      <FormFieldError small={12} medium={10} mediumOffset={2}>Field 2 Error</FormFieldError>
      <FormFieldHelp small={12} medium={10} mediumOffset={2}>Field 2 Help</FormFieldHelp>
    </FormField>
  </Column>
</Row>`
            }
          </code>
        </pre>
        <Row>
          <Column small={12} medium={6}>
            <FormField grid error={this.state.error}>
              <FormFieldLabel mediumAlignment="right" middle="medium" small={12} medium={2}>
                Field 1
              </FormFieldLabel>
              <FormFieldInput small={12} medium={10} />
              <FormFieldError small={12} medium={10} mediumOffset={2}>Field 1 Error</FormFieldError>
              <FormFieldHelp small={12} medium={10} mediumOffset={2}>Field 1 Help</FormFieldHelp>
            </FormField>
          </Column>
          <Column small={12} medium={6}>
            <FormField grid error={this.state.error}>
              <FormFieldLabel mediumAlignment="right" middle="medium" small={12} medium={2}>
                Field 2
              </FormFieldLabel>
              <FormFieldInput small={12} medium={10} />
              <FormFieldError small={12} medium={10} mediumOffset={2}>Field 2 Error</FormFieldError>
              <FormFieldHelp small={12} medium={10} mediumOffset={2}>Field 2 Help</FormFieldHelp>
            </FormField>
          </Column>
        </Row>
        <h2>Inline Content</h2>
        <p>
          Prepend a label and/or append a button to a FormFieldInput by wrapping FormFieldInput in
          a FormFieldInline container.
        </p>
        <pre>
          <code>
            {
`<FormField error={this.state.error}>
  <FormFieldLabel>Inline Label</FormFieldLabel>
  <FormFieldInline>
    <FormFieldLabel>$</FormFieldLabel>
    <FormFieldInput type="number" />
    <FormFieldButton>Submit</FormFieldButton>
  </FormFieldInline>
  <FormFieldError>Inline Error</FormFieldError>
  <FormFieldHelp>Inline Help</FormFieldHelp>
</FormField>`
            }
          </code>
        </pre>
        <FormField error={this.state.error}>
          <FormFieldLabel>Inline Label</FormFieldLabel>
          <FormFieldInline>
            <FormFieldLabel>$</FormFieldLabel>
            <FormFieldInput type="number" />
            <FormFieldButton>Submit</FormFieldButton>
          </FormFieldInline>
          <FormFieldError>Inline Error</FormFieldError>
          <FormFieldHelp>Inline Help</FormFieldHelp>
        </FormField>
        <hr />
        <h2>Flexbox</h2>
        <p>
          The Flexbox version of the Form components work same as float based version. Flexbox is
          used for layout of inline input.
        </p>
        <pre>
          <code>
            {
`<FormField error={this.state.error}>
  <FormFieldLabel>Flexbox Label</FormFieldLabel>
  <FormFieldInline>
    <FormFieldLabel>$</FormFieldLabel>
    <FormFieldInput type="number" />
    <FormFieldButton>Submit</FormFieldButton>
  </FormFieldInline>
  <FormFieldError>Flexbox Error</FormFieldError>
  <FormFieldHelp>Flexbox Help</FormFieldHelp>
</FormField>`
            }
          </code>
        </pre>
        <FlexFormField error={this.state.error}>
          <FlexFormFieldLabel>Flexbox Label</FlexFormFieldLabel>
          <FlexFormFieldInline>
            <FlexFormFieldLabel>$</FlexFormFieldLabel>
            <FlexFormFieldInput type="number" />
            <FlexFormFieldButton>Submit</FlexFormFieldButton>
          </FlexFormFieldInline>
          <FlexFormFieldError>Flexbox Error</FlexFormFieldError>
          <FlexFormFieldHelp>Flexbox Help</FlexFormFieldHelp>
        </FlexFormField>
      </div>
    );
  }
}
