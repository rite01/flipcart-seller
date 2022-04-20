import React from 'react';
import { Navigate } from 'react-router-dom';
export const PrivateRoute  =({Component}) =>{
    return localStorage.getItem("Token") ? <Component/> : <Navigate to="/"/>
}