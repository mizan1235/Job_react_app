import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import loginAtom from '../Recoil/loginAtom';
import userDataAtom from '../Recoil/userDataAtom'
import { useRef } from 'react';

const UserProfileCard = () => {
    const [loginData,setLoginData]=useRecoilState(loginAtom);
    const [userData,setUserData]=useRecoilState(userDataAtom);

    const nameRef=useRef(null)
      const emailRef=useRef(null)
      const usernameRef=useRef(null)
      const phoneRef=useRef(null)

    useEffect(()=>{
        fetch('https://web-production-1ee0.up.railway.app/Mizan/get_user', {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(loginData),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setUserData(data?.user[0])
      
     
    })
    .catch((error) => {
      console.log(error);
    });
    
    },[])

    const onSubmit=(e)=>{
      e.preventDefault()
      
      const data={
        name:nameRef.current.value,
        email:emailRef.current.value,
        username:loginData?.username,
        phone:phoneRef.current.value,
        new_user_name:usernameRef.current.value

      }
      fetch('https://web-production-1ee0.up.railway.app/Mizan/update_user', {
        method: "PUT",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((Data) => {
        console.log(Data);
        alert(Data?.message)
        
        
      })
      .catch((error) => {
        console.log(error);
      });
  

    }

  return (
    <div>
      <div className='apply-form-container'>
      
      <div className='form-card-apply'>
        
       <form action="">
         <div className='form-element'>
           <h3 className='apply-input'> Name  : </h3>
           <input type="text" className='apply-input' defaultValue={userData?.name} required ref={nameRef} />
         </div>

         <div className='form-element'>
           <h3 className='apply-input'> Email  : </h3>
           <input type="email"  className='apply-input' defaultValue={userData?.email} required ref={emailRef} />
         </div>

         <div className='form-element'>
           <h3 className='apply-input'> User Name  : </h3>
           <input type="text"  className='apply-input'defaultValue={userData?.username} required  ref={usernameRef}/>
         </div>

         <div className='form-element'>
           <h3 className='apply-input'> Phone  : </h3>
           <input type="tel"  className='apply-input' defaultValue={userData?.phone} required ref={phoneRef} />
         </div>


         <div className='form-element'>
          
           <button type="submit" onClick={onSubmit}  > Update</button>
           
         </div>

       

       </form>

      </div>
      
 </div> 

    </div>
    
    
  )
}

export default UserProfileCard