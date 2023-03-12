import React from 'react'
import { useState } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import Footer from '../Footer/Footer'
import './AddProduct.css'
import axios from 'axios'

const AddProduct = () => {
    const[inputs,setInputs]=useState({})
    const handleChange = (event) => {
     const name = event.target.name;
     const value = event.target.value;
     setInputs(values => ({...values, [name]: value}))
   }
 
   const handleLogin = async(event) => {
     event.preventDefault();
     try {
      const formdata= new FormData();
      formdata.append('name',inputs.name)
      formdata.append('price',inputs.price)
      formdata.append('category',inputs.category)
      formdata.append('description',inputs.description)
      formdata.append('photo',inputs.photo)
      console.log('////',inputs.photo)
       await axios.post('/add-food',formdata,{withCredentials:true})
       console.log(inputs)
     } catch (error) {
       console.log("error is //",error)
     }
 
   }

   const handlePhoto=(e)=>{
    
    setInputs(values=>({...values,photo:e.target.files[0]}))
   
   }


  return (
   
    <div>
      <AdminNavbar/>
      <div className="form" >
        
      <form class='productform' onSubmit={handleLogin}>
        <h2>Add a New Product</h2>
        <hr />
        <input type="text" name='name' value={inputs.name||""} onChange={handleChange} placeholder='Enter Item Name'/>
        <input type="text" name='price' value={inputs.price||""} onChange={handleChange} placeholder='Enter Price'/>
        <input type="text" name='category' value={inputs.category||""} onChange={handleChange} placeholder='Category'/>
        <input type="text" name="description" value={inputs.description||""} onChange={handleChange} placeholder='Description' />
        <div className="fileupload" > 
         <input type="file" name='imgfile' id='image' value={inputs.imgfile||""} onChange={handlePhoto}  />
         <label for="image" id='labelimage'>Click me to upload image</label>
         </div>      

        <input type="submit"  class="btn" value="Add the product" />
      </form>
      
      </div>
      <Footer/>
    </div>
  )
}

export default AddProduct
