import React from 'react'
import loginAtom from '../Recoil/loginAtom'
import { useRef } from 'react'
import { useRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
const LoginCard = () => {
  const [loginData,setLoginData]=useRecoilState(loginAtom);
 
  const usernameRef=useRef(null)
  const passwordRef=useRef(null)


  const onSubmit=(e)=>{
    e.preventDefault()
    // console.log(usernameRef?.current?.value)
    // console.log(passwordRef?.current?.value)
    const userCredetial={
      username:usernameRef?.current?.value,
      password:passwordRef?.current?.value
    }
    fetch('https://web-production-f7d9.up.railway.app/Mizan/login_user',
    {
      method:"POST",
      headers:{
        'Content-Type':"application/json",
      },
      body:JSON.stringify(userCredetial),
    }
    ).then((Response)=>Response.json())
    .then((data)=>{
       console.log(data)
      // console.log("hello")
      // if(data?.status==="successfull loged in"){
      //  localStorage.setItem('userStatus',true)
      //  setUserInfo(true)
      // }
      // else{
      //   localStorage.setItem('userStatus',false)
      // }


    //  setLoginData(data)
        setLoginData(userCredetial)
     console.log(loginData)
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div className='login-card-container'>
        <div className='form-card'>
            <form onSubmit={onSubmit} >
            
            <input className='login-input' type='text' placeholder='Enter your userName'
           ref={usernameRef} required/>
            
            <input className='login-input' type='password' placeholder='password'
            ref={passwordRef} required/>
           
            <button className='login-btn' type='submit'>Log In</button>
            <div className='botton-card'>
            <div className='signUp' ><Link to="/register">Create New Account</Link> </div>
            <div className='signUp' ><Link to="/forgot_password">Forgot Password</Link> </div>
            </div>

            </form>
      
        </div>
       
    </div>
  )
}

export default LoginCard