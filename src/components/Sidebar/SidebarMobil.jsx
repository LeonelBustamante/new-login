import React from 'react';
import './Sidebar.css';
import { HouseDoorFill, BookHalf, Star ,HourglassSplit, PersonSquare} from 'react-bootstrap-icons';
const SidebarMobil = () => {
  return (
    <div className="mobil sidebar d-flex flex-column flex-shrink-0 bg-dark">
      <a href="/" className="d-block p-3 link-body-emphasis text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
      <BookHalf className='icon' width="40" height="32"><use xlinkHref="#bootstrap"/></BookHalf>
        <span className="visually-hidden">Icon-only</span>
      </a>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <a href="#" className="nav-link active py-3 border-bottom rounded-0" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
          <HouseDoorFill className="bi pe-none me-2" width="24" height="24" />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link py-3 border-bottom rounded-0" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
          <Star className="bi pe-none me-2" width="24" height="24" />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link py-3 border-bottom rounded-0" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
          <HourglassSplit className="bi pe-none me-2" width="16" height="16" />
          </a>
        </li>
        
      </ul>
      <div className="dropdown border-top">
        <a href="#" className="d-flex align-items-center justify-content-center p-3  text-decoration-none">
          <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle" />
        </a>
      </div>
    </div>
  );
};

export default SidebarMobil;
