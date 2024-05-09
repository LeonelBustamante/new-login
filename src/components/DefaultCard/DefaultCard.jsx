import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";

const DefaultCard = ({ imagen, titulo }) => {
  return (
    <Card className="custom-card">
      <Card.Img variant="top" src={imagen} />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{titulo}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default DefaultCard;
