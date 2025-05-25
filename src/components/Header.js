import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">
          Health<span className="logo-accent">care.</span>
        </h1>
        <div className="search-container">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
        </div>
      </div>
      
      <div className="header-right">
        <Bell className="notification-icon" />
        <div className="user-profile">
          <div className="user-avatar">
            <span>RG</span>
          </div>
          <span className="user-name">Rimjhim Gupta</span>
        </div>
        <button className="add-button">
          <Plus className="add-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;