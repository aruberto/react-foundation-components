import styles from './_styles.scss';
import create from './create';
import { TextAlignment } from '../text-alignment';

const { FormField, FormFieldInput, FormFieldLabel, FormFieldError } = create(styles, TextAlignment);
FormField.Input = FormFieldInput;
FormField.Label = FormFieldLabel;
FormField.Error = FormFieldError;

export default FormField;
export { FormField, FormFieldInput, FormFieldLabel, FormFieldError };
