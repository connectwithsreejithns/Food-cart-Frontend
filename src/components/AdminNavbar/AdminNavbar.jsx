import React from 'react'
import "./AdminNavbar.css"
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const navigate = useNavigate()
  return (

    <div className="navbar">
      <div className="logo">
        <h2>Sreejith's</h2>
        <h1>KITCHEN</h1>
      </div>
      <div className="menu">
        <ul className='lists'>
          
            <div>
              <li onClick={() => navigate('/login')}><i class="gg-userlane" /><span>Log in</span></li>
              <li onClick={() => navigate('/user/logout')}><i class="gg-userlane" /><span>Logout</span></li>
              <li onClick={() => navigate('/addproduct')}><span> + Add Product</span></li>
              <li onClick={() => navigate('/orders')}><span> View Orders</span></li>
            </div>
          
        </ul>
      </div>

    </div>

  )
}

export default Navbar
