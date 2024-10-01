import React from 'react';
import './ProductCard.css';

function ProductCard({ title, priceRange, image, onBuy }) {
  return (
    <div className="product-card">
      <img src={process.env.PUBLIC_URL + `/img/${image}`} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>{priceRange}</p>
      <button onClick={onBuy}>Mua ngay</button>
    </div>
  );
}

export default ProductCard;
