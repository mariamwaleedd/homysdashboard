import React from 'react';
import { Search, Bell } from 'lucide-react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
        </div>
      </div>

      <div className="navbar-right">
        <div className="notification-wrapper">
          <Bell className="nav-icon" size={24} />
          <span className="notification-dot"></span>
        </div>
        
        <div className="nav-avatar">
          AD
        </div>
      </div>
    </nav>
  );
};

export default NavBar;