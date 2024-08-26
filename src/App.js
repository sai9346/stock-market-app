import React from 'react';
import { StockProvider } from './context/StockContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <StockProvider>
      <div className="App">
        <Header />
        <Dashboard />
      </div>
    </StockProvider>
  );
}

export default App;