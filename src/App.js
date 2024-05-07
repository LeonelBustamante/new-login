import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import DefaultCardGroup from './components/DefaultCardGroup/DefaultCardGroup';

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <DefaultCardGroup />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
