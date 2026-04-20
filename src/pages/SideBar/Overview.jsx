import React from 'react';
import { 
  Calendar, Users, DollarSign, MessageSquare, 
  TrendingUp, TrendingDown 
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import './Overview.css';

// --- Data ---
const statCards = [
  { title: 'TOTAL BOOKINGS', value: '342', trend: '+ 12.5%', isUp: true, icon: <Calendar size={20} /> },
  { title: 'ACTIVE STAYS', value: '28', trend: '+ 8.3%', isUp: true, icon: <Users size={20} /> },
  { title: 'MONTHLY REVENUE', value: 'EGP 485K', trend: '+ 15.2%', isUp: true, icon: <DollarSign size={20} /> },
  { title: 'NEW INQUIRIES', value: '67', trend: '- 3.1%', isUp: false, icon: <MessageSquare size={20} /> },
];

const lineData = [
  { month: 'Jan', value: 45 },
  { month: 'Feb', value: 52 },
  { month: 'Mar', value: 62 },
  { month: 'Apr', value: 58 },
  { month: 'Jun', value: 85 },
];

const donutData = [
  { name: 'Sahel', value: 35, color: '#c5a367' },
  { name: 'Cairo', value: 25, color: '#161e2b' },
  { name: 'Gouna', value: 20, color: '#4caf82' },
  { name: 'Red Sea', value: 20, color: '#8b8b8b' },
];

const recentBookings = [
  { id: 'BK001', guest: 'Ahmed Hassan', property: 'Beachfront Villa', date: '2026-04-20' },
  { id: 'BK002', guest: 'Sara Mansour', property: 'Luxury Apartment', date: '2026-04-22' },
  { id: 'BK003', guest: 'Mohamed Ali', property: 'Sahel Chalet', date: '2026-04-23' },
  { id: 'BK004', guest: 'Nour Khalil', property: 'Downtown Studio', date: '2026-04-25' },
];

const topProperties = [
  { name: 'Beachfront Villa', location: 'Sahel', rate: 92 },
  { name: 'Luxury Penthouse', location: 'Cairo', rate: 88 },
  { name: 'Marina View Apartment', location: 'Gouna', rate: 85 },
  { name: 'Red Sea Resort Chalet', location: 'Hurghada', rate: 82 },
];

const Overview = () => {
  return (
    <div className="overview-container">
      {/* Top Stat Cards */}
      <div className="overview-stats-grid">
        {statCards.map((stat, index) => (
          <div key={index} className="overview-stat-card">
            <div className="overview-stat-header">
              <div className="overview-stat-info">
                <span className="overview-stat-label">{stat.title}</span>
                <h2 className="overview-stat-value">{stat.value}</h2>
              </div>
              <div className="overview-stat-icon-wrap">{stat.icon}</div>
            </div>
            <div className={`overview-stat-trend ${stat.isUp ? 'up' : 'down'}`}>
              {stat.isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              <span>{stat.trend}</span>
              <span className="overview-vs-text">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="overview-charts-grid">
        <div className="overview-chart-card">
          <h3 className="overview-card-title">Bookings Over Time</h3>
          <div className="line-chart-wrap">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#999', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#999', fontSize: 12}} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#c5a367" 
                  strokeWidth={3} 
                  dot={{ r: 6, fill: "#161e2b", strokeWidth: 2, stroke: "#c5a367" }} 
                  activeDot={{ r: 8 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="overview-chart-card">
          <h3 className="overview-card-title">Occupancy by Location</h3>
          <div className="overview-donut-chart-wrap">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={donutData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {donutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="overview-donut-legend">
              {donutData.map((item) => (
                <div key={item.name} className="overview-legend-item">
                  <span className="dot" style={{ backgroundColor: item.color }}></span>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content Grid */}
      <div className="overview-content-grid">
        {/* Recent Bookings Table */}
        <div className="overview-table-card">
          <h3 className="overview-card-title">Recent Bookings</h3>
          <div className="overview-table-responsive">
            <table>
              <thead>
                <tr>
                  <th>BOOKING ID</th>
                  <th>GUEST</th>
                  <th>PROPERTY</th>
                  <th>CHECK-IN</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking, idx) => (
                  <tr key={idx} className={idx % 2 !== 0 ? 'overview-alt-row' : ''}>
                    <td className="bold">{booking.id}</td>
                    <td>{booking.guest}</td>
                    <td>{booking.property}</td>
                    <td>{booking.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Properties List */}
        <div className="overview-properties-card">
          <h3 className="overview-card-title">Top Properties</h3>
          <div className="overview-property-list">
            {topProperties.map((prop, idx) => (
              <div key={idx} className="overview-property-item">
                <div className="overview-property-header">
                  <div className="overview-prop-main">
                    <p className="overview-prop-name">{prop.name}</p>
                    <p className="overview-prop-loc">{prop.location}</p>
                  </div>
                  <span className="overview-prop-rate">{prop.rate}%</span>
                </div>
                <div className="overview-progress-bg">
                  <div className="overview-progress-fill" style={{ width: `${prop.rate}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;