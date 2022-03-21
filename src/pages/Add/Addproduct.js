import React, { useState } from "react";
import "./add.css";
import Main from "../../components/Main";
import { Button,Form } from "react-bootstrap";
import Sidenav from "../../components/Sidenav/Sidenav";

export const Addproduct = () => {
  // const initialstate = useState({
  //     name:"",
  //     file:"",
  //     price:"",
  //     description:"",
  // })
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // const [data, setData] = useState(initialstate)

  async function addproduct() {
    console.warn(name, file, price, description);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
  }

  return (
    <div>
      <Main />
      <Sidenav/>
      <div className="addproduct">
      <h4 className="text">Add Product</h4>
        <div className="col-sm-6 offset-sm-3">
          <input
            type="text"
            placeholder="Product Name"
            className="form-Control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br /> <br />
          <input
            type="file"
            className="form-Control"
            value={file}
            onChange={(e) => setFile(e.target.value)}
          />
          <br /> <br />
          <input
            type="number"
            placeholder="Price"
            className="form-Control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br /> <br />


          <Form.Select aria-label="Default select example" className="form-Control">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <br /><br />

          <Form.Select aria-label="Default select example" className="form-Control">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <br /><br />


          


          <input
            type="text"
            placeholder="Product Description"
            className="form-Control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br /> <br />
          <Button variant="primary" onClick={addproduct}>
            Add Product
          </Button>
        </div>
      </div>
    </div>
  );
};

