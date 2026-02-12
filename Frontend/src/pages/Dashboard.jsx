import React from 'react'
import './Dashboard.css'
import Header from '@/components/Header/Header'
function Dashboard() {
  return (
    <div>
        <Header/>
    <div className="dashboard">

      {/* Header Section */}
      <div className="dashboard-header">
        <h1>Welcome Back 👋</h1>
        <p>Here’s an overview of your civic activity.</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
            <div className='icon'>⚠️</div>
          <h2>12</h2>
          <p>Total Issues</p>
        </div>

        <div className="stat-card">
        <div className="icon">🕒</div>
          <h2>5</h2>
          <p>Pending</p>
        </div>

        <div className="stat-card">
            <div className="icon">⚙️</div>
          <h2>4</h2>
          <p>In Progress</p>
        </div>

        <div className="stat-card">
        <div className="icon">✔️</div>
          <h2>3</h2>
          <p>Resolved</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="dashboard-content">

        {/* Recent Activity */}
        <div className="activity-section">
          <h3>Recent Activity</h3>
          <ul>
            <li>Pothole on Main Street resolved <span>2 hrs ago</span></li>
            <li>New garbage issue reported <span>4 hrs ago</span></li>
            <li>Water leakage complaint updated <span>6 hrs ago</span></li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <button className="primary-btn">+ Report New Issue</button>
          <button className="secondary-btn">≡ View All Complaints</button>
          <button className="secondary-btn">📍 Issue Map</button>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Dashboard