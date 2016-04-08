import React, { PropTypes } from 'react';
import cx from 'classnames';
import cxBinder from 'classnames/bind';

import TextAlignment from '../text-alignment';
import { HideForScreenReader } from '../visibility';
import styles from './_styles.scss';

const cxStyles = cxBinder.bind(styles);

function createPaginationLink(baseClassName, disabledCalculator, newPageCalculator) {
  const PaginationEndPoint = ({
    activePage,
    children,
    className,
    label,
    lastPage,
    onSelect,
    page,
    startPage,
    ...restProps,
  }) => {
    const current = activePage === page;
    const disabled =
      lastPage < startPage || disabledCalculator({ activePage, startPage, lastPage });
    const classNames = cx(className, cxStyles(baseClassName, { current, disabled }));
    let content = children;

    if (!current && !disabled) {
      const onClick = (...args) => {
        const [event] = args;

        event.preventDefault();

        if (onSelect) {
          onSelect(newPageCalculator({ activePage, startPage, lastPage, page }), ...args);
        }
      };

      content = (
        <a
          href="#"
          aria-label={label}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }

    return <li {...restProps} className={classNames}>{content}</li>;
  };

  PaginationEndPoint.propTypes = {
    activePage: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string,
    current: PropTypes.bool,
    label: PropTypes.string,
    lastPage: PropTypes.number,
    onSelect: PropTypes.func,
    page: PropTypes.number,
    startPage: PropTypes.number,
  };

  return PaginationEndPoint;
}

const PaginationPrevious =
  createPaginationLink(
    'pagination-previous',
    ({ activePage, startPage }) => activePage <= startPage,
    ({ activePage, startPage, lastPage }) => Math.max(startPage, Math.min(activePage - 1, lastPage))
  );

PaginationPrevious.displayName = 'PaginationPrevious';
PaginationPrevious.propTypes = {
  activePage: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  lastPage: PropTypes.number,
  onSelect: PropTypes.func,
  startPage: PropTypes.number,
};

const PaginationNext =
  createPaginationLink(
    'pagination-next',
    ({ activePage, lastPage }) => activePage >= lastPage,
    ({ activePage, startPage, lastPage }) => Math.min(lastPage, Math.max(activePage + 1, startPage))
  );

PaginationNext.displayName = 'PaginationNext';
PaginationNext.propTypes = {
  activePage: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  lastPage: PropTypes.number,
  onSelect: PropTypes.func,
  startPage: PropTypes.number,
};

const PaginationPage = createPaginationLink(null, () => false, ({ page }) => page);

PaginationPage.displayName = 'PaginationPage';
PaginationPage.propTypes = {
  activePage: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  onSelect: PropTypes.func,
  page: PropTypes.number,
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
  activePage,
  className,
  label,
  maxPages,
  nextClassName,
  nextContent,
  nextLabel,
  nextStyle,
  numPages: maybeNumPages,
  onSelect,
  pageClassName,
  pageContentFormatter,
  pageLabelFormatter,
  pageStyle,
  previousClassName,
  previousContent,
  previousLabel,
  previousStyle,
  startPage,
  ...restProps,
}) => {
  const classNames = cx(className, cxStyles('pagination'));
  const pages = [];
  const numPages = maybeNumPages >= 1 ? maybeNumPages : 1;
  const lastPage = startPage + numPages - 1;
  const limitPages = maxPages > 0 && numPages > maxPages;
  let innerStartPage = startPage + 1;
  let innerLastPage = lastPage - 1;

  if (limitPages) {
    if (activePage >= startPage && activePage <= lastPage) {
      const offset = Math.ceil((maxPages - 1) / 2);
      const offsetStartPage = activePage - offset + 1;
      const offsetLastPage = activePage + maxPages - offset - 2;

      if (offsetStartPage < innerStartPage) {
        innerLastPage = innerStartPage + maxPages - 3;
      } else if (offsetLastPage > innerLastPage) {
        innerStartPage = innerLastPage - maxPages + 3;
      } else {
        innerStartPage = offsetStartPage;
        innerLastPage = offsetLastPage;
      }
    } else {
      innerLastPage = startPage + maxPages - 2;
    }
  }

  pages.push(
    <PaginationPage
      activePage={activePage}
      className={pageClassName}
      key={startPage}
      label={pageLabelFormatter ? pageLabelFormatter(startPage, activePage) : null}
      onSelect={onSelect}
      page={startPage}
      style={pageStyle}
    >
      {pageContentFormatter ? pageContentFormatter(startPage, activePage) : startPage}
    </PaginationPage>
  );

  if (limitPages && innerStartPage > startPage + 1) {
    pages.push(<PaginationEllipsis key="startEllipsis" />);
  }

  for (let i = innerStartPage; i <= innerLastPage; i++) {
    pages.push(
      <PaginationPage
        activePage={activePage}
        className={pageClassName}
        key={i}
        label={pageLabelFormatter ? pageLabelFormatter(i, activePage) : null}
        onSelect={onSelect}
        page={i}
        style={pageStyle}
      >
        {pageContentFormatter ? pageContentFormatter(i, activePage) : i}
      </PaginationPage>
    );
  }

  if (limitPages && innerLastPage < lastPage - 1) {
    pages.push(<PaginationEllipsis key="lastEllipsis" />);
  }

  pages.push(
    <PaginationPage
      activePage={activePage}
      className={pageClassName}
      key={lastPage}
      label={pageLabelFormatter ? pageLabelFormatter(lastPage, activePage) : null}
      onSelect={onSelect}
      page={lastPage}
      style={pageStyle}
    >
      {pageContentFormatter ? pageContentFormatter(lastPage, activePage) : lastPage}
    </PaginationPage>
  );

  return (
    <TextAlignment
      {...restProps}
      aria-label={label}
      className={classNames}
      componentClass="ul"
      role="navigation"
    >
      <PaginationPrevious
        activePage={activePage}
        className={previousClassName}
        label={previousLabel}
        lastPage={lastPage}
        onSelect={onSelect}
        startPage={startPage}
        style={previousStyle}
      >
        {previousContent}
      </PaginationPrevious>
      {pages}
      <PaginationNext
        activePage={activePage}
        className={nextClassName}
        label={nextLabel}
        lastPage={lastPage}
        onSelect={onSelect}
        startPage={startPage}
        style={nextStyle}
      >
        {nextContent}
      </PaginationNext>
    </TextAlignment>
  );
};

Pagination.propTypes = {
  activePage: PropTypes.number,
  className: PropTypes.string,
  label: PropTypes.string,
  maxPages: PropTypes.number,
  nextClassName: PropTypes.string,
  nextContent: PropTypes.node,
  nextLabel: PropTypes.string,
  nextStyle: PropTypes.object,
  numPages: PropTypes.number,
  onSelect: PropTypes.func,
  pageClassName: PropTypes.string,
  pageContentFormatter: PropTypes.func,
  pageLabelFormatter: PropTypes.func,
  pageStyle: PropTypes.object,
  previousClassName: PropTypes.string,
  previousContent: PropTypes.node,
  previousLabel: PropTypes.string,
  previousStyle: PropTypes.object,
  startPage: PropTypes.number,
};
Pagination.defaultProps = {
  maxPages: 0,
  numPages: 1,
  startPage: 1,
};

export default Pagination;
