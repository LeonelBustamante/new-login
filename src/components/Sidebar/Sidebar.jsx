import React from 'react';
import './Sidebar.css';
import { HouseDoorFill, BookHalf, Star ,HourglassSplit, PersonFill} from 'react-bootstrap-icons';
import { Nav, Navbar} from 'react-bootstrap';
const Sidebar = () => {
  return (
    <Navbar className="nav navbar d-flex flex-column p-1" id='sidebar'>
      <Navbar.Brand href="/" className="title-menu d-flex align-items-center mb-4">
        <BookHalf width="40" height="32"><use xlinkHref="#bootstrap"/></BookHalf>
        <span className="title fs-4">Directorio APP</span>
      </Navbar.Brand>
      <Nav className="flex-column mb-auto col-12">
        <hr className='hr-menu'/>
        <Nav.Item>
        <Nav.Link href="#0">
            <HouseDoorFill className="bi pe-none me-2" width="16" height="16" />
            Inicio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#1">
            <Star className="bi pe-none me-2" width="16" height="16" />
            Favoritas
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#2">
            <HourglassSplit className="bi pe-none me-2" width="16" height="16" />
            Recientes
          </Nav.Link>
        </Nav.Item>
        <hr className='hr-menu'/>
        <h5 className='title-sec'>Usuario:</h5>
        <Nav.Item>
          <Nav.Link href="#3">
            <PersonFill className="bi pe-none me-2" width="16" height="16" />
            Perfil
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <hr className='hr-menu'/>
      <Nav.Link className='col-12'>
        <img src="https://github.com/mdo.png" alt="mdo" width="35" height="35" className="rounded-circle m-2" />
          Nombre
      </Nav.Link>
    </Navbar>
  );
};

export default Sidebar;
