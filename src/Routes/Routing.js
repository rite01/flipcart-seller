import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dash, Product, Addproduct, Details } from "../pages/index";
import Signup from "../pages/Singup";
import Login from "../pages/Login";
import { Updateproduct } from "../pages/update";
import { Profile } from "../pages/Profile/Profile";
import { PrivateRoute } from "./protected";

const Routing = () => {
  const routing = [
    { path: "/", Component: Login },
    { path: "/signup", Component: Signup },
  ];

  const routingProtected = [
    { path: "/dash", Component: Dash },
    { path: "/product", Component: Product },
    { path: "/add", Component: Addproduct },
    { path: "/detail", Component: Details },
    { path: "/update/:id", Component: Updateproduct },
    { path: "/profile", Component: Profile },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routing.map((item, index) => {
          return (
            <Route key={index} path={item.path} element={<item.Component />} />
          );
        })}

        {routingProtected.map((item) => {
          return (
            <Route
              path={item
                .path}
              element={
                <PrivateRoute isUser={false} Component={item.Component} />
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
