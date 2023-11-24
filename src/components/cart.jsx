import { useNavigate } from "react-router-dom";
import { MyContext } from "../context";
import "./cart.css";
import React, { useContext, useEffect, useState } from "react";

export default function Cart() {
  const { productData, setProductData } = useContext(MyContext);
  const [cartDetailsArr, setCartDetailsArr] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    if (productData.length) {
      initialCall();
    }
  }, []);

  function initialCall() {
    let temp = [];
    let count = 0;
    let totalAmount =0;
    productData.map((item, index) => {
      if (item.isCart) {
        item.index = index;
        temp.push(item);
        count += item.qty;
        totalAmount += item.qty * item.price
      }
    });
    setTotalAmount(totalAmount);
    setTotalCount(count);
    setCartDetailsArr([...temp]);
  }

  function onIncrement(index) {
    let temp = [...productData];
    temp.map((data, idx) => {
      if (index == idx) {
        data.qty += 1;
      }
      setProductData([...temp]);
    });
    initialCall();
  }

  function onDecrement(index) {
    let temp = [...productData];
    temp.map((data, idx) => {
      if (index == idx && data.qty >= 2) {
        data.qty -= 1;
      }
      setProductData([...temp]);
    });
    initialCall();
  }

  return (
    <div className="cart-main">
      <button onClick={() => navigate("/")}>Back</button>
      <div className="item-list">
        {cartDetailsArr.map((item) => {
          return (
            <div className="cart">
              <div className="top-sec">
                <div className="imgitem">
                  <img src={item.image} alt={item.title} class="image" />
                </div>
                <div className="price-sec">
                  <div className="btn-sec">
                    <button onClick={() => onIncrement(item.index)}>+</button>
                    <span>{item.qty}</span>
                    <button onClick={() => onDecrement(item.index)}>-</button>
                  </div>
                  <p>{item.qty} * {item.price}</p>
                </div>
              </div>
              <div className="product details">
                <h3>{item.title}</h3>
              </div>
              <hr className="horizontalLine"></hr>
            </div>
          );
        })}
      </div>
      <div className="OrderSummary">
        <div className="order-summary-header">        
            <h1>order summary</h1>
            <hr />
            <p></p>
        </div>
        <div  className="product-summary">
            <h4>products({totalCount})</h4>
            <hr />
        </div>
        <div className="total-amount">
            total amount = {totalAmount}
        </div>
        <p></p>
      </div>
    </div>
  );
}
