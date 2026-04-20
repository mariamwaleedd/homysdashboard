import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/notifications" className="notification-link">
          <div className="notification-wrapper">
            <Bell className="nav-icon" size={24} />
            <span className="notification-dot"></span>
          </div>
        </Link>
        
        <Link to="/account" className="nav-avatar-link">
          <div className="nav-avatar">
            AD
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;