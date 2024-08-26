import React, { useContext } from 'react';
import { StockContext } from '../context/StockContext';
import StockItem from './StockItem';
import './StockList.css';

const StockList = () => {
  const { stocks } = useContext(StockContext);

  return (
    <div className="stock-list">
      {stocks.map((stock) => (
        <StockItem key={stock.symbol} stock={stock} />
      ))}
    </div>
  );
};

export default StockList;