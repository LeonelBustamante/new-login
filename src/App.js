import React from 'react';
import Menu from './components/Sidebar/Menu';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import './App.css';
import { Col, Row } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Row>
        {/* Sidebar */}
        <Col sm={3} md={2} lg={2}>
          <Menu />
        </Col>
        {/* Dashboard */}
        <Col sm={9} md={10} lg={10} className='mt-5'>
          <Dashboard />
        </Col>
      </Row>
      {/* Footer */}
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </div>
  );
}

export default App;
