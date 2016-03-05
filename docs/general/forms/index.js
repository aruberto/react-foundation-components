import React, { Component } from 'react';

import {
  FormField,
  FormFieldInput,
  FormFieldLabel,
  FormFieldError,
  FormFieldInline,
  FormFieldButton,
} from '../../../src/forms';
import {
  FormField as FlexFormField,
  FormFieldInput as FlexFormFieldInput,
  FormFieldLabel as FlexFormFieldLabel,
  FormFieldError as FlexFormFieldError,
  FormFieldInline as FlexFormFieldInline,
  FormFieldButton as FlexFormFieldButton,
} from '../../../src/forms/flex';
import { Row, Column } from '../../../src/grid';
import { Row as FlexRow, Column as FlexColumn } from '../../../src/grid/flex';

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
        <FormField id="checkboxFormField">
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
        <FormField grid>
          <FormFieldLabel mediumAlignment="right" middle small={12} medium={2}>Text</FormFieldLabel>
          <FormFieldInput defaultValue="XYZ" small={12} medium={10}/>
          <FormFieldError small={12} medium={10} mediumOffset={2}>text error</FormFieldError>
        </FormField>
        <FormField grid error>
          <FormFieldLabel mediumAlignment="right" middle small={12} medium={2}>Text</FormFieldLabel>
          <FormFieldInput defaultValue="XYZ" small={12} medium={10}/>
          <FormFieldError small={12} medium={10} mediumOffset={2}>text error</FormFieldError>
        </FormField>
        <br/>
        <Row>
          <Column small={12} medium={6}>
            <FormField grid>
              <FormFieldLabel mediumAlignment="right" middle small={12} medium={2}>
                Text
              </FormFieldLabel>
              <FormFieldInput defaultValue="XYZ" small={12} medium={10}/>
              <FormFieldError small={12} medium={10} mediumOffset={2}>text error</FormFieldError>
            </FormField>
          </Column>
          <Column small={12} medium={6}>
            <FormField grid error>
              <FormFieldLabel mediumAlignment="right" middle small={12} medium={2}>
                Text
              </FormFieldLabel>
              <FormFieldInput defaultValue="XYZ" small={12} medium={10}/>
              <FormFieldError small={12} medium={10} mediumOffset={2}>text error</FormFieldError>
            </FormField>
          </Column>
        </Row>
        <br/>
        <FormField>
          <FormFieldLabel>Text</FormFieldLabel>
          <FormFieldInline>
            <FormFieldLabel>Inline Text</FormFieldLabel>
            <FormFieldInput defaultValue="XYZ"/>
            <FormFieldButton>Click</FormFieldButton>
          </FormFieldInline>
          <FormFieldError>text error</FormFieldError>
        </FormField>
        <br/>
        <FormField error>
          <FormFieldLabel>Text</FormFieldLabel>
          <FormFieldInline>
            <FormFieldLabel>Inline Text</FormFieldLabel>
            <FormFieldInput defaultValue="XYZ"/>
            <FormFieldButton>Click</FormFieldButton>
          </FormFieldInline>
          <FormFieldError>text error</FormFieldError>
        </FormField>
        <br/>
        <FlexFormField>
          <FlexFormFieldLabel>Text</FlexFormFieldLabel>
          <FlexFormFieldInput defaultValue="XYZ"/>
          <FlexFormFieldError>text error</FlexFormFieldError>
        </FlexFormField>
        <br/>
        <FlexFormField error>
          <FlexFormFieldLabel>Text</FlexFormFieldLabel>
          <FlexFormFieldInput defaultValue="XYZ"/>
          <FlexFormFieldError>text error</FlexFormFieldError>
        </FlexFormField>
        <br/>
        <FlexFormField grid>
          <FlexFormFieldLabel mediumAlignment="right" middle small={12} medium={2}>
            Text
          </FlexFormFieldLabel>
          <FlexFormFieldInput defaultValue="XYZ" small={12} medium={10}/>
          <FlexFormFieldError small={12} medium={10} mediumOffset={2}>
            text error
          </FlexFormFieldError>
        </FlexFormField>
        <FlexFormField grid error>
          <FlexFormFieldLabel mediumAlignment="right" middle small={12} medium={2}>
            Text
          </FlexFormFieldLabel>
          <FlexFormFieldInput defaultValue="XYZ" small={12} medium={10}/>
          <FlexFormFieldError small={12} medium={10} mediumOffset={2}>
            text error
          </FlexFormFieldError>
        </FlexFormField>
        <br/>
        <FlexRow>
          <FlexColumn small={12} medium={6}>
            <FlexFormField grid>
              <FlexFormFieldLabel mediumAlignment="right" middle small={12} medium={2}>
                Text
              </FlexFormFieldLabel>
              <FlexFormFieldInput defaultValue="XYZ" small={12} medium={10}/>
              <FlexFormFieldError small={12} medium={10} mediumOffset={2}>
                text error
              </FlexFormFieldError>
            </FlexFormField>
          </FlexColumn>
          <FlexColumn small={12} medium={6}>
            <FlexFormField grid error>
              <FlexFormFieldLabel mediumAlignment="right" middle small={12} medium={2}>
                Text
              </FlexFormFieldLabel>
              <FlexFormFieldInput defaultValue="XYZ" small={12} medium={10}/>
              <FlexFormFieldError small={12} medium={10} mediumOffset={2}>
                text error
              </FlexFormFieldError>
            </FlexFormField>
          </FlexColumn>
        </FlexRow>
        <br/>
        <FlexFormField>
          <FlexFormFieldLabel>Text</FlexFormFieldLabel>
          <FlexFormFieldInline>
            <FlexFormFieldLabel>Inline Text</FlexFormFieldLabel>
            <FlexFormFieldInput defaultValue="XYZ"/>
            <FlexFormFieldButton>Click</FlexFormFieldButton>
          </FlexFormFieldInline>
          <FlexFormFieldError>text error</FlexFormFieldError>
        </FlexFormField>
        <br/>
        <FlexFormField error>
          <FlexFormFieldLabel>Text</FlexFormFieldLabel>
          <FlexFormFieldInline>
            <FlexFormFieldLabel>Inline Text</FlexFormFieldLabel>
            <FlexFormFieldInput defaultValue="XYZ"/>
            <FlexFormFieldButton>Click</FlexFormFieldButton>
          </FlexFormFieldInline>
          <FlexFormFieldError>text error</FlexFormFieldError>
        </FlexFormField>
      </div>
    );
  }
}
