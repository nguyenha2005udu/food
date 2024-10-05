import React from 'react';
import './ProductCard.css';

function ProductCard({ title, priceRange, image, onBuy, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={process.env.PUBLIC_URL + `/img/${image}`} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>{priceRange}</p>
      <div className="button-group">
        <button onClick={onAddToCart} className="cart-button">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png" alt="Cart Icon" className="cart-icon" />
        </button>
        <button onClick={onBuy} className="buy-button">
          Mua ngay
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
