import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaCartArrowDown, FaCaretDown, FaUser } from "react-icons/fa";
import Sidebar from "./sideBar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo-container" onClick={()=>navigate('/products')}>
          <FaCartArrowDown size={30} />
          <p className="header-title">Shopcart</p>
        </div>
        <div className="nav-links">
          <div className="logo-container" onClick={()=>navigate('/cart')}>
            <p>Cart</p>
            <FaCartArrowDown size={15} style={{marginLeft:5}}/>
          </div>
          <div className="logo-container" onClick={()=>navigate('/account')}>
            <p>Account</p>
            <FaUser size={15} style={{marginLeft:5}}/>
          </div>
        </div>
        <FaBars className="hamburger-icon" size={30} onClick={toggleSidebar} />
      </div>
      {isSidebarOpen && (
        <Sidebar closeSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      )}
    </header>
  );
};

export default Header;
