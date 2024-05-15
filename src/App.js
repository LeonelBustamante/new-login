import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Menu from './components/Navbar/NavBar';
import './App.css';
import { Col, Row } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Row>
        {/* Navbar */}
        <Menu></Menu>
        {/* Sidebar */}
        <Col sm={12} md={12} lg={2}>
          <Sidebar />
        </Col>
        {/* Dashboard */}
        <Col sm={9} md={10} lg={10}>
          <Dashboard />
        </Col>
        <Col sm={12} md={12} lg={12}>
          <Footer />
        </Col>
      </Row>
      {/* Footer */}
    </div>
  );
}

export default App;
