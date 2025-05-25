import React from 'react';
import { navigationItems } from '../data/navigationData';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-section">
          <h3 className="sidebar-heading">General</h3>
          <nav className="navigation">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className={`nav-item ${item.active ? 'nav-item-active' : ''}`}
              >
                <item.icon className="nav-icon" />
                <span className="nav-label">{item.label}</span>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;