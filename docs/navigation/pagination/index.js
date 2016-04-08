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
    activePage: 1,
  };

  handleSelect = (activePage) => this.setState({ activePage });

  render() {
    const { activePage } = this.state;

    return (
      <div>
        <Pagination
          activePage={activePage}
          numPages={20}
          onSelect={this.handleSelect}
        />
        <Pagination
          activePage={activePage}
          alignment="center"
          maxPages={9}
          numPages={20}
          nextContent="Next"
          onSelect={this.handleSelect}
          pageContentFormatter={pageContentFormatter}
          previousContent="Previous"
        />
      </div>
    );
  }
}
