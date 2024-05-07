import React from "react";
import { Card } from "react-bootstrap";
import "./DefaultCard.css";

const DefaultCard = ({ imagen, titulo }) => {
  return (
    <Card className="custom-card">
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title className="card-title">{titulo}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default DefaultCard;