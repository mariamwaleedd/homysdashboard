import React, { useState } from 'react';
import { Search, Plus, MapPin, Eye, Edit2 } from 'lucide-react';
import './Properties.css';

const propertiesData = [
  {
    id: 1,
    title: 'Beachfront Villa',
    location: 'Sahel',
    type: 'Villa',
    price: 'EGP 2,500',
    occupancy: 92,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    status: 'Active'
  },
  {
    id: 2,
    title: 'Luxury Penthouse',
    location: 'Cairo',
    type: 'Apartment',
    price: 'EGP 3,200',
    occupancy: 88,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    status: 'Active'
  },
  {
    id: 3,
    title: 'Marina View Apartment',
    location: 'Gouna',
    type: 'Apartment',
    price: 'EGP 2,100',
    occupancy: 85,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    status: 'Active'
  },
  {
    id: 4,
    title: 'Red Sea Resort Chalet',
    location: 'Red Sea',
    type: 'Chalet',
    price: 'EGP 2,800',
    occupancy: 82,
    image: 'https://images.unsplash.com/photo-1600607687940-c52af096999c?auto=format&fit=crop&w=600&q=80',
    status: 'Active'
  },
  {
    id: 5,
    title: 'Downtown Studio',
    location: 'Cairo',
    type: 'Apartment',
    price: 'EGP 1,800',
    occupancy: 75,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&w=600&q=80',
    status: 'Active'
  },
  {
    id: 6,
    title: 'Sahel Chalet Deluxe',
    location: 'Sahel',
    type: 'Chalet',
    price: 'EGP 3,500',
    occupancy: 95,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
    status: 'Active'
  }
];

const Properties = () => {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [locFilter, setLocFilter] = useState('');

  // Extract unique types/locations for dropdowns
  const uniqueTypes = [...new Set(propertiesData.map(p => p.type))];
  const uniqueLocs = [...new Set(propertiesData.map(p => p.location))];

  const filteredProperties = propertiesData.filter(prop => {
    const matchesSearch = prop.title.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === '' || prop.type === typeFilter;
    const matchesLoc = locFilter === '' || prop.location === locFilter;
    return matchesSearch && matchesType && matchesLoc;
  });

  return (
    <div className="properties-container">
      {/* Top Toolbar */}
      <header className="properties-toolbar">
        <div className="properties-filters">
          <div className="properties-search-wrapper">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search properties..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select 
            className="properties-filter-dropdown"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">All Types</option>
            {uniqueTypes.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <select 
            className="properties-filter-dropdown"
            value={locFilter}
            onChange={(e) => setLocFilter(e.target.value)}
          >
            <option value="">All Locations</option>
            {uniqueLocs.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
        <button className="properties-add-btn">
          <Plus size={20} />
          <span>Add Property</span>
        </button>
      </header>

      {/* Grid Layout */}
      <div className="properties-grid">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((prop) => (
            <div key={prop.id} className="properties-card">
              {/* Image Section */}
              <div className="properties-card-img-wrap">
                <img src={prop.image} alt={prop.title} />
                <span className="properties-status-badge">{prop.status}</span>
              </div>

              {/* Content Section */}
              <div className="properties-card-content">
                <h3 className="properties-item-name">{prop.title}</h3>
                
                <div className="properties-item-loc">
                  <MapPin size={14} />
                  <span>{prop.location}</span>
                </div>

                <div className="properties-price-row">
                  <span className="properties-type-badge">{prop.type}</span>
                  <p className="properties-price-text">
                    <strong>{prop.price}</strong>/night
                  </p>
                </div>

                <div className="properties-occ-section">
                  <div className="properties-occ-label">
                    <span>Occupancy</span>
                    <span className="properties-occ-percent">{prop.occupancy}%</span>
                  </div>
                  <div className="properties-progress-bar">
                    <div 
                      className="properties-progress-fill" 
                      style={{ width: `${prop.occupancy}%` }}
                    ></div>
                  </div>
                </div>

                <div className="properties-card-actions">
                  <button className="properties-btn-view">
                    <Eye size={18} />
                    View
                  </button>
                  <button className="properties-btn-edit">
                    <Edit2 size={18} />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px', color: 'var(--color-text-muted)' }}>
            <h3>No properties found</h3>
            <p>Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
