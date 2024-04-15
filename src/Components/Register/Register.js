import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


                                                                                         // it is linked inside login

export default function Register() {

  const [getData, setData] = useState({
    name:"",
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
    axios.post("https://academics.newtonschool.co/api/v1/user/signup",getData).then((response)=>{
      console.log(response);
      navigate('/login')
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
      <h2 style={{color:"green"}}>{getError}</h2>
      <input type='text' name='name' id='name' value={getData.name} onChange={onChangeHandler} placeholder='User Name' required autoComplete='off' />
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



     
    </>
   
  )
}
