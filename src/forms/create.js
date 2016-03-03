import React, { Component, PropTypes, Children, isValidElement, cloneElement } from 'react';
import cx from 'classnames';

import DefaultComponent from '../util/default-component';

export default function create(styles, TextAlignment = DefaultComponent) {
  class FormFieldInput extends Component {
    static propTypes = {
      className: PropTypes.string,
      error: PropTypes.bool,
      type: PropTypes.string,
    };

    static defaultProps = {
      type: 'text',
    };

    render() {
      const { className, error, type } = this.props;
      const classNames =
        cx(
          className,
          {
            [styles['is-invalid-input']]: error,
          }
        );

      switch (type) {
        case 'select':
          return <select {...this.props} className={classNames}/>;
        case 'textarea':
          return <textarea {...this.props} className={classNames}/>;
        case 'static':
          return <p {...this.props} className={classNames}/>;
        default:
          return <input {...this.props} className={classNames}/>;
      }
    }
  }

  class FormFieldLabel extends Component {
    static propTypes = {
      className: PropTypes.string,
      middle: PropTypes.bool,
      error: PropTypes.bool,
    };

    render() {
      const { className, middle, error } = this.props;
      const classNames =
        cx(
          className,
          {
            [styles.middle]: middle,
            [styles['is-invalid-label']]: error,
          }
        );

      return <TextAlignment {...this.props} componentClass="label" className={classNames}/>;
    }
  }

  class FormFieldError extends Component {
    static propTypes = {
      className: PropTypes.string,
      error: PropTypes.bool,
    };

    render() {
      const { className, error } = this.props;

      if (error) {
        const classNames =
          cx(
            className,
            {
              [styles['form-error']]: true,
              [styles['is-visible']]: true,
            }
          );

        return <label {...this.props} className={classNames}/>;
      }

      return null;
    }
  }

  class FormField extends Component {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      error: PropTypes.bool,
    };

    render() {
      const { children, className, error } = this.props;
      const classNames = cx(className, styles['form-field']);
      const newChildren = Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { error: error || child.props.error });
        }

        return child;
      });

      return (
        <div {...this.props} className={classNames}>
          {newChildren}
        </div>
      );
    }
  }

  return { FormField, FormFieldInput, FormFieldLabel, FormFieldError };
}
