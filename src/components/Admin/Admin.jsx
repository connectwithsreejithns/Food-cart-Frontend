import React, { useState }  from 'react'
import Footer from '../Footer/Footer'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './Admin.css'
import axios from 'axios'
import { useNavigate } from 'react-router';

const Admin = () => {
  const navigate=useNavigate()
  const[inputs,setInputs]=useState({email:"",password:""})
   const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleLogin = async(event) => {
    event.preventDefault();
    try {
      await axios.post('/admin',inputs,{withCredentials:true})
      setInputs({email:"",password:""})
      navigate('/list-products')
    } catch (error) {
      alert("Error, Try Again")
    }

  }
  return (
    <div>
      <AdminNavbar/>
      <div className="adminlogin">
        <h2 className="admintitle">ADMIN CONTROL PANEL LOGIN</h2>
        <div className="adminform">
          <form className="adminform"  onSubmit={handleLogin}>
            <input type="email" name="email" id="" placeholder='Email' value={inputs.email||""} onChange={handleChange} />
            <input type="password" name="password" id="" placeholder='Password' value={inputs.password||""} onChange={handleChange}/>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Admin
