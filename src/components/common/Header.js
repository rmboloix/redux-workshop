import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import AtrapaloLogo from './AtrapaloLogo';
import DateHeader from '../../../src/components/common/DateHeader';

const Header = () => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  // #de0000
  return (
    <div>
      <Col md={4} sm={4} xsHidden>
        <AtrapaloLogo />
      </Col>
      <Col md={8} sm={8} xs={12} style={{ margin: '0 auto' }}>
        <h1
          style={{ textAlign: 'right', verticalAlign: 'middle', color: 'white' }}
          className="right"
        >
          DT - TECH LIBRARY
        </h1>
      <DateHeader />
      </Col>
    </div>
  );
};

export default Header;
