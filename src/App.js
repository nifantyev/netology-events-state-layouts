import React, { useEffect, useState } from 'react';
import Store from './components/Store';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetch('/products.json');
      const resultJson = await result.json();
      setProducts(resultJson);
    };
    fetchProducts();
  }, []);
  return <Store products={products} />;
}

export default App;
