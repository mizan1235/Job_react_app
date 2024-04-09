import React from 'react'
import { useRecoilState } from 'recoil'
import { useRef } from 'react'
import loginEmpAtom from '../Recoil/loginEmpAtom'
import { Link } from 'react-router-dom'
import loginEmpInfoAtom from '../Recoil/loginEmpInfoAtom'
const Employee_login_card = () => {
  const [empLoginData,setEmpLoginData]=useRecoilState(loginEmpAtom);
  const [empLoginInfo,setEmpLoginInfo]=useRecoilState(loginEmpInfoAtom)

  
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
    fetch('https://web-production-1ee0.up.railway.app/Mizan/login_employee',
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

    if(data?.status==="successfull loged in")setEmpLoginInfo(true)
     else alert(data?.status)
    setEmpLoginData(userCredetial);
    
    // console.log(userCredetial)
    // console.log(empLoginInfo)
    // console.log(empLoginData)
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
        <div className='signUp' ><Link to="/employee_reg">Create New Account</Link> </div>
        
        </form>
  
    </div>
   
</div>
  )
}

export default Employee_login_card