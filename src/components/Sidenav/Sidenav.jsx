import React from 'react'
import { Link } from 'react-router-dom';
import "./sidenav.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import AddIcon from '@mui/icons-material/Add';

const Sidenav = () => {
  return (
    <div className="sidenav">
        <nav>
            <Link className='nav' to="/dash"> <DashboardIcon/> Dashboard </Link>
            <Link className='nav' to="/product"> <CategoryIcon/> Product List</Link>
            <Link className='nav' to="/add"> <AddIcon/> Add Product</Link>
        </nav>
    </div>
  )
}

export default Sidenav