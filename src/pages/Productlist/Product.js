import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import axios from "axios";
import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import Main from "../../components/Main";
import Sidenav from "../../components/Sidenav/Sidenav";
import "./product.css";

export const Product = () => {


  const products = useSelector((state) => state.productsReducer.products);
  const p = useSelector((state) => console.log(state));


  const dispatch = useDispatch();
  
  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:5000/api/v1/products/product")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data.data));
  };



  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log("Products :", products);
  return (
    <div>
    <Main/>
    <Sidenav/>
    <h1 className="tag">Product</h1>
    <div className="product">
      {products.map((item,index) => (
        <Card key={index} style={{ width: "18rem" }}>
          <img className="img" variant="top" src={item.imgUrl} />
          <Card.Body>
            <p className="title">{item.title}</p>
            <hr />
            <Card.Text>₹ {item.price}.00</Card.Text>
            <hr />
            <Card.Text>{item.productBrand.name}</Card.Text>
            <hr />
            <Card.Text>Stock - ({item.stockQuantity})</Card.Text>
            <hr />
            <Card.Text>{item.description}</Card.Text>
            <div className="btn2">
              <Button variant="primary">Delete</Button>
              <Button variant="primary" className="btn">
                Update
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
    </div>
  );
};



