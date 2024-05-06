import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DefaultCard = ({ imagen, titulo, descripcion, link }) => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={imagen} />
			<Card.Body>
				<Card.Title>{titulo}</Card.Title>
				<Card.Text>{descripcion}</Card.Text>
				<Button variant="primary">Ver más</Button>
			</Card.Body>
		</Card>
	);
};

export default DefaultCard;
