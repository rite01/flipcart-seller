import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Main from "../../components/Main";
import Sidenav from "../../components/Sidenav/Sidenav";
import "./add.css";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Addproduct() {
  let navigate = useNavigate();
  const [input, setinput] = useState({
    title: "",
    description: "",
    avatar: "",
    price: "",
    categoryId: "",
    brandId: "",
  });

  const [items, setitems] = useState([]);

  const inputHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setinput({ ...input, [name]: value });
  };


  const Additem = async (e) => {
    e.preventDefault();

    console.log("----", input.avatar);

    if (!input) {
    } else {
      if (!input.title) {
        return toast.error("Please enter title");
      } else if (!input.description) {
        return toast.error("Please enter description");
      } else if (!input.avatar) {
        return toast.error("Please select photo");
      } else if (!input.price) {
        return toast.error("Pleas enter price");
      } else if (!input.categoryId) {
        return toast.error("Pleas enter category");
      } else if (!input.brandId) {
        return toast.error("Pleas enter product type");
      } 

      setitems([...items, input]);
      try {
      
        const req = {
          title: input.title,
          description: input.description,
          avatar: JSON.stringify(input.avatar),
          price: input.price,
          categoryId: input.categoryId,
          brandId: input.brandId,
        };
        let res = await axios.post(
          "https://purple-mole-82.loca.lt/v1/product",
          req,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("Token")}`,
            },
          }
        );
        toast.success(res.data.message);
        navigate("/product");
      } catch (err) {
        toast.warn(err.message);
        console.warn("error", err);
      }
    }
  };

  return (
    <div>
      <Main />
      <Sidenav />
      <h1 className="addproductform">Add Product</h1>

      <form className="test123" onSubmit={Additem}>
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
                name="avatar"
                placeholder="Image"
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
                name="categoryId"
                placeholder="Product category"
                onChange={inputHandler}
              />
            </Col>
            <Col>
              <Form.Label>Product brand</Form.Label>
              <Form.Control
                type="text"
                name="brandId"
                placeholder="Product type"
                onChange={inputHandler}
              />
            </Col>
          </Row>
        </Container>


        <Button variant="primary" type="submit" className="btn2">
          Add
        </Button>
      </form>
    </div>
  );
}
