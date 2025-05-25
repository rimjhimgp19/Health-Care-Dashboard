import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import './styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-wrapper">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;