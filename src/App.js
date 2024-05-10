import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import './App.css';
import { Col, Row } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Row>
        {/* Sidebar */}
        <Col sm={12} md={12} lg={2}>
          <Sidebar />
        </Col>
        {/* Dashboard */}
        <Col sm={9} md={10} lg={9} className='mt-5'>
          <Dashboard />
        </Col>
        <Col sm={9} md={10} lg={12}>
          <Footer />
        </Col>
      </Row>
      {/* Footer */}
    </div>
  );
}

export default App;
