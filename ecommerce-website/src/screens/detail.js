import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CartContext } from "./../context/CartContext";
import "./../ProductDetailPage.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart, isInCart } = useContext(CartContext);

  //calling api to get product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  //function to handle add to cart
  const handleAddToCart = () => {
    addToCart(product);
  };

  //handling empty page cases
  if (loading) return <div className="empty-case">Loading...</div>;
  if (error) return <div className="empty-case">{error}</div>;
  if (!product) return <div className="empty-case">No product found</div>;

  return (
    <div className="product-detail-container">
      <h2 className="product-title">{product.title}</h2>
      <img className="product-image" src={product.image} alt={product.title} />
      <div className="product-details">
        <p className="product-description">{product.description}</p>
        <p className="product-description">{`Rating ${product.rating.rate} ⭐`}</p>
        <div className="button-container">
          <p className="product-price">${product.price}</p>
          <button
            className={`button ${isInCart(product.id) ? "added" : ""}`}
            onClick={handleAddToCart}
            disabled={isInCart(product.id)}
          >
            {isInCart(product.id) ? "Added to cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
