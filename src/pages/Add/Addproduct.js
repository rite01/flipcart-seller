import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Main from "../../components/Main";
import Sidenav from "../../components/Sidenav/Sidenav";
import "./add.css";
import { useNavigate } from "react-router";
import { GET_DATA_API, TOKEN } from "../../apiServices/services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Addproduct() {
  let navigate = useNavigate();
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


  const [items, setitems] = useState([]);

  const inputHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setinput({ ...input, [name]: value });
  };

  const handleImage = (e) =>{
    console.log("0000000", e)
    const img = e.target.files[0];
    console.log("ssssssssss", img)
    setinput({...input, photo:img})
  }

  const Additem = async (e) => {
    e.preventDefault();
    console.log("----", input.photo)
    if (!input) {
    } else {

      if(!input.title)
      {
        return toast.error("Please enter title")
      }
      else if (!input.description){
        return toast.error("Please enter description")
      }
      else if (!input.photo){
        return toast.error("Please select photo")
      }
      else if (!input.price){
        return toast.error("Pleas enter price")
      }
      else if (!input.category){
        return toast.error("Pleas enter category")
      }
      else if (!input.productType){
        return toast.error("Pleas enter product type")
      }
      else if (!input.productBrand){
        return toast.error("Pleas enter product brand")
      }
      else if (!input.owner){
        return toast.error("Pleas enter owner")
      }
      else if (!input.stockQuantity){
        return toast.error("Pleas enter quantity")
      }
      setitems([...items, input]);
      try {
        const token = TOKEN;
        const req = {
          title: input.title,
          description: input.description,
          photo: URL.createObjectURL(input.photo),
          price: input.price,
          stockQuantity: input.stockQuantity,
          rating: input.rating,
          category: input.category,
          owner: input.owner,
          productBrand: input.productBrand,
          productType: input.productType,
        }
        let res = await axios.post(GET_DATA_API, req, {
          headers: { Authorization: `Bearer ${token}` },
        });

        // console.log("++++++++++", res.data.message);
        console.log("000", res)
        toast.success(res.data.message)
        navigate("/product");
      } catch (err) {
      
        toast.warn(err.message) 
        console.warn("error", err);
      }
    }
  };


  return (
    <div>
      <Main />
      <Sidenav />
      <h1 className="addproductform">Test</h1>

      <form className="test123" onSubmit={Additem} >

        
        <Container>
          <Row>
            <Col>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Product Name"
                onChange={inputHandler}
              />
            </Col>
            <Col>
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Product Description"
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
                onChange={handleImage}
                multiple
              />
            </Col>
            <Col>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="Number"
                name="price"
                placeholder="Price"
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
                onChange={inputHandler}
              />
            </Col>
            <Col>
              <Form.Label>Product type</Form.Label>
              <Form.Control
                type="text"
                name="productType"
                placeholder="Product type"
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
                onChange={inputHandler}
              />
            </Col>
            <Col>
              <Form.Label>Product Brands</Form.Label>
              <Form.Control
                type="text"
                name="productBrand"
                placeholder="Product Brands"
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
                onChange={inputHandler}
              />
            </Col>
            <Col>
              <Form.Label>Stock Quantity</Form.Label>
              <Form.Control
                type="number"
                name="stockQuantity"
                placeholder="Stock Quantity"
                onChange={inputHandler}
              />
            </Col>
          </Row>
        </Container>
        <Button variant="primary" type="submit" className="btn2" >
          Add
        </Button>
      </form>
    </div>
  );
}
