import React from 'react'

import AtrapaloLogo from './AtrapaloLogo.jsx'
import Row from './Row.jsx'

const Header = () => {
  let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

  return (
    <Row className='header'>
      <div className='clearfix'>
        <AtrapaloLogo />
        <div className='col-md-8' style={{margin: '0 auto'}}>
          <h1 style={{textAlign: 'right', verticalAlign: 'middle', color: 'white'}}
            className='right'>
            DT - TECH LIBRARY
          </h1>
          <span style={{float: 'right', color: 'white'}}>{new Date().toLocaleDateString('es-ES', options)}</span>
        </div>
      </div>
    </Row>
  )
}

export default Header
