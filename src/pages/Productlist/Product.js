import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  selectedProduct,
} from "../../redux/actions/productsActions";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import Main from "../../components/Main";
import Sidenav from "../../components/Sidenav/Sidenav";
import "./product.css";
import { Link } from "react-router-dom";
import { DELETE_DATA_API } from "../../apiServices/services";
import { toast } from "react-toastify";

export const Product = () => {
  const products = useSelector((state) => state?.productsReducer?.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:5000/api/v1/products/product")
      .catch((err) => {
        console.log("Err: ", err);
      });
    // console.log(">>>>>>>>>>>", response.data.message);
    dispatch(setProducts(response.data.data));
  };
  // console.log(">>>>>>>>>>", products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteopration = async (id) => {
    await axios.delete(DELETE_DATA_API + id).catch((err) => {
      console.log("Err: ", err);
    });
    fetchProducts();
    toast.error("Product deleted Successfuly");
  };

  return (
    <div>
      <Main />
      <Sidenav />

      <div className="product">
        <h4>Product List</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Product Type</th>
              <th>description</th>
              <th>Owner</th>
              <th>Price</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={item.imgUrl} className="imgtab" alt="test" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.category.type}</td>
                    <td>{item.productType.name}</td>
                    <td>{item.description}</td>
                    <td>{item.owner.name}</td>
                    <td>₹{item.price}/.00</td>
                    <Link to="/detail">
                      <Button
                        className="details2"
                        variant="primary"
                        onClick={() => dispatch(selectedProduct(item.id))}
                      >
                        Details
                      </Button>
                    </Link>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => deleteopration(item.id)}
                      >
                        Delete
                      </Button>
                    </td>
                    <Link to={`/update/${item.id}`}>
                      <Button className="details2" variant="primary">
                        update
                      </Button>
                    </Link>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
