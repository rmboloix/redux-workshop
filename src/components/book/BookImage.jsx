import React from 'react'

const BookImage = ({link, image, alt}) => {
  return (
    <a href={link} target='_blank'>
      <img className='media-object img-thumbnail'
        src={image}
        alt={alt} />
    </a>
  )
}

export default BookImage
