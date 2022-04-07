import React from 'react'
import { Link } from 'react-router-dom';
import "./sidenav.css";

const Sidenav = () => {
  return (
    <div className="sidenav">
        <nav>
            <Link className='nav' to="/dash"> Dashboard </Link>
            <Link className='nav' to="/product">  Product List</Link>
        </nav>
    </div>
  )
}

export default Sidenav