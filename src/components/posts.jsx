import "./posts.css"
// import { useState,useEffect } from "react";

export default function Posts({data,counter,index}) {

  const handleAddToCart = () => {
    counter(index);
  }

  return (
    <div>
      <div className="card">
        <div className="photo">            
          <img src={data?.image} alt="bottle" class="card-image"></img>
        </div>
        <div className="card-content">
          <h2 title={data?.title} className="card-title">{data?.title.length > 50 ? data?.title.substring(0,50) + '...' : data?.title}</h2>
          <p>{data?.price}</p>
                {/* <p className="card-description">{data.description}</p> */}
          <div>
            <button className="card-button" onClick={handleAddToCart}>{data?.isCart ? 'Added to Cart' : 'Add to Cart'}</button>
            <button className="Buynow-button" >Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
