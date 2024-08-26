import React, { useContext } from 'react';
import { StockContext } from '../context/StockContext';
import './Portfolio.css';

const Portfolio = () => {
  const { portfolio, balance } = useContext(StockContext);

  const totalValue = portfolio.reduce(
    (total, stock) => total + stock.price * stock.quantity,
    0
  );

  return (
    <div className="portfolio">
      <h3>Balance: ${balance.toFixed(2)}</h3>
      <h3>Portfolio Value: ${totalValue.toFixed(2)}</h3>
      <div className="portfolio-list">
        {portfolio.map((stock) => (
          <div key={stock.symbol} className="portfolio-item">
            <h4>{stock.name} ({stock.symbol})</h4>
            <p>Quantity: {stock.quantity}</p>
            <p>Value: ${(stock.price * stock.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;