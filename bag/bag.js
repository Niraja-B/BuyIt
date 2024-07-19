

import React, { useEffect } from "react";
import Record from "./womenproduct.json";
import { useParams } from "react-router-dom";
import axios from "axios";
import Record1 from "./menproduct.json";
import Record2 from "./kidsproduct.json";
import Record3 from "./beautyproduct.json";
import Record4 from "./footwearproduct.json";
import Record5 from "./homedecorproduct.json";
import "../shopping/women.css"

export function Product1() {
  const { id } = useParams();

  useEffect(() => {
    const selectedRecord = Record[id - 1];

    const addRecord = async () => {
      try {
        const response = await axios.post('http://localhost:3000/addRecord', selectedRecord);
        console.log(response.data.message);
      } catch (error) {
        console.error('Error adding record:', error);
      }
    };

    addRecord();
  }, [id]);

  return (
    <>
     

<div className="men-container">
    
      <div className="product-grid">
      <div key={Record[id - 1]?.id} className="product-box">
            <img src={Record[id - 1]?.image} alt={Record[id - 1]?.name} />
            <div className="product-details">
              <h3>{Record[id - 1]?.name}</h3>
              <p>{Record[id - 1]?.details}</p>
              <div className="price-box">
                <span className="original-price">{Record[id - 1]?.originalPrice}</span>
                <span className="discount-price">{Record[id - 1]?.discountPrice}</span>
              </div></div></div>
         </div></div>
    </>
  );
}


export function Product2() {
  const { id } = useParams();

  useEffect(() => {
    const selectedRecord = Record1[id - 1];

    const addRecord = async () => {
      try {
        const response = await axios.post('http://localhost:3000/addRecord', selectedRecord);
        console.log(response.data.message);
      } catch (error) {
        console.error('Error adding record:', error);
      }
    };

    addRecord();
  }, [id]);

  return (
    <>
     
<div className="men-container">
    
      <div className="product-grid">
      <div key={Record1[id - 1]?.id} className="product-box">
            <img src={Record1[id - 1]?.image} alt={Record1[id - 1]?.name} />
            <div className="product-details">
              <h3>{Record1[id - 1]?.name}</h3>
              <p>{Record1[id - 1]?.details}</p>
              <div className="price-box">
                <span className="original-price">{Record1[id - 1]?.originalPrice}</span>
                <span className="discount-price">{Record1[id - 1]?.discountPrice}</span>
              </div></div></div>
         </div></div>
    </>
  );
}


export function Product3() {
  const { id } = useParams();

  useEffect(() => {
    const selectedRecord = Record2[id - 1];

    const addRecord = async () => {
      try {
        const response = await axios.post('http://localhost:3000/addRecord', selectedRecord);
        console.log(response.data.message);
      } catch (error) {
        console.error('Error adding record:', error);
      }
    };

    addRecord();
  }, [id]);

  return (
    <>
     
<div className="men-container">
    
      <div className="product-grid">
      <div key={Record2[id - 1]?.id} className="product-box">
            <img src={Record2[id - 1]?.image} alt={Record2[id - 1]?.name} />
            <div className="product-details">
              <h3>{Record2[id - 1]?.name}</h3>
              <p>{Record2[id - 1]?.details}</p>
              <div className="price-box">
                <span className="original-price">{Record2[id - 1]?.originalPrice}</span>
                <span className="discount-price">{Record2[id - 1]?.discountPrice}</span>
              </div></div></div>
         </div></div>
    </>
  );
}


export function Product4() {
  const { id } = useParams();

  useEffect(() => {
    const selectedRecord = Record4[id - 1];

    const addRecord = async () => {
      try {
        const response = await axios.post('http://localhost:3000/addRecord', selectedRecord);
        console.log(response.data.message);
      } catch (error) {
        console.error('Error adding record:', error);
      }
    };

    addRecord();
  }, [id]);

  return (
    <>
     
<div className="men-container">
    
      <div className="product-grid">
      <div key={Record3[id - 1]?.id} className="product-box">
            <img src={Record3[id - 1]?.image} alt={Record3[id - 1]?.name} />
            <div className="product-details">
              <h3>{Record3[id - 1]?.name}</h3>
              <p>{Record3[id - 1]?.details}</p>
              <div className="price-box">
                <span className="original-price">{Record3[id - 1]?.originalPrice}</span>
                <span className="discount-price">{Record3[id - 1]?.discountPrice}</span>
              </div></div></div>
         </div></div>
    </>
  );
}




export function Product5() {
  const { id } = useParams();

  useEffect(() => {
    const selectedRecord = Record4[id - 1];

    const addRecord = async () => {
      try {
        const response = await axios.post('http://localhost:3000/addRecord', selectedRecord);
        console.log(response.data.message);
      } catch (error) {
        console.error('Error adding record:', error);
      }
    };

    addRecord();
  }, [id]);

  return (
    <>
     
<div className="men-container">
    
      <div className="product-grid">
      <div key={Record4[id - 1]?.id} className="product-box">
            <img src={Record4[id - 1]?.image} alt={Record4[id - 1]?.name} />
            <div className="product-details">
              <h3>{Record4[id - 1]?.name}</h3>
              <p>{Record4[id - 1]?.details}</p>
              <div className="price-box">
                <span className="original-price">{Record4[id - 1]?.originalPrice}</span>
                <span className="discount-price">{Record4[id - 1]?.discountPrice}</span>
              </div></div></div>
         </div></div>
    </>
  );
}





export function Product6() {
  const { id } = useParams();

  useEffect(() => {
    const selectedRecord = Record5[id - 1];

    const addRecord = async () => {
      try {
        const response = await axios.post('http://localhost:3000/addRecord', selectedRecord);
        console.log(response.data.message);
      } catch (error) {
        console.error('Error adding record:', error);
      }
    };

    addRecord();
  }, [id]);

  return (
    <>
     
<div className="men-container">
    
      <div className="product-grid">
      <div key={Record5[id - 1]?.id} className="product-box">
            <img src={Record5[id - 1]?.image} alt={Record5[id - 1]?.name} />
            <div className="product-details">
              <h3>{Record5[id - 1]?.name}</h3>
              <p>{Record5[id - 1]?.details}</p>
              <div className="price-box">
                <span className="original-price">{Record5[id - 1]?.originalPrice}</span>
                <span className="discount-price">{Record5[id - 1]?.discountPrice}</span>
              </div></div></div>
         </div></div>
    </>
  );
}





