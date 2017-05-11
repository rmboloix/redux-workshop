import React, {Component} from 'react'

export class FilterBook extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
    this.changeFilterText = this.changeFilterText.bind(this)
  }

  changeFilterText (event) {
    this.setState({
      value: event.target.value
    })
  }

  render () {
    return (
      <div className='input-group'>
        <input type='text'
          className='form-control'
          value={this.state.value}
          onChange={this.changeFilterText}
          placeholder='Filter books' />
        <span className='input-group-btn'>
          <button className='btn btn-primary' type='button'>Search</button>
        </span>
      </div>
    )
  }
}
