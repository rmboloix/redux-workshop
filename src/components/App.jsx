import React from 'react'

import BookList from '../containers/BookList.jsx'
import GoogleAPISearch from '../containers/GoogleAPISearch.jsx'
import Header from './common/Header.jsx'
import ViewSelector from '../containers/ViewSelector.jsx'
import Row from './common/Row.jsx'
import ContainerFluid from './common/ContainerFluid.jsx'
import Col from './common/Column.jsx'
import FilterResults from '../containers/FilterResults.jsx'

require('../assets/styles/style.scss')

const App = (props) => (
  <ContainerFluid>
    <Header />
    <Row>
      <Col md={2}>
        <ViewSelector />
      </Col>
      <Col md={10}>
        <GoogleAPISearch />
      </Col>
    </Row>
    <Row>
      <Col md={2}>
        <FilterResults />
      </Col>
      <Col md={10}>
        <BookList />
      </Col>
    </Row>
  </ContainerFluid>
)

export default App
