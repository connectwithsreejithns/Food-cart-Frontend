import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Userpage.css'



const UserPage = () => {
    const [card, setCard] = useState(null)

    useEffect(() => {
        fetchCards();
    }, [])

    const fetchCards = async () => {
       
        const res = await axios.get('/',{withCredentials:true})
        setCard(res.data.food)
    }

    const add=async(id)=>{
        try {
            await axios.get(`/user/add-to-cart/${id}`,{withCredentials:true})
            alert("Item Added to Cart")
        } catch (error) {
            console.log(error)
        }   
    }

    return (<div>
        <Navbar />
        <div className='userpage'>

        {card && card.map((food)=>(




<div className="userimagewrap">




<img className='userpageimage' src={require(`../../../../server/images/${food._id}.jpg`)} alt=""/>
<div className="detail">
    <h2 className='userpagename'>{food.name}</h2>
    <h3 className='userpageprice'>Rs.{food.price} for 1</h3>
    <hr />
    <button className='btn ripple' onClick={()=>{add(`${food._id}`)}}>Add to Food Cart</button>
</div>
</div>
        
    ))}


</div>



        <Footer />
    </div>

    )
}

export default UserPage
