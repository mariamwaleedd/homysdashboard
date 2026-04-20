import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutGrid, 
  Calendar, 
  Home, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Bell, 
  Settings,
  Menu,
  X,
  UserCircle
} from 'lucide-react';
import './SideBar.css';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Overview', icon: <LayoutGrid size={22} />, path: '/' },
    { name: 'Bookings', icon: <Calendar size={22} />, path: '/bookings' },
    { name: 'Properties', icon: <Home size={22} />, path: '/properties' },
    { name: 'Guests', icon: <Users size={22} />, path: '/guests' },
    { name: 'Messages', icon: <MessageSquare size={22} />, path: '/messages' },
    { name: 'Analytics', icon: <BarChart3 size={22} />, path: '/analytics' },
    { name: 'Notifications', icon: <Bell size={22} />, path: '/notifications' },
    { name: 'Settings', icon: <Settings size={22} />, path: '/settings' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button className="mobile-toggle" onClick={toggleSidebar}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar Container */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h1 className="brand-logo">HOMYS</h1>
          <p className="brand-subtext">Admin Dashboard</p>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="icon">{item.icon}</span>
                  <span className="label">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <NavLink to="/account" className={({ isActive }) => `user-profile ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            <div className="avatar">AD</div>
            <div className="user-info">
              <span className="user-name">Admin User</span>
              <span className="user-role">Super Admin</span>
            </div>
          </NavLink>
        </div>
      </aside>
      
      {/* Overlay for mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default SideBar;