import React, { Component, PropTypes, Children, isValidElement, cloneElement } from 'react';
import cx from 'classnames';
import isBlank from 'underscore.string/isBlank';
import elementType from 'react-prop-types/lib/elementType';

import DefaultComponent from '../util/default-component';

export default function create(
  styles,
  TextAlignment = DefaultComponent,
  Row = DefaultComponent,
  Column = DefaultComponent
) {
  class Input extends Component {
    static propTypes = {
      className: PropTypes.string,
      error: PropTypes.bool,
      formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      type: PropTypes.string,
    };

    static defaultProps = {
      type: 'text',
    };

    render() {
      const { className, error, formFieldId, id, type } = this.props;
      const classNames =
        cx(
          className,
          {
            [styles['is-invalid-input']]: error,
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

  class Label extends Component {
    static propTypes = {
      className: PropTypes.string,
      middle: PropTypes.bool,
      error: PropTypes.bool,
      formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      htmlFor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    render() {
      const { className, middle, error, formFieldId, htmlFor, id } = this.props;
      const classNames =
        cx(
          className,
          {
            [styles.middle]: middle,
            [styles['is-invalid-label']]: error,
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

  class Error extends Component {
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
      return <ColumnWrapper {...this.props} componentClass={Input}/>;
    }
  }

  class FormFieldLabel extends Component {
    render() {
      return <ColumnWrapper {...this.props} componentClass={Label}/>;
    }
  }

  class FormFieldError extends Component {
    render() {
      return <ColumnWrapper {...this.props} componentClass={Error}/>;
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
  };
}
