import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ closeSidebar , isSidebarOpen}) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'show' : ''}`}>
      <FaTimes className="close-icon" size={30} onClick={closeSidebar} />
      <nav>
        <ul>
          <li><Link to="/products" onClick={closeSidebar}>Home</Link></li>
          <li><Link to="/cart" onClick={closeSidebar}>Cart</Link></li>
          <li><Link to="/account" onClick={closeSidebar}>Account</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
