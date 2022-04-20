import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Main from "../../components/Main";
import Sidenav from "../../components/Sidenav/Sidenav";
import "./detail.css";

export const Details = () => {
  const allProducts = useSelector((state) => state.productsReducer.products);

  const productId = useSelector((state) => state.productId);

  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    setProductDetails(allProducts.find((item) => item.id === productId));
  }, []);

  return (
    <Fragment>
      <Main />
      <Sidenav />
      <div className="detail">
        <div>
          <img className="imgstyle" src={productDetails.imgUrl} />
        </div>
        <div className="title1">
          <h5>{productDetails.title}</h5>
          <hr />
          <p>Product Quantity :- {productDetails.stockQuantity}</p>
          <h5> ₹ {productDetails.price}.00 /-</h5>
          <p>{productDetails.description}</p>
          <p>{productDetails.description}</p>
          <Link to="/product">
            <Button variant="secondary">Back To Products</Button>
          </Link>
          <br /> <br />
        </div>
      </div>
    </Fragment>
  );
};
