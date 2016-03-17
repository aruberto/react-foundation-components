import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';
import { mapPropsOnChange } from 'recompose';

import TextAlignment from '../text-alignment';
import { HideForScreenReader } from '../visibility';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

function createPaginationLink(baseClassName) {
  const PaginationEndPoint = ({
    children,
    className,
    current,
    disabled,
    label,
    onSelect,
    ...restProps,
  }) => {
    const classNames = cx(className, cxStyles(baseClassName, { current, disabled }));
    let content = children;

    if (!current && !disabled) {
      content = (
        <a
          href="#"
          aria-label={label}
          onClick={onSelect}
        >
          {children}
        </a>
      );
    }

    return <li {...restProps} className={classNames}>{content}</li>;
  };

  PaginationEndPoint.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    current: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onSelect: PropTypes.func,
  };

  return PaginationEndPoint;
}

const PaginationPrevious =
  mapPropsOnChange(
    ['activePageNumber', 'maxPageNumber', 'minPageNumber', 'onSelect'],
    ({ activePageNumber, maxPageNumber, minPageNumber, onSelect, ...restProps }) => {
      const disabled = maxPageNumber < minPageNumber || activePageNumber <= minPageNumber;

      return {
        ...restProps,
        disabled,
        onSelect(...args) {
          const [event] = args;

          event.preventDefault();

          if (!disabled && onSelect) {
            const newPageNumber =
              Math.max(minPageNumber, Math.min(activePageNumber - 1, maxPageNumber));

            onSelect(newPageNumber, ...args);
          }
        },
      };
    },
    createPaginationLink('pagination-previous')
  );

PaginationPrevious.displayName = 'PaginationPrevious';
PaginationPrevious.propTypes = {
  activePageNumber: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  maxPageNumber: PropTypes.number,
  minPageNumber: PropTypes.number,
  onSelect: PropTypes.func,
};

const PaginationNext =
  mapPropsOnChange(
    ['activePageNumber', 'maxPageNumber', 'minPageNumber', 'onSelect'],
    ({ activePageNumber, maxPageNumber, minPageNumber, onSelect, ...restProps }) => {
      const disabled = maxPageNumber < minPageNumber || activePageNumber >= maxPageNumber;

      return {
        ...restProps,
        disabled,
        onSelect(...args) {
          const [event] = args;

          event.preventDefault();

          if (!disabled && onSelect) {
            const newPageNumber =
              Math.min(maxPageNumber, Math.max(activePageNumber + 1, minPageNumber));

            onSelect(newPageNumber, ...args);
          }
        },
      };
    },
    createPaginationLink('pagination-next')
  );

PaginationNext.displayName = 'PaginationNext';
PaginationNext.propTypes = {
  activePageNumber: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  maxPage: PropTypes.number,
  minPage: PropTypes.number,
  onSelect: PropTypes.func,
};

const PaginationPage =
  mapPropsOnChange(
    ['activePageNumber', 'pageNumber', 'onSelect'],
    ({ activePageNumber, pageNumber, onSelect, ...restProps }) => {
      const current = activePageNumber === pageNumber;

      return {
        ...restProps,
        current,
        onSelect(...args) {
          const [event] = args;

          event.preventDefault();

          if (!current && onSelect) {
            onSelect(pageNumber, ...args);
          }
        },
      };
    },
    createPaginationLink()
  );

PaginationPage.displayName = 'PaginationPage';
PaginationPage.propTypes = {
  activePageNumber: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  onSelect: PropTypes.func,
  pageNumber: PropTypes.number,
};

const PaginationEllipsis = ({
  className,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('ellipsis'));

  return <HideForScreenReader {...restProps} className={classNames} componentClass="li" />;
};

PaginationEllipsis.propTypes = {
  className: PropTypes.string,
};

export const Pagination = ({
  activePageNumber,
  className,
  label,
  maxPageNumber,
  minPageNumber,
  nextClassName,
  nextContent,
  nextLabel,
  nextStyle,
  onSelect,
  pageClassName,
  pageContentFormatter,
  pageLabelFormatter,
  pageStyle,
  previousClassName,
  previousContent,
  previousLabel,
  previousStyle,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('pagination'));
  const pages = [];

  for (let i = minPageNumber; i <= maxPageNumber; i++) {
    pages.push(
      <PaginationPage
        activePageNumber={activePageNumber}
        className={pageClassName}
        key={i}
        label={pageLabelFormatter ? pageLabelFormatter(i, activePageNumber) : null}
        onSelect={onSelect}
        pageNumber={i}
        style={pageStyle}
      >
        {pageContentFormatter ? pageContentFormatter(i, activePageNumber) : i}
      </PaginationPage>
    );
  }

  return (
    <TextAlignment
      {...restProps}
      aria-label={label}
      className={classNames}
      componentClass="ul"
      role="navigation"
    >
      <PaginationPrevious
        activePageNumber={activePageNumber}
        className={previousClassName}
        label={previousLabel}
        maxPageNumber={maxPageNumber}
        minPageNumber={minPageNumber}
        onSelect={onSelect}
        style={previousStyle}
      >
        {previousContent}
      </PaginationPrevious>
      {pages}
      <PaginationNext
        activePageNumber={activePageNumber}
        className={nextClassName}
        label={nextLabel}
        maxPageNumber={maxPageNumber}
        minPageNumber={minPageNumber}
        onSelect={onSelect}
        style={nextStyle}
      >
        {nextContent}
      </PaginationNext>
    </TextAlignment>
  );
};

Pagination.propTypes = {
  activePageNumber: PropTypes.number,
  className: PropTypes.string,
  label: PropTypes.string,
  maxPageNumber: PropTypes.number,
  minPageNumber: PropTypes.number,
  nextClassName: PropTypes.string,
  nextContent: PropTypes.node,
  nextLabel: PropTypes.string,
  nextStyle: PropTypes.object,
  onSelect: PropTypes.func,
  pageClassName: PropTypes.string,
  pageContentFormatter: PropTypes.func,
  pageLabelFormatter: PropTypes.func,
  pageStyle: PropTypes.object,
  previousClassName: PropTypes.string,
  previousContent: PropTypes.node,
  previousLabel: PropTypes.string,
  previousStyle: PropTypes.object,
};
Pagination.defaultProps = {
  maxPageNumber: 1,
  minPageNumber: 1,
};

export default Pagination;
