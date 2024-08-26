import React, { useState, useContext, memo } from 'react';
import { StockContext } from '../context/StockContext';
import BuySellModal from './BuySellModal';
import './StockItem.css';

const StockItem = memo(({ stock }) => {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState('');
  const { buyStock, sellStock } = useContext(StockContext);

  const handleAction = (actionType) => {
    setAction(actionType);
    setShowModal(true);
  };

  const handleConfirm = (quantity) => {
    if (action === 'buy') {
      buyStock(stock, quantity);
    } else {
      sellStock(stock, quantity);
    }
    setShowModal(false);
  };

  return (
    <div className="stock-item">
      <h3>{stock.name} ({stock.symbol})</h3>
      <p className="stock-price">Price: ${stock.price.toFixed(2)}</p>
      <div className="stock-actions">
        <button onClick={() => handleAction('buy')} className="btn btn-buy">Buy</button>
        <button onClick={() => handleAction('sell')} className="btn btn-sell">Sell</button>
      </div>
      {showModal && (
        <BuySellModal
          stock={stock}
          action={action}
          onConfirm={handleConfirm}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
});

export default StockItem;