import React from 'react'

const BookInfo = ({pages, averageRating, publishedDate, industryIdentifiers, authors}) => {
  let isbns = industryIdentifiers &&
    industryIdentifiers.map((isbn) => {
      return (
        <span key={isbn.identifier}
          className='label label-default'>
          {isbn.type.replace('_', ' ')} : {isbn.identifier}
        </span>
      )
    })

  authors = authors &&
    authors.map((author, index) => {
      if (index < 7) {
        return (
          <span key={index} className='label label-primary'>{author}</span>
        )
      }
    })

  return (
    <div>
      <span className='label label-default'>{pages} pages</span>
      <span className='badge label-default'>{averageRating}</span>
      <span className='label label-default'>{publishedDate}</span>
      {isbns}
      {authors}
    </div>
  )
}

export default BookInfo
