import React from 'react'
import registerEmpAtom  from '../Recoil/registerEmpAtom'
import { useRecoilState } from 'recoil'
import { useRef } from 'react'

const Employee_reg_card = () => {
    const [empRegData,setEmpRegData]=useRecoilState(registerEmpAtom);

    
  const nameRef=useRef(null);
  const useremailRef= useRef(null);
  const usernameRef= useRef(null);
  const userphoneRef= useRef(null);
  const passwordRef = useRef(null);

  const onSubmit=(e)=>{
    e.preventDefault();
    
    const data = {
      name:nameRef.current.value,
      username: usernameRef.current.value,
      email: useremailRef.current.value,
      phone: userphoneRef.current.value,
      password: passwordRef.current.value
      
    };
    
    fetch('https://web-production-f7d9.up.railway.app/Mizan/create_employee', {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert(data?.message)
      setEmpRegData(data)
    })
    .catch((error) => {
      console.log(error);
    });
   }
  return (
    <div className='login-card-container'>
                <div className='form-card'>
            <form onSubmit={onSubmit}>
            <input className='login-input' type='text' placeholder='Enter your Name'
            ref={nameRef}
            />
            <input className='login-input' type='text' placeholder='Enter your User Name'
            ref={usernameRef} required />
            <input className='login-input' type='email' placeholder='Enter your Email'
            ref={useremailRef} required />
            <input className='login-input' type='tel' placeholder='Enter your Mobile Number'
            ref={userphoneRef}
            />

            <input className='login-input' type='password' placeholder='password'
            ref={passwordRef} required />
           
            <button className='login-btn' type='submit'>Sign Up</button>
            </form>
        </div>

    </div>
  )
}

export default Employee_reg_card