import React from 'react';
import './Sidebar.css';
import { HouseDoorFill, BookHalf, Star ,HourglassSplit, PersonFill} from 'react-bootstrap-icons';
const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3" id='sidebar'>
      <a href="/" className="title-menu d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
        <BookHalf  width="40" height="32"><use xlinkHref="#bootstrap"/></BookHalf>
        <span className="fs-4">Directorio APP</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="active nav-link" aria-current="page">
          <HouseDoorFill  className="bi pe-none me-2" width="16" height="16" />
            Inicio
          </a>
        </li>
        <li className="nav-item ">
          <a href="#" className="nav-link">
          <Star className="bi pe-none me-2" width="16" height="16" />
            Favoritas
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
          <HourglassSplit className="bi pe-none me-2" width="16" height="16" />
            Recientes
          </a>
        </li>
        <hr />
        <h5 className='title-sec'>Usuario:</h5>
        <li className="nav-item">
          <a href="#" className="nav-link">
          <PersonFill className="bi pe-none me-2" width="16" height="16" />
            Perfil
          </a>  
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-black text-decoration-none">
        <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle" />
           Nombre
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
