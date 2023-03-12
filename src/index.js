import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Cart from './pages/Cart/Cart'
import Placeorder from './components/Placeorder/Placeorder';
import EditFood from './components/EditFood/EditFood'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from "axios"
import UserPage from './pages/UserPage/UserPage';
import Admin from './components/Admin/Admin';
import AdminSeeProducts from './pages/AdminSeeProducts/AdminSeeProducts';
import AddProduct from './components/AddProduct/AddProduct';
import Orders from './components/Orders/Orders';
axios.defaults.baseURL='http://localhost:3000'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/login' element={<Login />} />
            <Route path='/userpage' element={<UserPage/>} />
            <Route path='/user/logout' element={<App />} />
            <Route path='/cart' element={<Cart/>} />
            {/* admin */}
            <Route path='/admin' element={<Admin/>} />
            <Route path='/list-products' element={<AdminSeeProducts/>} />
            <Route path='/placeorder' element={<Placeorder/>} />
            <Route path='/addproduct' element={<AddProduct/>} />
            <Route path='/editproduct' element={<EditFood/>} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/signup' element={<Signup/>} />
        </Routes>
    </BrowserRouter>
);


