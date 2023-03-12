
import React, { useState}  from 'react'
import { useNavigate } from 'react-router';
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import './Login.css'
import AppContext from '../../components/AppContext';

const Login = () => {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate=useNavigate()
  
  const[inputs,setInputs]=useState({email:"",password:""})
   const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleLogin = async(event) => {
    // event.preventDefault();
    try {
      await axios.post('user/login',inputs,{withCredentials:true})
      navigate('/userpage')
      setInputs({email:"",password:""})
      AppContext.loggedIn=1
    
    } catch (error) {
      alert("Error, Try Again")
    }

  }

  return (
    <div>
      <Navbar />
      
      <div className="loginform">
        <div className="left">
          <div className="flat-surface"></div>
          <div className="quote"><i class="fa fa-quote-left" ></i><br></br><span className='q1'>Good Food means</span><br></br><span className='q2'>Healthy Life.</span><br></br><span className='q3'>Order Now !</span>
          </div>
        </div>

        <div className="right">
          <div className="logincontainer">
        <h2 id='labellogin'>Login Now!</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <input type="text" name='email' placeholder='E-mail' 
          {...register("email",{required:true,pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}
          value={inputs.email||""} onChange={handleChange}/>
          <error>
            {errors.email?.type==='required' && "Email is required"}
            {errors.email?.type==='pattern' && "Enter a valid E-mail ID"}
          </error>
          <input type="password" name='password' placeholder='Password'
          {...register('password',{required:true,minLength:8,maxLength:15})}
          value={inputs.password||""} onChange={handleChange}/>
          <error>
            {errors.password?.type==='required' && "Password is required"}
            {errors.password?.type==='minLength' && "Password should have 8 characters"}
            {errors.password?.type==='maxLength' && "Password should be below 15 characters"}
          </error>
          <input type="submit" value='Login' />
          <div>Not a Member?<a href="/signup">Sign up here!</a></div>
        </form>
        </div>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Login
