import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {changeView} from '../actions'

class ViewSelector extends Component {
  constructor (props) {
    super(props)

    this.changeView = this.changeView.bind(this)
    this.getActiveClass = this.getActiveClass.bind(this)
  }

  changeView (view) {
    this.props.changeView(view)
  }

  getActiveClass (view) {
    if (this.props.activeView === view) {
      return 'active'
    }
  }

  render () {
    return (
      <div className='btn-group' role='group'>
        <button type='button'
          disabled
          className={'btn btn-default '.concat(this.getActiveClass('grid-view'))}
          onClick={() => this.changeView('grid-view')}>
          <span className='glyphicon glyphicon-th-large' />
        </button>
        <button type='button'
          className={'btn btn-default '.concat(this.getActiveClass('3books-view'))}
          onClick={() => this.changeView('3books-view')}>
          <span className='glyphicon glyphicon-th' />
        </button>
        <button type='button'
          className={'btn btn-default '.concat(this.getActiveClass('list-view'))}
          onClick={() => this.changeView('list-view')}>
          <span className='glyphicon glyphicon-th-list' />
        </button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    activeView: state.activeView
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({changeView}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewSelector)
