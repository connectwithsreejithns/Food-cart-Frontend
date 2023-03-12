import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar'
import './AdminSeeProducts.css'
import { useNavigate } from 'react-router'

import axios from 'axios'



const AdminSeeProducts = () => {
  const navigate=useNavigate()
  const [table, setTable] = useState(null)
  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    try {
      const res = await axios.get('/admin/foodlist', { withCredentials: true })
      setTable(res.data.food)
    } catch (error) {

    }
  }

const editfood=(id)=>{
  try {
    console.log('id',id)
    navigate('/editproduct',{state:{id:id}})
  } catch (error) {
    
  }
}

  return (
    <div>
      <AdminNavbar />
      <div className="seeproducts">

        <div className="admincontainer">
          <table>
            <tr>
              <td>Item</td>
              <td>Image</td>
              <td>Price</td>
              <td>Tools</td>
            </tr>

            {table && table.map((food) => (
              <tr>
                <th>{food.name}</th>
                <th><img class='adminfoodimage' src={require(`../../../../server/images/${food._id}.jpg`)} alt="" /></th>
                <th>{food.price}</th>
                <th><div className="adminbuttons"><button className="adminbutton" onClick={()=>(editfood(`${food._id}`))}>Edit</button><button className="adminbutton">Delete</button></div></th>
              </tr>
            ))}
          </table>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AdminSeeProducts
