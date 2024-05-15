import React from "react";
import { Card, Row, Col, Image, Button } from "react-bootstrap";
import "./Profile.css";
import { PencilSquare } from "react-bootstrap-icons";

import Typography from "../Typography/Typography";

const Profile = () => {
  return (
    <div className="fondo">
      <Row className="profile-container p-5">
        <Card className="profile-card">
          <Card.Header className="header d-flex align-items-center justify-content-between">
            <Typography size={"1.5em"} weight={600} color={"white"}>
              Mi perfil
            </Typography>
            <Button variant="warning" className="botonEditar d-flex align-items-center" size="sm">
              <PencilSquare />
              <Typography> Editar</Typography>
            </Button>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={3} className="foto">
                <Image src={require("../../assets/img/img-card.jpg")} fluid />
              </Col>
              <Col md={9} className="datos p-3">
                <ul>
                  <li>
                    <Typography weight={600}>Nombre: </Typography>
                    <Typography weight={400}>Juan</Typography>
                  </li>
                  <li>
                    <Typography weight={600}>Apellido: </Typography>
                    <Typography weight={400}>Perez</Typography>
                  </li>
                  <li>
                    <Typography weight={600}>DNI: </Typography>
                    <Typography weight={400}>123456789</Typography>
                  </li>
                  <li>
                    <Typography weight={600}>Organización: </Typography>
                    <Typography weight={400}>Ministerio de salud</Typography>
                  </li>
                </ul>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="footerCard"></Card.Footer>
        </Card>
      </Row>
    </div>
  );
};

export default Profile;
