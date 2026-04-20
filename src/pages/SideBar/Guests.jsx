import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './Guests.css';

const guestsData = [
  { id: 1, name: 'Ahmed Hassan', initials: 'AH', email: 'ahmed.hassan@email.com', stays: 12, spent: 'EGP 125,000', last: '2026-04-20' },
  { id: 2, name: 'Sara Mansour', initials: 'SM', email: 'sara.mansour@email.com', stays: 8, spent: 'EGP 82,000', last: '2026-04-15' },
  { id: 3, name: 'Mohamed Ali', initials: 'MA', email: 'mohamed.ali@email.com', stays: 15, spent: 'EGP 156,000', last: '2026-04-18' },
  { id: 4, name: 'Nour Khalil', initials: 'NK', email: 'nour.khalil@email.com', stays: 5, spent: 'EGP 45,000', last: '2026-03-28' },
  { id: 5, name: 'Layla Ibrahim', initials: 'LI', email: 'layla.ibrahim@email.com', stays: 10, spent: 'EGP 98,000', last: '2026-04-10' },
  { id: 6, name: 'Omar Farid', initials: 'OF', email: 'omar.farid@email.com', stays: 6, spent: 'EGP 62,000', last: '2026-04-05' },
  { id: 7, name: 'Yasmin Adel', initials: 'YA', email: 'yasmin.adel@email.com', stays: 9, spent: 'EGP 88,000', last: '2026-04-12' },
];

const Guests = () => {
  const [search, setSearch] = useState('');

  const filteredGuests = guestsData.filter(guest => 
    guest.name.toLowerCase().includes(search.toLowerCase()) || 
    guest.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="guests-page">
      <div className="guests-card">
        {/* Search & Filter Toolbar */}
        <div className="guests-toolbar">
          <div className="guests-search-box">
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Search guests by name or email..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="guests-toolbar-spacer"></div>
          <select className="guests-filter-select">
            <option value="">All Guests</option>
          </select>
        </div>

        {/* Guests Table */}
        <div className="guests-table-container">
          <table className="guests-table">
            <thead>
              <tr>
                <th>GUEST</th>
                <th>EMAIL</th>
                <th>TOTAL STAYS</th>
                <th>TOTAL SPENT</th>
                <th>LAST BOOKING</th>
              </tr>
            </thead>
            <tbody>
              {filteredGuests.length > 0 ? (
                filteredGuests.map((guest, index) => (
                  <tr key={guest.id} className={index % 2 !== 0 ? 'guests-row-highlight' : ''}>
                    <td className="guests-info-cell">
                      <div className="guests-avatar-circle">{guest.initials}</div>
                      <span className="guests-name-text">{guest.name}</span>
                    </td>
                    <td className="guests-email-cell">{guest.email}</td>
                    <td className="guests-data-cell"><strong>{guest.stays}</strong></td>
                    <td className="guests-data-cell">
                      <div className="guests-spent-label">EGP</div>
                      <div className="guests-spent-val">{guest.spent.replace('EGP ', '')}</div>
                    </td>
                    <td className="guests-date-cell">{guest.last}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center', padding: '40px', color: 'var(--color-text-muted)' }}>
                    No guests found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="guests-footer">
          <p className="guests-footer-stats">Showing {filteredGuests.length} of {guestsData.length} guests</p>
          <div className="guests-pagination">
            <button className="guests-page-btn">Previous</button>
            <button className="guests-page-btn active">1</button>
            <button className="guests-page-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guests;
