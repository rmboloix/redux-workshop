import React from 'react'

const BookDescription = ({title, categories, publisher, description}) => {
  categories = categories &&
    categories.map((category) => {
      return <span key={category} className='label label-success'>{category}</span>
    })

  return (
    <div>
      <h4 className='media-heading'>{title}</h4>
      {categories} {publisher && '-'} {publisher}
      <p style={{fontSize: 12, textAlign: 'justify'}}>{description}</p>
    </div>
  )
}

export default BookDescription
