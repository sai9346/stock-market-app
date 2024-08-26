const mockStocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 150 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2500 },
    { symbol: 'MSFT', name: 'Microsoft Corporation', price: 300 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3300 },
    { symbol: 'FB', name: 'Facebook, Inc.', price: 330 },
  ];
  
  export const getStocks = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockStocks);
      }, 500);
    });
  };
  
  export const updateStockPrice = (currentPrice) => {
    const change = (Math.random() - 0.5) * 10;
    return Math.max(0, currentPrice + change);
  };