import React, { useState } from 'react';
import './BuySellModal.css';

const BuySellModal = ({ stock, action, onConfirm, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const handleConfirm = () => {
    onConfirm(quantity);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>{action.charAt(0).toUpperCase() + action.slice(1)} {stock.name}</h3>
        <p>Current Price: ${stock.price.toFixed(2)}</p>
        <div className="quantity-input">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>
        <p>Total: ${(stock.price * quantity).toFixed(2)}</p>
        <div className="modal-actions">
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default BuySellModal;