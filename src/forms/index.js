import React, { PropTypes, Children, isValidElement, cloneElement } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import includes from 'lodash/includes';
import isBlank from 'underscore.string/isBlank';
import elementType from 'react-prop-types/lib/elementType';

import { SCREEN_SIZES, LARGER_SCREEN_SIZES } from '../util/constants';
import { TextAlignment } from '../text-alignment';
import { Button } from '../button';
import { Row, Column } from '../grid';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

function splitColumnProps(props) {
  const columnProps = {};
  const childProps = {};

  Object.keys(props).forEach((prop) => {
    const propValue = props[prop];

    if (prop !== 'children'
        && prop !== 'className'
        && prop !== 'style'
        && prop !== 'componentClass'
        && Column.propTypes[prop]) {
      columnProps[prop] = propValue;
    } else {
      childProps[prop] = propValue;
    }
  });

  return { columnProps, childProps };
}

const ColumnWrapper = ({
  column,
  columnClassName,
  columnStyle,
  columnComponentClass,
  childComponentClass: ChildComponentClass,
  ...restProps,
}) => {
  if (column) {
    const { columnProps, childProps } = splitColumnProps(restProps);

    return (
      <Column
        {...columnProps}
        className={columnClassName}
        style={columnStyle}
        componentClass={columnComponentClass}
      >
        <ChildComponentClass {...childProps} />
      </Column>
    );
  }

  return <ChildComponentClass {...restProps} />;
};

ColumnWrapper.propTypes = {
  column: PropTypes.bool,
  columnClassName: PropTypes.string,
  columnStyle: PropTypes.shape({}),
  columnComponentClass: elementType,
  childComponentClass: elementType,
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

  return <ColumnWrapper {...props} childComponentClass={ComponentClass} />;
};

FormFieldInput.propTypes = {
  className: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
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
    <ColumnWrapper
      {...restProps}
      childComponentClass={TextAlignment}
      componentClass="label"
      className={classNames}
      htmlFor={labelForId}
      id={labelId}
    />
  );
};

FormFieldLabel.propTypes = {
  className: PropTypes.string,
  middle: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(SCREEN_SIZES)]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
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
    <ColumnWrapper
      {...restProps}
      childComponentClass="span"
      className={classNames}
      id={errorId}
    />
  );
};

FormFieldError.propTypes = {
  className: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export const FormFieldHelp = ({
  className,
  error, // eslint-disable-line no-unused-vars
  formFieldId,
  id,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('help-text'));
  const helpId = isBlank(formFieldId) ? id : `${formFieldId}Help`;

  return (
    <ColumnWrapper
      {...restProps}
      childComponentClass="p"
      className={classNames}
      id={helpId}
    />
  );
};

FormFieldHelp.propTypes = {
  className: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
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
    <ColumnWrapper
      {...restProps}
      childComponentClass="div"
      className={classNames}
      id={inlineId}
    >
      {clonedChildren}
    </ColumnWrapper>
  );
};

FormFieldInline.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export const FormFieldButton = ({
  containerClassName,
  containerStyle,
  error, // eslint-disable-line no-unused-vars
  formFieldId,
  id,
  inline,
  ...restProps,
}) => {
  const buttonId = isBlank(formFieldId) ? id : `${formFieldId}${inline ? 'Inline' : ''}Button`;

  if (inline) {
    const containerClassNames = cx(containerClassName, cxStyles('input-group-button'));

    return (
      <div className={containerClassNames} style={containerStyle}>
        <Button {...restProps} id={buttonId} />
      </div>
    );
  }

  return <ColumnWrapper {...restProps} childComponentClass="Button" id={buttonId} />;
};

FormFieldButton.propTypes = {
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.shape({}),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
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
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
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
