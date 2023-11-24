import "./App.css";
import MyContextProvider from "./context";
import Ecommerce from "./ecommerce";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Cart from "./components/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Ecommerce />,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
]);

function App() {
  return (
    <MyContextProvider>
      <RouterProvider router={router} />
    </MyContextProvider>
  );
}

export default App;
