import React, { Component } from 'react';
import BookImage from './BookImage';
import BookDescription from './BookDescription';
import BookInfo from './BookInfo';

class Book extends Component {

  render() {
    if (this.props.book === 'undefined') {
      return null;
    }

    const book = this.props.book;
    const { volumeInfo: info } = book;
    const limitedDescription = info.description &&
        info.description.substr(0, 800).concat(info.description.length > 800 ? '...' : '');
    const pages = info.pageCount;

    const bookImage = this.props.activeView !== 'list-view' && (
      <BookImage
        link={info.previewLink ? info.previewLink : '#'}
        image={info.imageLinks ? info.imageLinks.thumbnail : '/public/noimage.png'}
        alt={info.title}
      />
      );

    const bookInfo = this.props.activeView !== 'list-view' && (
      <BookInfo
        pages={pages}
        averageRating={info.averageRating}
        publishedDate={info.publishedDate}
        industryIdentifiers={info.industryIdentifiers}
        authors={info.authors}
      />
      );

    const bookDescription = (
      <BookDescription
        title={info.title}
        categories={info.categories}
        publisher={info.publisher}
        description={limitedDescription}
      />
    );

    return (
      <div className="media">
        <div className="media-left">
          { bookImage }
          { bookInfo }
        </div>
        <div className="media-body">
          {bookDescription}
        </div>
      </div>
    );
  }
}

export default Book;
