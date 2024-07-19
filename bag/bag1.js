import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./bag.css";

export function Bag() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getRecords');
        const initialQuantities = response.data.reduce((acc, item) => {
          acc[item.id] = 1; // default quantity is 1
          return acc;
        }, {});
        setData(response.data);
        setQuantities(initialQuantities);
        calculateTotalPrice(response.data, initialQuantities);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleIncrement = (id) => {
    const newQuantities = { ...quantities, [id]: quantities[id] + 1 };
    setQuantities(newQuantities);
    calculateTotalPrice(data, newQuantities);
  };

  const handleDecrement = (id) => {
    if (quantities[id] > 1) {
      const newQuantities = { ...quantities, [id]: quantities[id] - 1 };
      setQuantities(newQuantities);
      calculateTotalPrice(data, newQuantities);
    }
  };

  const handleRemove = (id) => {
    const newData = data.filter(item => item.id !== id);
    const newQuantities = { ...quantities };
    delete newQuantities[id];
    setData(newData);
    setQuantities(newQuantities);
    calculateTotalPrice(newData, newQuantities);
  };

  const calculateTotalPrice = (data, quantities) => {
    const total = data.reduce((sum, item) => {
      return sum + item.discountPrice * quantities[item.id];
    }, 0);
    setTotalPrice(total);
  };

  const handleBuyNow = () => {
    navigate("/buynow"); // Navigate to /buynow route
  };

  return (
    <div>
      {error && <p>Error fetching data: {error.message}</p>}
      {data.length ? (
        <>
          {data.map((val) => (
            <div key={val.id} className="product-box1">
              <img src={val.image} alt={val.name} />
              <div className="product-details1">
                <h3>{val.name}</h3>
                <p>{val.details}</p>
                <div className="price-box1">
                  <span className="original-price1">{val.originalPrice}</span>
                  <span className="discount-price1">{val.discountPrice}</span>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(val.id)}>-</button>
                  <span>{quantities[val.id]}</span>
                  <button onClick={() => handleIncrement(val.id)}>+</button>
                </div>
                <p>Total: ₹{parseFloat(val.discountPrice * quantities[val.id]).toFixed(2)}</p>
                <button onClick={() => handleRemove(val.id)} className="remove">Remove</button>
              </div>
            </div>
          ))}
          <div className="total-price1">
            <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>
          </div>
          <button onClick={handleBuyNow} className="buy-now">Buy Now</button>
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}