import React, { useState } from 'react';
import { Search, Download } from 'lucide-react';
import './Bookings.css';

const bookingsData = [
  { id: 'BK001', guest: 'Ahmed Hassan', property: 'Beachfront Villa', location: 'Sahel', checkIn: '2026-04-20', checkOut: '2026-04-27', nights: 7 },
  { id: 'BK002', guest: 'Sara Mansour', property: 'Luxury Apartment', location: 'Cairo', checkIn: '2026-04-22', checkOut: '2026-04-25', nights: 3 },
  { id: 'BK003', guest: 'Mohamed Ali', property: 'Sahel Chalet', location: 'Sahel', checkIn: '2026-04-23', checkOut: '2026-04-30', nights: 7 },
  { id: 'BK004', guest: 'Nour Khalil', property: 'Downtown Studio', location: 'Cairo', checkIn: '2026-04-25', checkOut: '2026-04-28', nights: 3 },
  { id: 'BK005', guest: 'Layla Ibrahim', property: 'Marina View', location: 'Gouna', checkIn: '2026-04-26', checkOut: '2026-05-03', nights: 7 },
  { id: 'BK006', guest: 'Omar Farid', property: 'Red Sea Resort', location: 'Red Sea', checkIn: '2026-04-28', checkOut: '2026-05-05', nights: 7 },
  { id: 'BK007', guest: 'Yasmin Adel', property: 'Penthouse Suite', location: 'Cairo', checkIn: '2026-05-01', checkOut: '2026-05-04', nights: 3 },
  { id: 'BK008', guest: 'Karim Zaki', property: 'Beach Chalet', location: 'Sahel', checkIn: '2026-05-02', checkOut: '2026-05-09', nights: 7 },
];

const Bookings = () => {
  const [search, setSearch] = useState('');
  const [propFilter, setPropFilter] = useState('');
  const [locFilter, setLocFilter] = useState('');

  // Extract unique properties/locations for dropdowns
  const uniqueProps = [...new Set(bookingsData.map(b => b.property))];
  const uniqueLocs = [...new Set(bookingsData.map(b => b.location))];

  const filteredBookings = bookingsData.filter(booking => {
    const matchesSearch = 
      booking.guest.toLowerCase().includes(search.toLowerCase()) || 
      booking.id.toLowerCase().includes(search.toLowerCase());
    const matchesProp = propFilter === '' || booking.property === propFilter;
    const matchesLoc = locFilter === '' || booking.location === locFilter;
    
    return matchesSearch && matchesProp && matchesLoc;
  });

  return (
    <div className="bookings-page">
      <div className="bookings-card">
        {/* Top Controls */}
        <div className="bookings-toolbar">
          <div className="bookings-toolbar-left">
            <div className="bookings-search-box">
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Search bookings..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select 
              className="bookings-filter-select"
              value={propFilter}
              onChange={(e) => setPropFilter(e.target.value)}
            >
              <option value="">All Properties</option>
              {uniqueProps.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            <select 
              className="bookings-filter-select"
              value={locFilter}
              onChange={(e) => setLocFilter(e.target.value)}
            >
              <option value="">All Locations</option>
              {uniqueLocs.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          <button className="bookings-export-btn">
            <Download size={18} />
            Export CSV
          </button>
        </div>

        {/* Table Section */}
        <div className="bookings-table-wrapper">
          <table className="bookings-table">
            <thead>
              <tr>
                <th>BOOKING ID</th>
                <th>GUEST NAME</th>
                <th>PROPERTY</th>
                <th>LOCATION</th>
                <th>CHECK-IN</th>
                <th>CHECK-OUT</th>
                <th>NIGHTS</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.length > 0 ? (
                filteredBookings.map((booking, index) => (
                  <tr key={booking.id} className={index % 2 !== 0 ? 'bookings-row-alt' : ''}>
                    <td className="bookings-id-cell">{booking.id}</td>
                    <td>{booking.guest}</td>
                    <td>{booking.property}</td>
                    <td>{booking.location}</td>
                    <td>{booking.checkIn}</td>
                    <td>{booking.checkOut}</td>
                    <td>{booking.nights}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{textAlign: 'center', padding: '40px', color: 'var(--color-text-muted)' }}>
                    No bookings found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="bookings-footer">
          <p className="bookings-results-count">Showing {filteredBookings.length} of {bookingsData.length} bookings</p>
          <div className="bookings-pagination">
            <button className="bookings-page-btn">Previous</button>
            <button className="bookings-page-btn active">1</button>
            <button className="bookings-page-btn">2</button>
            <button className="bookings-page-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
