import { Navbar, Nav} from 'react-bootstrap';
import { BookHalf} from 'react-bootstrap-icons';

const NavBar = () => {

  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Navbar.Brand href="#home">
      <BookHalf width="40" height="32"><use xlinkHref="#bootstrap"/></BookHalf>
        <span className="title fs-4">Directorio APP</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <BookHalf />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Perfil</Nav.Link>
          <Nav.Link href="#link2">App</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
