import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import SidebarMobile from './SidebarMobil';
import './Sidebar.css'; 

const Menu = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 920);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1280);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="menu col-2">
      {isMobile ? <SidebarMobile /> : <Sidebar />}
    </div>
  );
};

export default Menu;
