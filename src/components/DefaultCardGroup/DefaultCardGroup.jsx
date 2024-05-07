import React from "react";
import { Row, Col } from "react-bootstrap";
import DefaultCard from "../DefaultCard/DefaultCard";
import "./DefaultCardGroup.css";

const DefaultCardGroup = () => {
  return (
    <Row className="custom-card-group">
      <Col md={4} lg={3} className="custom-card-group-item">
        <DefaultCard
          imagen={require("../../assets/img/img-card.jpg")}
          titulo="Título 1"
        />
      </Col>
      <Col md={4} lg={3} className="custom-card-group-item">
        <DefaultCard
          imagen={require("../../assets/img/img-card.jpg")}
          titulo="Título 2"
        />
      </Col>
      <Col md={4} lg={3} className="custom-card-group-item">
        <DefaultCard
          imagen={require("../../assets/img/img-card.jpg")}
          titulo="Título 3"
        />
      </Col>
      <Col md={4} lg={3} className="custom-card-group-item">
        <DefaultCard
          imagen={require("../../assets/img/img-card.jpg")}
          titulo="Título 4"
        />
      </Col>
    </Row>
  );
};

export default DefaultCardGroup;
