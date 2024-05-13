import React from "react";
import DefaultCardGroup from "../DefaultCardGroup/DefaultCardGroup";
import Typography from "../Typography/Typography";
import { Row } from "react-bootstrap";
import './Dashboard.css';

const Dashboard = () => {
  return (
    <Row className="dashboard">
      <Typography size={"2em"} weight={"bold"} color={"#2B3E4C"}>
        Directorio de aplicaciones
      </Typography>
      <DefaultCardGroup />
      <DefaultCardGroup />
    </Row>
  );
};
export default Dashboard;
