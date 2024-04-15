import React, { useState } from 'react'
import Register from '../Register/Register'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Login() {

  const [getData, setData] = useState({
   email:"",
   password:"",
   appType:"music"
  })

  const [getError,setError]  = useState('');


   const navigate = useNavigate();

   const onChangeHandler = (event)=>{
      setData({...getData,[event.target.name]: event.target.value})
      
   }
   

  const onSubmitHandler = (event)=>{
    event.preventDefault()
    setError('');
    // alert("submited");
    // console.log(getData);
    axios.post("https://academics.newtonschool.co/api/v1/user/login",getData).then((response)=>{
      console.log(response);
      navigate('/');
     
    }).catch((error)=>{
      if(error.response && error.response.data && error.response.data.message){ 
        setError(error.response.data.message);
      }else{
        setError("unknown error please try after some time");
      }
  console.log(error);
    })

  }

  
  return (
    <>
   
    
   <section>
    <form onSubmit={onSubmitHandler}>
      <h2 style={{color:'red'}}>{getError}</h2>
      <input type='email' name='email' id='email' value={getData.email} onChange={onChangeHandler} placeholder='Email Address' required autoComplete='off' />
      <input type='password' name='password' id='password' value={getData.password} onChange={onChangeHandler} placeholder='Password' required autoComplete='off' />
      
      <label htmlFor="appType">App Type</label>
      <select id='appType' name='appType' onChange={onChangeHandler} required>
        <option>music</option>
        <option>album</option>
      </select>
      <button type='submit'>Submit</button>
    </form>
   </section>


   <Link to="/register" >SignUp</Link>
     
    </>
  )



  
        
}
