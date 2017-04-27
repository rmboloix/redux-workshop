import React, {Component} from 'react'
import {connect} from 'react-redux'

import {newSearch} from '../actions'

class GoogleAPISearch extends Component {
  constructor (props) {
    super(props)

    this.state = {
      query: '',
      type: 'title',
      maxResults: 10,
      placeHolder: 'Clean Code'
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleTypeSelectorChange = this.handleTypeSelectorChange.bind(this)
    this.handleMaxResultsChange = this.handleMaxResultsChange.bind(this)
    this.doSearch = this.doSearch.bind(this)
  }

  handleInputChange (event) {
    this.setState({
      query: event.target.value
    })
  }

  handleTypeSelectorChange (event) {
    let placeHolder = ''
    let value = event.target.value

    switch (value) {
      case 'title' :
        placeHolder = 'Clean Code'
        break
      case 'author':
        placeHolder = 'Robert C. Martin'
        break
      case 'publisher' :
        placeHolder = "O'Reilly Media, Inc"
        break
      case 'isbn':
        placeHolder = '9781785288319'
        break
    }

    this.setState({
      type: value,
      placeHolder
    })
  }

  handleMaxResultsChange (event) {
    this.setState({
      maxResults: event.target.value
    })
  }

  doSearch (event) {
    event.preventDefault()
    this.props.newSearch(
      this.state.query,
      this.state.type,
      this.state.maxResults
    )
  }

  render () {
    return (
      <form onSubmit={this.doSearch} className='row search-form'>
        <div className='col-md-2 col-sm-2'>
          <select className='form-control'
            onChange={this.handleTypeSelectorChange}>
            <option value={'title'}>Title</option>
            <option value={'author'}>Author</option>
            <option value={'publisher'}>Publisher</option>
            <option value={'byquery'}>ByQuery</option>
            <option value={'isbn'}>ISBN</option>
          </select>
        </div>
        <div className='col-md-1 col-sm-1'>
          <select className='form-control'
            onChange={this.handleMaxResultsChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={40}>40</option>
          </select>
        </div>
        <div className='col-md-7 col-sm-7'>
          <input type='text'
            className='form-control'
            value={this.state.query}
            onChange={this.handleInputChange}
            placeholder={this.state.placeHolder} />
        </div>
        <div className='col-md-2 col-sm-2'>
          <button className='btn form-control'
            type='submit'>
            {this.props.searchStatus !== 'SEARCHING' ? 'Search on Google' : (<i className='fa fa-spinner fa-spin' />)}
          </button>
        </div>
      </form>
    )
  }
}

function mapStatusToProps (state) {
  return {
    searchStatus: state.search.status
  }
}

export default connect(mapStatusToProps, {newSearch})(GoogleAPISearch)
