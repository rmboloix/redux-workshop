import React from 'react'

const Row = (props) => {
  let className = props.className ? props.className : ''

  return (
    <div className={`row ${className}`}>
      {props.children}
    </div>
  )
}

export default Row
