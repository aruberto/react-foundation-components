import styles from './_styles.scss';
import create from './create';
import { TextAlignment } from '../text-alignment';
import { Row, Column } from '../grid';

const {
  FormField,
  FormFieldInput,
  FormFieldLabel,
  FormFieldError,
  FormFieldGroup,
  FormFieldRight,
  FormFieldColumn,
} = create(styles, TextAlignment, Row, Column);
FormField.Input = FormFieldInput;
FormField.Label = FormFieldLabel;
FormField.Error = FormFieldError;
FormField.Group = FormFieldGroup;
FormField.Right = FormFieldRight;
FormField.Column = FormFieldColumn;

export default FormField;
export {
  FormField,
  FormFieldInput,
  FormFieldLabel,
  FormFieldError,
  FormFieldGroup,
  FormFieldRight,
  FormFieldColumn,
};
