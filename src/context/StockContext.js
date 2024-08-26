import React, { createContext, useState, useEffect, useCallback } from 'react';
import { getStocks, updateStockPrice } from '../api/stockApi';

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [balance, setBalance] = useState(10000);

  useEffect(() => {
    const fetchStocks = async () => {
      const stockData = await getStocks();
      setStocks(stockData);
    };

    fetchStocks();
    const interval = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => ({
          ...stock,
          price: updateStockPrice(stock.price),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const buyStock = useCallback((stock, quantity) => {
    const cost = stock.price * quantity;
    if (balance >= cost) {
      setBalance((prevBalance) => prevBalance - cost);
      setPortfolio((prevPortfolio) => {
        const existingStock = prevPortfolio.find((item) => item.symbol === stock.symbol);
        if (existingStock) {
          return prevPortfolio.map((item) =>
            item.symbol === stock.symbol
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          return [...prevPortfolio, { ...stock, quantity }];
        }
      });
    } else {
      alert('Insufficient balance');
    }
  }, [balance]);

  const sellStock = useCallback((stock, quantity) => {
    const existingStock = portfolio.find((item) => item.symbol === stock.symbol);
    if (existingStock && existingStock.quantity >= quantity) {
      const saleValue = stock.price * quantity;
      setBalance((prevBalance) => prevBalance + saleValue);
      setPortfolio((prevPortfolio) =>
        prevPortfolio
          .map((item) =>
            item.symbol === stock.symbol
              ? { ...item, quantity: item.quantity - quantity }
              : item
          )
          .filter((item) => item.quantity > 0)
      );
    } else {
      alert('Insufficient stocks to sell');
    }
  }, [portfolio]);

  return (
    <StockContext.Provider value={{ stocks, portfolio, balance, buyStock, sellStock }}>
      {children}
    </StockContext.Provider>
  );
};