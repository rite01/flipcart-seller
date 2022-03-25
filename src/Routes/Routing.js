import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dash, Product, Addproduct } from "../pages/index";
import Signup from "../pages/Singup";
import Login from "../pages/Login";
import Updateproduct from "../pages/Updateproduct/Updateproduct";




const Routing = () => {
//   const user = localStorage.getItem("token");

  const routing = [
    { path: "/", Component: Login },
    { path: "/signup", Component: Signup },
    { path: "/dash", Component: Dash },
    { path: "/product", Component: Product },
    { path: "/add", Component: Addproduct },
    { path: "/update", Component: Updateproduct },
  
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routing.map((item) => {
          return <Route path={item.path} element={<item.Component />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;