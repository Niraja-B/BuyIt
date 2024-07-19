import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./buynow.css";

export function BuyNow() {
  const location = useLocation();

  // Destructure data, quantities, and totalPrice from location.state with default values
  const { data = [], quantities = {}, totalPrice = 0 } = location.state || {};

  return (
    <div className="buy-now-container">
      <h2>Buy Now</h2>
      {data.map((item) => (
        <div key={item.id} className="order-item2">
          <img src={item.image} alt={item.name} />
          <div className="order-details2">
            <h3>{item.name}</h3>
            <p>{item.details}</p>
            <p>Price: ${item.discountPrice}</p>
            <p>Quantity: {quantities[item.id]}</p>
            <p>Subtotal: ${(item.discountPrice * quantities[item.id]).toFixed(2)}</p>
          </div>
        </div>
      ))}
      <div className="total-price2">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
      <form>
        <label htmlFor="payment-method">Payment Method:</label>
        <select id="payment-method">
          <option value="cod">Cash on Delivery</option>
          <option value="netbanking">Netbanking</option>
          <option value="gpay">GPay</option>
          <option value="phonepe">PhonePe</option>
        </select>
        <label htmlFor="address">Address:</label>
        <input className="buy" type="text" id="address" name="address" required />
        <Link to="/order">
          <button type="button">Place Order</button>
        </Link>
      </form>
    </div>
  );
}

export default BuyNow;
