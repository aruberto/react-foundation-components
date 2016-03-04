import React, { Component } from 'react';

import {
  FormField,
  FormFieldInput,
  FormFieldLabel,
  FormFieldError,
  FormFieldGroup,
  FormFieldRight,
  FormFieldColumn,
} from '../../../src/forms';
import {
  FormField as FlexFormField,
  FormFieldInput as FlexFormFieldInput,
  FormFieldLabel as FlexFormFieldLabel,
  FormFieldError as FlexFormFieldError,
  FormFieldGroup as FlexFormFieldGroup,
  FormFieldRight as FlexFormFieldRight,
  FormFieldColumn as FlexFormFieldColumn,
} from '../../../src/forms/flex';
import { Button } from '../../../src/button';
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
        <FormField row>
          <FormFieldColumn small={12} medium={1}>
            <FormFieldLabel mediumAlignment="right" middle>Text</FormFieldLabel>
          </FormFieldColumn>
          <FormFieldColumn small={12} medium={11}>
            <FormFieldInput defaultValue="XYZ"/>
          </FormFieldColumn>
          <FormFieldColumn small={12}>
            <FormFieldError>text error</FormFieldError>
          </FormFieldColumn>
        </FormField>
        <FormField row error>
          <FormFieldColumn small={12} medium={1}>
            <FormFieldLabel mediumAlignment="right" middle>Text</FormFieldLabel>
          </FormFieldColumn>
          <FormFieldColumn small={12} medium={11}>
            <FormFieldInput defaultValue="XYZ"/>
          </FormFieldColumn>
          <FormFieldColumn small={12}>
            <FormFieldError>text error</FormFieldError>
          </FormFieldColumn>
        </FormField>
        <br/>
        <Row>
          <Column small={12} medium={6}>
            <FormField row>
              <FormFieldColumn small={12} medium={2}>
                <FormFieldLabel mediumAlignment="right" middle>Text</FormFieldLabel>
              </FormFieldColumn>
              <FormFieldColumn small={12} medium={10}>
                <FormFieldInput defaultValue="XYZ"/>
              </FormFieldColumn>
              <FormFieldColumn small={12}>
                <FormFieldError>text error</FormFieldError>
              </FormFieldColumn>
            </FormField>
          </Column>
          <Column small={12} medium={6}>
            <FormField row error>
              <FormFieldColumn small={12} medium={2}>
                <FormFieldLabel mediumAlignment="right" middle>Text</FormFieldLabel>
              </FormFieldColumn>
              <FormFieldColumn small={12} medium={10}>
                <FormFieldInput defaultValue="XYZ"/>
              </FormFieldColumn>
              <FormFieldColumn small={12}>
                <FormFieldError>text error</FormFieldError>
              </FormFieldColumn>
            </FormField>
          </Column>
        </Row>
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
        <FlexFormField>
          <FlexFormFieldGroup>
            <FlexFormFieldLabel>Text</FlexFormFieldLabel>
            <FlexFormFieldInput defaultValue="XYZ"/>
            <FlexFormFieldRight><Button>Click</Button></FlexFormFieldRight>
          </FlexFormFieldGroup>
          <FlexFormFieldError>text error</FlexFormFieldError>
        </FlexFormField>
        <br/>
        <FlexFormField error>
          <FlexFormFieldGroup>
            <FlexFormFieldLabel>Text</FlexFormFieldLabel>
            <FlexFormFieldInput defaultValue="XYZ"/>
            <FlexFormFieldRight><Button>Click</Button></FlexFormFieldRight>
          </FlexFormFieldGroup>
          <FlexFormFieldError>text error</FlexFormFieldError>
        </FlexFormField>
        <br/>
        <FlexFormField row>
          <FlexFormFieldColumn small={12} medium={1}>
            <FlexFormFieldLabel mediumAlignment="right" middle>Text</FlexFormFieldLabel>
          </FlexFormFieldColumn>
          <FlexFormFieldColumn small={12} medium={11}>
            <FlexFormFieldInput defaultValue="XYZ"/>
          </FlexFormFieldColumn>
          <FlexFormFieldColumn small={12}>
            <FlexFormFieldError>text error</FlexFormFieldError>
          </FlexFormFieldColumn>
        </FlexFormField>
        <FlexFormField row error>
          <FlexFormFieldColumn small={12} medium={1}>
            <FlexFormFieldLabel mediumAlignment="right" middle>Text</FlexFormFieldLabel>
          </FlexFormFieldColumn>
          <FlexFormFieldColumn small={12} medium={11}>
            <FlexFormFieldInput defaultValue="XYZ"/>
          </FlexFormFieldColumn>
          <FlexFormFieldColumn small={12}>
            <FlexFormFieldError>text error</FlexFormFieldError>
          </FlexFormFieldColumn>
        </FlexFormField>
        <br/>
        <FlexRow>
          <FlexColumn small={12} medium={6}>
            <FlexFormField row>
              <FlexFormFieldColumn small={12} medium={2}>
                <FlexFormFieldLabel mediumAlignment="right" middle>Text</FlexFormFieldLabel>
              </FlexFormFieldColumn>
              <FlexFormFieldColumn small={12} medium={10}>
                <FlexFormFieldInput defaultValue="XYZ"/>
              </FlexFormFieldColumn>
              <FlexFormFieldColumn small={12}>
                <FlexFormFieldError>text error</FlexFormFieldError>
              </FlexFormFieldColumn>
            </FlexFormField>
          </FlexColumn>
          <FlexColumn small={12} medium={6}>
            <FlexFormField row error>
              <FlexFormFieldColumn small={12} medium={2}>
                <FlexFormFieldLabel mediumAlignment="right" middle>Text</FlexFormFieldLabel>
              </FlexFormFieldColumn>
              <FlexFormFieldColumn small={12} medium={10}>
                <FlexFormFieldInput defaultValue="XYZ"/>
              </FlexFormFieldColumn>
              <FlexFormFieldColumn small={12}>
                <FlexFormFieldError>text error</FlexFormFieldError>
              </FlexFormFieldColumn>
            </FlexFormField>
          </FlexColumn>
        </FlexRow>
      </div>
    );
  }
}
