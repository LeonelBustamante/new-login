import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/img/logo_2024.png'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <Container >
        <Row>
          <Col sm={6}>
            <img src={logo} alt="Descripción de la imagen" />
          </Col>
          <Col sm={6} className='info-footer'>
            <p>Dirección: 123 Calle Principal, Ciudad</p>
            <p>Código Postal: 12345</p>
          </Col>
          <Col className='der-footer' sm={12}>
            Todos los Derechos Reservados © 2024
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;