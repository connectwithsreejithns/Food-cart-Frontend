import React, { useState, useEffect } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './EditFood.css'

const EditFood = (route, navigation) => {

  const location = useLocation();
  const id = location.state.id
  const [detail, setDetail] = useState({})
  const [image, setImage] = useState(null)

  useEffect(async () => {
    console.log(id)
    const food = await axios.get(`/getfood/${id}`, { withCredentials: true })
    console.log(food.data.food)
    setDetail({ name: food.data.food.name, price: food.data.food.price, category: food.data.food.category, description: food.data.food.description })
    const imagesrc=food.data.food._id
    
    setImage(require(`../../../../server/images/${imagesrc}.jpg`))
  }, [])

  const handlechange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setDetail(values => ({ ...values, [name]: value }))
  }

  const handlesubmit = async (event) => {
    event.preventDefault();
    try {
      const formdata= new FormData();
      formdata.append('name',detail.name)
      formdata.append('price',detail.price)
      formdata.append('category',detail.category)
      formdata.append('description',detail.description)
      formdata.append('photo',detail.photo)


      console.log('///////////', id, '///////', detail)
      await axios.put(`edit-food/${id}`, formdata, { withCredentials: true })

    } catch (error) {
      console.log(error)
    }
  }


  const onImageChange = (event) => {
    setDetail(values=>({...values,photo:event.target.files[0]}))
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <div>
      <AdminNavbar />
      <div className="form" >

        <form class='productform' onSubmit={handlesubmit}>
          <h2>Edit the Product</h2>
          <hr />
          <input type="text" name='name' value={detail.name || ''} onChange={handlechange} placeholder='Enter Item Name' />
          <input type="text" name='price' value={detail.price || ''} onChange={handlechange} placeholder='Enter Price' />
          <input type="text" name='category' value={detail.category || ''} onChange={handlechange} placeholder='Category' />
          <input type="text" name="description" value={detail.description || ''} onChange={handlechange} placeholder='Description' />
          <div className="fileupload" >
            <input type="file" name='image' value={detail.imgfile||""} onChange={onImageChange} id='image' />
            <label for="image" id='labelimage'>Click me to upload image</label>
          </div>

          <input type="submit" class="btn" value="Edit the product" />
        </form>
        <div className="imagepreview">
          <img className='viewimage' src={image} alt="Image preview" /> 
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default EditFood
