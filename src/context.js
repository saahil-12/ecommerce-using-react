import React, { useEffect, useState } from "react";

export const MyContext = React.createContext();

// Define a provider (can be at the top of your component hierarchy)
export default function MyContextProvider({ children }) {
  const [productData, setProductData] = useState([]); 

  useEffect(()=>{
    apiCall();
  },[])
  
  const apiCall = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        data.map((item) => {
          item.isCart = false;
          item.qty = 1;
        });
        setProductData(data);
      });
  };

  const contextValue = {
    productData, // This holds the state value
    setProductData, // This holds the function to update the state
  };


  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}
