import React from 'react';
import './ProductCard.css';

function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>Rp {price}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
