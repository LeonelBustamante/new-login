import React from "react";
import DefaultCardGroup from "../DefaultCardGroup/DefaultCardGroup";
import Typography from "../Typography/Typography";
import { Row } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Row>
      <Typography size={"2em"} weight={"bold"}>
        Directorio de aplicaciones
      </Typography>
      <DefaultCardGroup />
    </Row>
  );
};
export default Dashboard;
