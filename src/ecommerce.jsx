import { useEffect, useState,useContext } from "react";
import "./App.css";
import Posts from "./components/posts";
import MyContextProvider, { MyContext } from "./context";
import { navigate, useNavigate } from "react-router-dom";

function Ecommerce() {
  const { productData, setProductData } = useContext(MyContext);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(()=>{
    calculateCount(-1);
  },[])

  function calculateCount(index) {
    let temp = [...productData];
    let count = 0;
    temp.map((item, idx) => {
      if (idx === index) {
        item.isCart = true;
      }
      if (item.isCart) {
        count += 1;
      }
    });
    setProductData([...temp]);
    setCartCount(count);
  }



  return (
    <MyContextProvider>
      <div>
        <div className="main-header">
          <div className="space-header"></div>
          <div className="btn-header">
            <button>Home</button>
            <button onClick={()=>navigate('/cart')}>Cart ({cartCount})</button>
            <button>Login</button>
          </div>
        </div>
        <h1 className="App-header">E-Commerce</h1>
        <div className="card-flex">
          {productData.map((item, index) => {
            return (
              <Posts
                key={index}
                data={item}
                counter={calculateCount}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </MyContextProvider>
  );
}

export default Ecommerce;
