import React, {Component} from 'react';
import {connect} from 'react-redux';
import Book from '../components/book/Book';
import BookContainer from '../components/book/BookContainer';
import Pagination from './Pagination';
import TotalResults from '../components/TotalResults';

class BookList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let activeClass = this.props.activeView === '3books-view'
      ? 'col-md-4 col-sm-6' : 'col-md-12 col-sm-12';

    let books = this.props.books.map((book, index) => {
      return (
        <BookContainer key={book.id}
                       activeClass={activeClass}>
          <Book book={book}/>
        </BookContainer>
      );
    });

    let pagination = this.props.totalItems > 0 &&
      (<div className="col-md-12 text-center">
        <Pagination />
      </div>);

    return (
      <div className="row">
        <div className="col-md-2">
          <TotalResults totalItems={this.props.totalItems}/>
        </div>
        <div className="col-md-12">
          {books}
        </div>
        {pagination}
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
    totalItems: state.search.totalItems,
    activeView: state.activeView
  }
}

export default connect(mapStateToProps)(BookList);
