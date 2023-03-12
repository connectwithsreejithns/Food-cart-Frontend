import React from 'react'
import "./Navbar.css"
import { useNavigate } from "react-router-dom";
import AppContext from '../AppContext';
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
          
             { !AppContext.loggedIn&&
              <li onClick={() => navigate('/login')}><i class="gg-userlane" /><span>Log in</span></li>}
              { !AppContext.loggedIn&&
              <li onClick={() => navigate('/signup')}><i class="gg-user-add" /><span>Sign up</span></li>}
              { AppContext.loggedIn&&
              <li onClick={() => navigate('/cart')}><span>Cart</span></li>}
              { AppContext.loggedIn&&
             <li onClick={() => navigate('/user/logout')}><span>Logout</span></li>}
              
            </div>
          
        </ul>
      </div>

    </div>

  )
}

export default Navbar
