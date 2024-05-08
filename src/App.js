import React from 'react';
import Menu from './components/Sidebar/Menu';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import { Col, Row } from 'react-bootstrap';

function App() {
  return (
    <Row>
      <Col sm={1} md={1} lg={2}>
        <Menu />
      </Col>
      <Col sm={11} md={11} lg={10}>
        <Dashboard />
      </Col>
    </Row>
  );
}

export default App;
