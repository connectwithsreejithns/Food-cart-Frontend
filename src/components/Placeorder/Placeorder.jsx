import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Placeorder.css'
import OrderForm from '../OrderForm/OrderForm'

const Placeorder = () => {
  return (
    <div>
      <Navbar/>
      <OrderForm/>
      <Footer/>
    </div>
  )
}

export default Placeorder
