import React from 'react'

const BookContainer = ({children, activeClass}) => {
  return (
    <div className={activeClass}
      style={{height: 400, padding: 10, overflow: 'hidden'}}>
      {children}
    </div>
  )
}

export default BookContainer
