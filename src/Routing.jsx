import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './common/SideBar';
import NavBar from './common/NavBar';

// Import Pages
import Overview from './pages/SideBar/Overview';
import Bookings from './pages/SideBar/Bookings';
import Properties from './pages/SideBar/Properties';
import Guests from './pages/SideBar/Guests';
import Messages from './pages/SideBar/Messages';
import Analytics from './pages/SideBar/Analytics';
import Notifications from './pages/SideBar/Notifications';
import Settings from './pages/SideBar/Settings';
import Account from './pages/SideBar/Account';
import ErrorPage from './pages/ErrorPage';
import ViewProperty from './pages/ViewProperty';
import EditProperty from './pages/EditProperty';

const Routing = () => {
  return (
    <Router>
      <div className="app-layout">
        <SideBar />
        <div className="main-content">
          <NavBar />
          <div className="page-wrapper">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/guests" element={<Guests />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/account" element={<Account />} />
              <Route path="/view-property" element={<ViewProperty />} />
              <Route path="/edit-property" element={<EditProperty />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Routing;