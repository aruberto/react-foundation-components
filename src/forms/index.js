import React, { PropTypes, Children, isValidElement, cloneElement } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';
import isBlank from 'underscore.string/isBlank';

import { SCREEN_SIZES, LARGER_SCREEN_SIZES } from '../util/constants';
import { TextAlignment } from '../text-alignment';
import { Button } from '../button';
import { Row, Column } from '../grid';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

const ColumnWrapper = ({
  children,
  column,
  columnClassName,
  columnStyle,
  ...restProps,
}) => {
  if (column) {
    return (
      <Column {...restProps} className={columnClassName} style={columnStyle}>
        {children}
      </Column>
    );
  }

  return children;
};

ColumnWrapper.propTypes = {
  children: PropTypes.node,
  column: PropTypes.bool,
  columnClassName: PropTypes.string,
  columnStyle: PropTypes.object,
};

export const FormFieldInput = ({
  className,
  error,
  formFieldId,
  id,
  inline,
  type,
  ...restProps,
}) => {
  const classNames =
    cx(className, cxStyles({ 'is-invalid-input': error, 'input-group-field': inline }));
  const props = {
    ...restProps,
    className: classNames,
    id: isBlank(formFieldId) ? id : formFieldId,
  };
  let ComponentClass = null;

  switch (type) {
    case 'select':
      ComponentClass = 'select';
      break;
    case 'textarea':
      ComponentClass = 'textarea';
      break;
    case 'static':
      ComponentClass = 'p';
      break;
    default:
      ComponentClass = 'input';
      props.type = type;
  }

  return <ColumnWrapper {...restProps}><ComponentClass {...props} /></ColumnWrapper>;
};

FormFieldInput.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inline: PropTypes.bool,
  type: PropTypes.string,
};
FormFieldInput.defaultProps = {
  type: 'text',
};

export const FormFieldLabel = ({
  className,
  middle,
  error,
  formFieldId,
  htmlFor,
  id,
  inline,
  ...restProps,
}) => {
  const classNames =
    cx(
      className,
      cxStyles(
        {
          middle: middle && !includes(LARGER_SCREEN_SIZES, middle),
          [`${middle}-middle`]: includes(LARGER_SCREEN_SIZES, middle),
          'is-invalid-label': error,
          'input-group-label': inline,
        }
      )
    );
  const labelForId = isBlank(formFieldId) ? htmlFor : formFieldId;
  const labelId = isBlank(formFieldId) ? id : `${formFieldId}${inline ? 'Inline' : ''}Label`;

  return (
    <ColumnWrapper {...restProps}>
      <TextAlignment
        {...restProps}
        className={classNames}
        componentClass="label"
        htmlFor={labelForId}
        id={labelId}
      />
    </ColumnWrapper>
  );
};

FormFieldLabel.propTypes = {
  className: PropTypes.string,
  middle: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(SCREEN_SIZES)]),
  error: PropTypes.bool,
  formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  htmlFor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inline: PropTypes.bool,
};

export const FormFieldError = ({
  className,
  error,
  formFieldId,
  id,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('form-error', { 'is-visible': error }));
  const errorId = isBlank(formFieldId) ? id : `${formFieldId}Error`;

  return (
    <ColumnWrapper {...restProps}>
      <span {...restProps} className={classNames} id={errorId} />
    </ColumnWrapper>
  );
};

FormFieldError.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export const FormFieldHelp = ({
  className,
  formFieldId,
  id,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('help-text'));
  const helpId = isBlank(formFieldId) ? id : `${formFieldId}Help`;

  return (
    <ColumnWrapper {...restProps}>
      <p {...restProps} className={classNames} id={helpId} />
    </ColumnWrapper>
  );
};

FormFieldHelp.propTypes = {
  className: PropTypes.string,
  formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export const FormFieldInline = ({
  children,
  className,
  error,
  formFieldId,
  id,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('input-group'));
  const inlineId = isBlank(formFieldId) ? id : `${formFieldId}Inline`;
  const clonedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        error,
        inline: true,
        formFieldId,
      });
    }

    return child;
  });

  return (
    <ColumnWrapper {...restProps}>
      <div {...restProps} className={classNames} id={inlineId}>{clonedChildren}</div>
    </ColumnWrapper>
  );
};

FormFieldInline.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  error: PropTypes.bool,
  formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export const FormFieldButton = ({
  containerClassName,
  containerStyle,
  formFieldId,
  id,
  inline,
  ...restProps,
}) => {
  const buttonId = isBlank(formFieldId) ? id : `${formFieldId}${inline ? 'Inline' : ''}Button`;
  const content = <Button {...restProps} id={buttonId} />;

  if (inline) {
    const containerClassNames = cx(containerClassName, cxStyles('input-group-button'));

    return <div className={containerClassNames} style={containerStyle}>{content}</div>;
  }

  return <ColumnWrapper {...restProps}>{content}</ColumnWrapper>;
};

FormFieldButton.propTypes = {
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inline: PropTypes.bool,
};

export const FormField = ({
  children,
  className,
  error,
  id,
  grid,
  ...restProps,
}) => {
  const ComponentClass = grid ? Row : 'div';
  const classNames = cx(className, cxStyles('form-field'));
  const containerId = isBlank(id) ? null : `${id}Container`;
  const clonedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        error,
        formFieldId: id,
        column: grid,
      });
    }

    return child;
  });

  return (
    <ComponentClass {...restProps} className={classNames} id={containerId}>
      {clonedChildren}
    </ComponentClass>
  );
};

FormField.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  error: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  grid: PropTypes.bool,
};

FormField.Input = FormFieldInput;
FormField.Label = FormFieldLabel;
FormField.Help = FormFieldHelp;
FormField.Error = FormFieldError;
FormField.Inline = FormFieldInline;
FormField.Button = FormFieldButton;

export default FormField;
