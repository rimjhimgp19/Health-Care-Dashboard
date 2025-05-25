import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import '../styles/Dashboard.css';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-header">
        <div className="dashboard-title-section">
          <h1 className="dashboard-title">Dashboard</h1>
          <span className="dashboard-subtitle">This Week</span>
        </div>
      </div>
      
      <div className="dashboard-grid">
        {/* Anatomy Section */}
        <div className="grid-anatomy">
          <AnatomySection />
        </div>
        
        {/* Health Status Cards */}
        <div className="grid-health-status">
          <HealthStatusCards />
        </div>
        
        {/* Calendar */}
        <div className="grid-calendar">
          <CalendarView />
        </div>
        
        {/* Upcoming Schedule */}
        <div className="grid-schedule">
          <UpcomingSchedule />
        </div>
        
        {/* Activity Feed */}
        <div className="grid-activity">
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;