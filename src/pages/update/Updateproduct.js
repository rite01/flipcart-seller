import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Main from "../../components/Main";
import Sidenav from "../../components/Sidenav/Sidenav";
import "./update.css";
import { useNavigate, useParams } from "react-router";
import { DELETE_DATA_API, GET_DATA_API } from "../../apiServices/services";

export function Updateproduct() {
  let navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const [input, setinput] = useState({
    title: "",
    description: "",
    photo: "",
    price: "",
    stockQuantity: "",
    rating: "",
    category: "",
    owner: "",
    productBrand: "",
    productType: "",
  });

  const inputHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setinput({ ...input, [name]: value });
  };

  const getdata = async (e) => {
    try {
      const url = "http://localhost:5000/api/v1/products/product/" + id;
      const res = await axios.get(url);
      console.log(res.data.data);
      setinput(res.data.data);
    } catch {
      console.warn("error");
    }
  };

  useEffect(() => {
    getdata();
  }, []);


  const onformsubmit = async(e) => {
    e.preventDefault();
    try{
        await axios.put("http://localhost:5000/api/v1/products/product/" + id, input);
        navigate("/product")
    }catch(error){
        console.log("Wrong")
    }
  }

  return (
    <div>
      <Main />
      <Sidenav />
      <h1 className="addproductform">Update Page</h1>
      <form className="test123" onSubmit={getdata}>
        <Container>
          <Row>
            <Col>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Product Name"
                value={input.title}
                onChange={inputHandler}
              />
            </Col>
            <Col>
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Product Description"
                value={input.description}
                onChange={inputHandler}
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="photo"
                placeholder="Image"
                value={input.photo}
                onChange={inputHandler}
                multiple
              />
            </Col>
            <Col>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="Number"
                name="price"
                placeholder="Price"
                value={input.price}
                onChange={inputHandler}
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <Form.Label>Product category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                placeholder="Product category"
                value={input.category.type}
                onChange={inputHandler}
              />
            </Col>
            <Col>
              <Form.Label>Product type</Form.Label>
              <Form.Control
                type="text"
                name="productType"
                placeholder="Product type"
                value={input.productType.name}
                onChange={inputHandler}
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <Form.Label>owner</Form.Label>
              <Form.Control
                type="text"
                name="owner"
                placeholder="owner id"
                value={input.owner.name}
                onChange={inputHandler}
              />
            </Col>
            <Col>
              <Form.Label>Product Brands</Form.Label>
              <Form.Control
                type="text"
                name="productBrand"
                placeholder="Product Brands"
                value={input.productBrand.name}
                onChange={inputHandler}
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <Form.Label>Product rating</Form.Label>
              <Form.Control
                type="number"
                name="rating"
                placeholder="Product rating"
                value={input.averageRating}
                onChange={inputHandler}
              />
            </Col>
            <Col>
              <Form.Label>Stock Quantity</Form.Label>
              <Form.Control
                type="number"
                name="stockQuantity"
                placeholder="Stock Quantity"
                value={input.stockQuantity}
                onChange={inputHandler}
              />
            </Col>
          </Row>
        </Container>
        <Button variant="primary" type="submit" className="btn2" onClick={(e) => onformsubmit(e)}>
          Update
        </Button>
      </form>
    </div>
  );
}
