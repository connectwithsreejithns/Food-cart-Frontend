import React, { useState, useEffect } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router'

import axios from 'axios'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Cart = () => {
  const navigate=useNavigate()
  const [cart, setCart] = useState(null)
  const [quantity,setQuantity]=useState(1)
    useEffect(() => {
 
        fetchCart();
    }, [quantity])

    const fetchCart = async () => {
    
        try {

          
          const res = await axios.get('/user/cart',{withCredentials:true})
          
          setCart(res.data.cart)
          
          
        } catch (error) {
          
        }
        
    
        //


    }

    const increase = async(id) => {
      
    
      try {
        await axios.get(`/user/changecart-count/${id}`,{withCredentials:true})
        setQuantity(quantity+1)
      } catch (error) {
        console.log(error)
      }
  
    }

    const decrease = async(id) => {
      
    
      try {
        await axios.get(`/user/changecart-countinc/${id}`,{withCredentials:true})
        setQuantity(quantity-1)
      } catch (error) {
        console.log(error)
      }
  
    }

    
   
  return (
    <div>
      <Navbar/>
    

        <div className="cart">
        <div className="flat-surface-cart"></div>
            <div className="leftcart">
                <h2 className="carttitle">Items Added on your Food Cart</h2>


                {cart && cart.map((item)=>(
                  
                <div className="foodbox">
                  
                <img className="cartimage" src={require(`../../../../server/images/${item.food._id}.jpg`)} alt="" />
                <div className='cartitemdetail'>
                <h3 className="cartname">{item.food.name}</h3>
                <h3 className="cartrate">{item.food.price}</h3>
                </div>
              
                <div className="changebutton"><button className="butn" onClick={()=>{increase(`${item.food._id}`)}}>+</button> {item.quantity} <button className="butn" onClick={()=>{decrease(`${item.food._id}`)}}>-</button>
                </div>
                </div>

                ))}
                
            </div>
            <div className="rightcart">
            <div className="ordercontents">
                <h2 className='ordertitle'>Order Details</h2>
                <hr />
                {cart && cart.map((item)=>(
                  <div>
                <h3 className='ordername'>{item.food.name}</h3>
                <h3 className='orderrate'>Rs.{item.food.price} X {item.quantity}</h3>
          
                <h3 className='ordertotal'>Total:{item.food.price*item.quantity}</h3>
                <hr/>
                k
                </div>
                ))}
                </div>
                <div className="subtotal">
                <h3>Subtotal</h3>
                <button className="btn" onClick={()=>navigate('/placeorder')}>Checkout &gt;&gt;</button>
                </div>
            </div>
        </div>


      <Footer/>
    </div>
  )
}

export default Cart
