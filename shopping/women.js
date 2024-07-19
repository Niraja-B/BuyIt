import React from 'react';
import './women.css'
import {Link} from "react-router-dom"
import products from "../bag/womenproduct.json"


export const Women = () => {
  return (
    <div className="men-container">
      <h2>Women's Clothing</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-box">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.details}</p>
              <div className="price-box">
                <span className="original-price">{product.originalPrice}</span>
                <span className="discount-price">{product.discountPrice}</span>
              </div>
              <Link to={`/product/${product.id}`}><button className="add-to-cart" >Add to Cart</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;

