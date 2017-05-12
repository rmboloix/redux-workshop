import React from 'react'
import {connect} from 'react-redux'

const FilterResults = (props) => {
  return (
    <div className='panel-filter panel panel-default'>
      <div className='panel-heading'>
        <h3 className='panel-title'>Filter</h3>
      </div>
      <div className='panel-body'>
          Total results <span className='label label-primary'>{props.totalItems}</span>
      </div>
      <div className='panel-footer'>Panel footer</div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    totalItems: state.search.totalItems
  }
}

export default connect(mapStateToProps)(FilterResults)
