import React from 'react';
import './Sidebar.css';
import { House, Speedometer2 } from 'react-bootstrap-icons';
const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark" id='sidebar'>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
          <House className="bi pe-none me-2" width="16" height="16" />
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
          <Speedometer2 className="bi pe-none me-2" width="16" height="16" />
            Dashboard
          </a>
        </li>
        
      </ul>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
         asdasd
        </a>
        
      </div>
    </div>
  );
};

export default Sidebar;
