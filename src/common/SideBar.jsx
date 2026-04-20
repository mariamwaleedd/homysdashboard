import React, { useState } from 'react';
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
  X
} from 'lucide-react';
import './SideBar.css';

const SideBar = () => {
  const [activeItem, setActiveItem] = useState('Overview');
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Overview', icon: <LayoutGrid size={22} /> },
    { name: 'Bookings', icon: <Calendar size={22} /> },
    { name: 'Properties', icon: <Home size={22} /> },
    { name: 'Guests', icon: <Users size={22} /> },
    { name: 'Messages', icon: <MessageSquare size={22} /> },
    { name: 'Analytics', icon: <BarChart3 size={22} /> },
    { name: 'Notifications', icon: <Bell size={22} /> },
    { name: 'Settings', icon: <Settings size={22} /> },
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
              <li 
                key={item.name}
                className={`nav-item ${activeItem === item.name ? 'active' : ''}`}
                onClick={() => setActiveItem(item.name)}
              >
                <span className="icon">{item.icon}</span>
                <span className="label">{item.name}</span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="avatar">AD</div>
            <div className="user-info">
              <span className="user-name">Admin User</span>
              <span className="user-role">Super Admin</span>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Overlay for mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default SideBar;