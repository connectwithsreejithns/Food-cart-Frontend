import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import './Signup.css'
import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router';

  
const Signup = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  const navigate=useNavigate()

  const[inputs,setInputs]=useState({email:"",name:"",confirmpassword:"",password:""})
  const[update,setUpdate]=useState(null)
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSignup = async(e,data) => {
  
    // ??e.preventDefault();

    try {
      const res=await axios.post('user/signup',inputs,{withCredentials:true})
      setUpdate(res.data.message)
      setInputs({email:"",name:"",confirmpassword:"",password:""})
      navigate('/login')
      alert('Account Created')
    } catch (error) {
      setUpdate(error.response.data.message)
      
    
    }

  }

  

  return (
    <div>
      <Navbar />
      
      <div className="signupform">
        <div className="left">
          <div className="flat-surface"></div>
          <div className="quote"><i class="fa fa-quote-left" ></i><br></br><span className='q1'>Good Food means</span><br></br><span className='q2'>Healthy Life.</span><br></br><span className='q3'>Order Now !</span>
          </div>
        </div>

        <div className="right">
          <div className="container">
        <h2 id='labelsignup'>Create An Account</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <input type="text" name='name' placeholder='Full Name' {...register("name",{required:true,minLength:5,maxLength:15})} value={inputs.name||""} onChange={handleChange}/>
          <error>
            {errors.name?.type==='required' && "Name is required"}
            {errors.name?.type==='minLength' && "Name should be atleast 5 characters"}
            {errors.name?.type==='maxLength' && "Name can't be above 15 characters"}
          </error>
          <input type="email" name='email' placeholder='E-mail' {...register("email",{required:true,pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} value={inputs.email||""} onChange={handleChange}/>
          <error>
            {errors.email?.type==='required' && "Email is required"}
            {errors.email?.type==='pattern' && "Enter a valid E-mail ID"}
          </error>

          <input type="password" name='password' 
          {...register('password',{ required: "Password is required!",minLength: { value: 8, message: 'Too short' },maxLength: { value: 15, message: 'Too Long' } })}
          placeholder='Choose Password' value={inputs.password||""} onChange={handleChange}/>
          {errors.password && (
          <p style={{ color: "white" }}>{errors.password.message}</p>
        )}
          



          <input type="password" name='confirmpassword'
          {...register('confirmpassword',{
            required: "Please confirm password!",
            validate: {
              matchesPreviousPassword: value => {
                const { password } = getValues();
                return password === value || "Passwords should match!";
              }
            }
          })}
         placeholder='Confirm Password' value={inputs.confirmpassword||""} onChange={handleChange}/>
        {errors.confirmpassword && (
          <p style={{ color: "white" }}>
            {errors.confirmpassword.message}
          </p>
        )}

          <input type="submit" value='Create Account' />
          <h4>{update}</h4>
          <div className='signcomment'>Already have an account?<a className='signup-a' href="/login">Sign in here!</a></div>
        </form>
        </div>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Signup
