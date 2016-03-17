import React, { Component } from 'react';

import { Pagination } from '../../../src/pagination';

function pageContentFormatter(page, activePage) {
  if (page === activePage) {
    return <span>You are on <strong>{page}</strong></span>;
  }

  return <span>Go to <strong>{page}</strong></span>;
}

export default class PaginationPage extends Component {
  state = {
    activePageNumber: 1,
  };

  handleSelect = (activePageNumber) => this.setState({ activePageNumber });

  render() {
    const { activePageNumber } = this.state;

    return (
      <div>
        <Pagination
          activePageNumber={activePageNumber}
          maxPageNumber={10}
          onSelect={this.handleSelect}
        />
        <Pagination
          activePageNumber={activePageNumber}
          alignment="center"
          maxPageNumber={10}
          nextContent="Next"
          onSelect={this.handleSelect}
          pageContentFormatter={pageContentFormatter}
          previousContent="Previous"
        />
      </div>
    );
  }
}
