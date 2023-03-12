import React, { useState } from 'react'
import './OrderForm.css'
import axios from 'axios'
const OrderForm = () => {
  const[inputs,setInputs]=useState({})
  
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }



  const handleLogin = async(event) => {
    event.preventDefault();
    try {
      const res = await axios.get('/user/cart',{withCredentials:true})
      const products=res.data.cart
      setInputs(inputs=>({...inputs,products}))
      await axios.post('user/ordernow',inputs,{withCredentials:true})
      await axios.delete('user/deletecart',{withCredentials:true})
      
    } catch (error) {
      console.log(error)
    }

  }

 

  return (
    <div className="orderform">
        
        
        <form className='orderaddress' onSubmit={handleLogin}>
            <h2>Enter Delivery Address</h2>
            <input type="text" name="housename" value={inputs.housename||''} onChange={handleChange} placeholder='Housename' />
            <input type="text" name="address" value={inputs.address||''} onChange={handleChange} placeholder='Address'/>
            <input type="text" name="city" value={inputs.city||''} onChange={handleChange} placeholder='City' />
            <input type="submit" className='btn' value="Place Order" />
        </form>
    </div>
  )
}

export default OrderForm
