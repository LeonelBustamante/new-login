import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import './App.css';
import { Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Row>
        {/* Sidebar */}
        <Col sm={12} md={12} lg={2}>
          <Sidebar />
        </Col>
        {/* Dashboard */}
        <Col sm={12} md={12} lg={10}>
          <Router>
            <Routes>
              <Route path="/" Component={Dashboard} />
              <Route path="/perfil" Component={Profile} />
            </Routes>
          </Router>
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
