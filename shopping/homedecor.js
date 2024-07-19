import React from 'react';
import './homedecor.css'
import products from "../bag/homedecorproduct.json"
import {Link} from 'react-router-dom';





export const Homedecor = () => {
    return (
      <div className="men-container">
        <h2>Home Decor</h2>
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
                <Link to={`/homedecorproduct/${product.id}`}><button className="add-to-cart" >Add to Cart</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Homedecor;

