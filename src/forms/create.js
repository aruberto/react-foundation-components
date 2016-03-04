import React, { Component, PropTypes, Children, isValidElement, cloneElement } from 'react';
import cx from 'classnames';
import isBlank from 'underscore.string/isBlank';

import DefaultComponent from '../util/default-component';

export default function create(
  styles,
  TextAlignment = DefaultComponent,
  Row = DefaultComponent,
  Column = DefaultComponent
) {
  class FormFieldInput extends Component {
    static propTypes = {
      className: PropTypes.string,
      error: PropTypes.bool,
      formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      group: PropTypes.bool,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      type: PropTypes.string,
    };

    static defaultProps = {
      type: 'text',
    };

    render() {
      const { className, error, formFieldId, group, id, type } = this.props;
      const classNames =
        cx(
          className,
          {
            [styles['is-invalid-input']]: error,
            [styles['input-group-field']]: group,
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

  class FormFieldLabel extends Component {
    static propTypes = {
      className: PropTypes.string,
      middle: PropTypes.bool,
      error: PropTypes.bool,
      formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      group: PropTypes.bool,
      htmlFor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    render() {
      const { className, middle, error, formFieldId, group, htmlFor, id } = this.props;
      const classNames =
        cx(
          className,
          {
            [styles.middle]: middle,
            [styles['is-invalid-label']]: error,
            [styles['input-group-label']]: group,
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

  class FormFieldError extends Component {
    static propTypes = {
      className: PropTypes.string,
      error: PropTypes.bool,
      formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    render() {
      const { className, error, formFieldId, id } = this.props;

      if (error) {
        const classNames =
          cx(
            className,
            {
              [styles['form-error']]: true,
              [styles['is-visible']]: true,
            }
          );

        return (
          <label
            {...this.props}
            className={classNames}
            id={isBlank(formFieldId) ? id : `${formFieldId}Error`}
          />
        );
      }

      return null;
    }
  }

  class FormFieldGroup extends Component {
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
            error: error || child.props.error,
            group: true,
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

  class FormFieldRight extends Component {
    static propTypes = {
      children: PropTypes.node,
      error: PropTypes.bool,
      formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      group: PropTypes.bool,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    render() {
      const { children, error, formFieldId, group, id } = this.props;
      const classNames = cx({ [styles['input-group-button']]: group });
      const newChildren = Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            error: error || child.props.error,
            group: true,
            formFieldId,
          });
        }

        return child;
      });

      return (
        <div
          {...this.props}
          className={classNames}
          id={isBlank(formFieldId) ? id : `${formFieldId}Right`}
        >
          {newChildren}
        </div>
      );
    }
  }

  class FormFieldColumn extends Component {
    static propTypes = {
      children: PropTypes.node,
      error: PropTypes.bool,
      formFieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    render() {
      const { children, error, formFieldId } = this.props;
      const newChildren = Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            error: error || child.props.error,
            formFieldId,
          });
        }

        return child;
      });

      return (
        <Column {...this.props}>
          {newChildren}
        </Column>
      );
    }
  }

  class FormField extends Component {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      error: PropTypes.bool,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      row: PropTypes.bool,
    };

    render() {
      const { children, className, error, id, row } = this.props;
      const ComponentClass = row ? Row : 'div';
      const classNames = cx(className, styles['form-field']);
      const newChildren = Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            error: error || child.props.error,
            formFieldId: id,
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
    FormFieldGroup,
    FormFieldRight,
    FormFieldColumn,
  };
}
