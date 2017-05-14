import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newSearch } from './../actions/index';

export class SearchHistory extends Component {

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(search) {
    this.props.newSearch(
      search.searchTerm,
      search.searchType,
      20,
      0,
    );
  }


  render() {
    const searchList = this.props.searchHistory.map((search) => {
      return (
        <button
          key={`${search.searchTerm}${search.searchType}`}
          type="button"
          className="list-group-item"
          onClick={() => {
            this.handleSearch(search);
          }}
        >
          {search.searchTerm} <span className="badge">{search.searchType}</span>
        </button>
      );
    });

    return (
      <div className="panel-filter panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Search History</h3>
        </div>
        <div className="panel-body">
          <div className="list-group">
            {searchList}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchHistory: state.searchHistory,
  };
}

export default connect(mapStateToProps, { newSearch })(SearchHistory);
