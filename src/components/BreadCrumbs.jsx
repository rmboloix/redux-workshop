import React from 'react'

export const BreadCrumbs = (props) => {
  let items = props.items.map((item) => {
    return (
      <li key={item} className={item === props.active ? 'active' : ''}><a href='#'>{item}</a></li>
    )
  })

  return (
    <div className='row'>
      <ol className='breadcrumb'>
        {items}
      </ol>
    </div>
  )
}
