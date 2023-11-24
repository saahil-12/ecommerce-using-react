// import { useState } from "react"; 
export default function ProductDetails(){
   

    return(
        <div>
            <div>
                <img>product image</img>
                <h2>name of product</h2>
                <p>product description</p>
                <button>size</button>
            </div>
            <div>
                <button onClick={addCartHandler}>Add to Cart</button>
                <button>Buy Now</button>
            </div>
        </div>
        
    );
}