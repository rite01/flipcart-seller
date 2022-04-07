import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  selectedProduct,
} from "../../redux/actions/productsActions";

import axios from "axios";

import Main from "../../components/Main";
import Sidenav from "../../components/Sidenav/Sidenav";
import "./product.css";

import { Link } from "react-router-dom";

import { DELETE_DATA_API } from "../../apiServices/services";
import { toast } from "react-toastify";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, CircularProgress, TablePagination } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import WidgetsIcon from "@mui/icons-material/Widgets";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const Product = () => {
  const products = useSelector((state) => state?.productsReducer?.products);
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);


  const [loading, setloading] = useState(true)


  const [search, setSearch] = useState("");
  // console.log(products.filter(products=> products.title.includes('te')))

  const fetchProducts = async () => {
    setTimeout(() => setloading(false), 1000)
    const response = await axios
      .get("https://purple-mole-82.loca.lt/v1/product")
      
      .then((res) => console.log(res.data.data))
      .catch((err) => {
        console.log("Err: ", err);
      });
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Main />
      <Sidenav />

      <div className="product">
        <h4>Product List</h4>

        <div>
          <input
            className="searchbar"
            type="text"
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon className="searchicon" />

          <Link to="/add">
            <Button className="addproduct" variant="contained">
              <AddIcon /> Add Product
            </Button>
          </Link>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>id</StyledTableCell>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell>Category</StyledTableCell>
                <StyledTableCell>Product Type</StyledTableCell>
                <StyledTableCell>description</StyledTableCell>
                <StyledTableCell>Owner</StyledTableCell>
                <StyledTableCell>Price</StyledTableCell>
                <StyledTableCell>Details</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
                <StyledTableCell>Update</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? <p> <CircularProgress className="loading-product" />Loading......</p>: products
                .filter((products) =>
                  products.title.toLowerCase().includes(search)
                )
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell>
                      {" "}
                      <img className="imgtab" src={item.imgUrl} alt="" />{" "}
                    </StyledTableCell>
                    <StyledTableCell>{item.title}</StyledTableCell>
                    <StyledTableCell>{item.category.type}</StyledTableCell>
                    <StyledTableCell>{item.productType.name}</StyledTableCell>
                    <StyledTableCell>{item.description}</StyledTableCell>
                    <StyledTableCell>{item.owner.name}</StyledTableCell>
                    <StyledTableCell>₹{item.price}./00</StyledTableCell>
                    <StyledTableCell>
                      <Link to="/detail">
                        <WidgetsIcon
                          onClick={() => dispatch(selectedProduct(item.id))}
                        />
                      </Link>
                    </StyledTableCell>

                    <StyledTableCell>
                      <DeleteIcon
                        color="error"
                        onClick={() => deleteopration(item.id)}
                      />
                    </StyledTableCell>

                    <StyledTableCell>
                      <Link to={`/update/${item.id}`}>
                        <EditIcon />
                      </Link>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          component="div"
          count={products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};
