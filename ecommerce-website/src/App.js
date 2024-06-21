import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './screens/home'; // Adjust path as per your file structure
import Header from './components/header';
import ProductDetailPage from './screens/detail';
import CartScreen from './screens/cart';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/products" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductDetailPage/>} />
        <Route path="/cart" element={<CartScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
