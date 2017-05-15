import React from 'react'

const Column = (props) => {
  let mdClass = 'col-md-' + props.md
  let className = props.className ? props.className : ''
  let offset = props.mdOffset ? `col-md-offset-${props.mdOffset}` : ''

  return (
    <div className={`${mdClass} ${offset} ${className}`}>
      {props.children}
    </div>
  )
}

export default Column
