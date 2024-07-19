import React from "react";
import "./order.css"; // Importing CSS for styling

export function Order() {
  return (
    <div className="order-container">
      <img src="https://thumbs.dreamstime.com/b/tick-symbol-sign-animation-check-mark-three-colors-footage-hd-video-154923914.jpg" alt="Product" className="product-image" />
      <p className="order-confirmation">Order Confirmed</p>
    </div>
  );
}
