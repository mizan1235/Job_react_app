import React from 'react'
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import loginEmpAtom from '../Recoil/loginEmpAtom';
const CreateJobCard = () => {
  const [empLoginData,setEmpLoginData]=useRecoilState(loginEmpAtom);

    const apply_linkRef=useRef(null);
    const company_logoRef=useRef(null);
    const company_nameRef=useRef(null);
    const company_titleRef=useRef(null);
    const dateRef=useRef(null);
    const job_idRef=useRef(null);
    const locationRef=useRef(null);
    

    const onSubmit=(e)=>{

      e.preventDefault()
        const data = {
          apply_link:apply_linkRef.current.value,
          company_logo:company_logoRef.current.value,
          company_name:company_nameRef.current.value,
          company_title:company_titleRef.current.value,
          date:dateRef.current.value,
          
          job_id:job_idRef.current.value,
          location:locationRef.current.value,
          username:empLoginData.username
          
        };

        fetch('https://web-production-1ee0.up.railway.app/Mizan/create_job', {
          method: "POST",
          headers: {
            'Content-Type': "application/json",
          },
          body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((Data) => {
          console.log(Data);
          
          
          
        })
        .catch((error) => {
          console.log(error);
        });
    
    }

  return (
    <div className='login-card-container'>
      
    <div className='form-card'>
        <form  onSubmit={onSubmit}>
        <input className='login-input' type='text' placeholder='Apply Link'
        ref={apply_linkRef} defaultValue={"#"}
        />
        <input className='login-input' type='file' placeholder='Enter company logo'
        ref={company_logoRef} 
        />
        <input className='login-input' type='text' placeholder='Enter company name'
        ref={company_nameRef}  />
       
        <input className='login-input' type='text' placeholder='Enter Job title'
        ref={company_titleRef}   />
        <input className='login-input' type='text' placeholder='Enter last date'
        ref={dateRef}   />
        <input className='login-input' type='text' placeholder='Enter job id'
        ref={job_idRef}   />
        
        <input className='login-input' type='text' placeholder='Enter job location'
        ref={locationRef} 
        />
        
       
        <button className='login-btn' type='submit'>Save</button>
        </form>
    </div>
</div>
  )
}

export default CreateJobCard