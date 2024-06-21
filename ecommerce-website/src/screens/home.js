import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  console.log(products,"prods");
  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className='product-list > div'>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} className='product-list img'/>
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
