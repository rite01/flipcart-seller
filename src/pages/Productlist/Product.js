import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import Main from "../../components/Main";
import Sidenav from "../../components/Sidenav/Sidenav";
import "./product.css";
// import { getApi } from "../../servive/index";

export function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  
  const getData = async () => {
    const response = await axios
      .get("http://localhost:5000/api/v1/products/product")
      .catch((err) => {
        console.log("Err: ", err);
      });
    setData(response.data.data);
  };
  console.log(data);


  return (
    <div>
      <Main />
      <Sidenav />
      <h1 className="tag">Product</h1>
      <div className="product">
        {data.map((item) => (
          <Card style={{ width: "18rem" }}>
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
}
