import React, { Component, PropTypes, Children, isValidElement, cloneElement } from 'react';
import cx from 'classnames';
import isBlank from 'underscore.string/isBlank';
import elementType from 'react-prop-types/lib/elementType';

import DefaultComponent from '../util/default-component';

export default function create(
  styles,
  TextAlignment = DefaultComponent,
  Row = DefaultComponent,
  Column = DefaultComponent,
  Button = DefaultComponent,
) {
  class FormFieldInputBase extends Component {
    static propTypes = {
      className: PropTypes.string,
      error: PropTypes.bool,
      formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      inline: PropTypes.bool,
      type: PropTypes.string,
    };

    static defaultProps = {
      type: 'text',
    };

    render() {
      const { className, error, formFieldId, id, inline, type } = this.props;
      const classNames =
        cx(
          className,
          {
            [styles['is-invalid-input']]: error,
            [styles['input-group-field']]: inline,
          }
        );
      const restProps = {
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
      }

      return <ComponentClass {...this.props} {...restProps}/>;
    }
  }

  class FormFieldLabelBase extends Component {
    static propTypes = {
      className: PropTypes.string,
      middle: PropTypes.bool,
      error: PropTypes.bool,
      formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      htmlFor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      inline: PropTypes.bool,
    };

    render() {
      const { className, middle, error, formFieldId, htmlFor, id, inline } = this.props;
      const classNames =
        cx(
          className,
          {
            [styles.middle]: middle,
            [styles['is-invalid-label']]: error,
            [styles['input-group-label']]: inline,
          }
        );

      return (
        <TextAlignment
          {...this.props}
          componentClass="label"
          className={classNames}
          htmlFor={isBlank(formFieldId) ? htmlFor : formFieldId}
          id={isBlank(formFieldId) ? id : `${formFieldId}Label`}
        />
      );
    }
  }

  class FormFieldErrorBase extends Component {
    static propTypes = {
      className: PropTypes.string,
      error: PropTypes.bool,
      formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    render() {
      const { className, error, formFieldId, id } = this.props;

      const classNames =
        cx(
          className,
          {
            [styles['form-error']]: true,
            [styles['is-visible']]: error,
          }
        );

      return (
        <span
          {...this.props}
          className={classNames}
          id={isBlank(formFieldId) ? id : `${formFieldId}Error`}
        />
      );
    }
  }

  class FormFieldInlineBase extends Component {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      error: PropTypes.bool,
      formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    render() {
      const { children, className, error, formFieldId, id } = this.props;
      const classNames = cx(className, styles['input-group']);
      const newChildren = Children.map(children, (child) => {
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
        <div
          {...this.props}
          className={classNames}
          id={isBlank(formFieldId) ? id : `${formFieldId}Group`}
        >
          {newChildren}
        </div>
      );
    }
  }

  class FormFieldButtonBase extends Component {
    static propTypes = {
      containerClassName: PropTypes.string,
      containerStyle: PropTypes.object,
      formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      inline: PropTypes.bool,
    };

    render() {
      const { containerClassName, containerStyle, formFieldId, id, inline } = this.props;
      const content =
        <Button {...this.props} id={isBlank(formFieldId) ? id : `${formFieldId}Button`}/>;

      if (inline) {
        const containerClassNames = cx(containerClassName, styles['input-group-button']);
        return (
          <div className={containerClassNames} style={containerStyle}>
            {content}
          </div>
        );
      }

      return content;
    }
  }

  class ColumnWrapper extends Component {
    static propTypes = {
      column: PropTypes.bool,
      columnClassName: PropTypes.string,
      columnStyle: PropTypes.object,
      componentClass: elementType,
    };

    static defaultProps = {
      componentClass: 'span',
    }

    render() {
      const { column, columnClassName, columnStyle, componentClass: ComponentClass } = this.props;

      const content = <ComponentClass {...this.props}/>;

      if (column) {
        return (
          <Column
            {...this.props}
            className={columnClassName}
            style={columnStyle}
            componentClass={null}
            id={null}
            type={null}
          >
            {content}
          </Column>
        );
      }

      return content;
    }
  }

  class FormFieldInput extends Component {
    render() {
      return <ColumnWrapper {...this.props} componentClass={FormFieldInputBase}/>;
    }
  }

  class FormFieldLabel extends Component {
    render() {
      return <ColumnWrapper {...this.props} componentClass={FormFieldLabelBase}/>;
    }
  }

  class FormFieldError extends Component {
    render() {
      return <ColumnWrapper {...this.props} componentClass={FormFieldErrorBase}/>;
    }
  }

  class FormFieldInline extends Component {
    render() {
      return <ColumnWrapper {...this.props} componentClass={FormFieldInlineBase}/>;
    }
  }

  class FormFieldButton extends Component {
    render() {
      return <ColumnWrapper {...this.props} componentClass={FormFieldButtonBase}/>;
    }
  }

  class FormField extends Component {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      error: PropTypes.bool,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      grid: PropTypes.bool,
    };

    render() {
      const { children, className, error, id, grid } = this.props;
      const ComponentClass = grid ? Row : 'div';
      const classNames = cx(className, styles['form-field']);
      const newChildren = Children.map(children, (child) => {
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
        <ComponentClass
          {...this.props}
          className={classNames}
          id={isBlank(id) ? null : `${id}Container`}
        >
          {newChildren}
        </ComponentClass>
      );
    }
  }

  return {
    FormField,
    FormFieldInput,
    FormFieldLabel,
    FormFieldError,
    FormFieldInline,
    FormFieldButton,
  };
}
