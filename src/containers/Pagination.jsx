import React, {Component} from 'react'
import {connect} from 'react-redux'

import {changePage} from '../actions'

class Pagination extends Component {
  constructor (props) {
    super(props)

    this.changePage = this.changePage.bind(this)
  }

  changePage (newPage) {
    this.props.changePage(this.props.search.request, newPage)
  }

  render () {
    let {activePage, totalPages} = this.props.search

    let pages = [...new Array(totalPages)].map((page, index) => {
      return (
        <li key={index} className={activePage === (index + 1) ? 'active' : ''}>
          <a href='#' onClick={() => { this.changePage(index + 1) }}>{index + 1}</a>
        </li>
      )
    })

    let previousPageSelector = (
      <li>
        <a href='#' aria-label='Previous' onClick={() => { this.changePage(activePage - 1) }}>
          <span aria-hidden='true'>&laquo;</span>
        </a>
      </li>
    )

    let nextPageSelector = (
      <li>
        <a href='#' aria-label='Next' onClick={() => {
          this.changePage(activePage + 1)
        }}>
          <span aria-hidden='true'>&raquo;</span>
        </a>
      </li>
    )

    return (
      <nav aria-label='Search navigation'>
        <ul className='pagination'>
          {previousPageSelector}
          {pages}
          {nextPageSelector}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps (state) {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps, {changePage})(Pagination)
