import React from 'react';
import StockList from './StockList';
import Portfolio from './Portfolio';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-column">
        <h2>Available Stocks</h2>
        <StockList />
      </div>
      <div className="dashboard-column">
        <h2>Your Portfolio</h2>
        <Portfolio />
      </div>
    </div>
  );
};

export default Dashboard;