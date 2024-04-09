import React from 'react'
import { useRecoilState } from 'recoil';
import editItemAtom from '../Recoil/editItemAtom';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
const EditItemCard = () => {
    const [editItem,setEditItem]=useRecoilState(editItemAtom)
    const apply_linkRef=useRef(null);
    const company_logoRef=useRef(null);
    const company_nameRef=useRef(null);
    const company_titleRef=useRef(null);
    const dateRef=useRef(null);
    const job_idRef=useRef(null);
    const locationRef=useRef(null)

    const history=useNavigate()
      
      const onSubmit=(e)=>{
        e.preventDefault()
        const data = {
          apply_link:apply_linkRef.current.value,
          company_logo:company_logoRef.current.value,
          company_name:company_nameRef.current.value,
          company_title:company_titleRef.current.value,
          date:dateRef.current.value,
          id:editItem?.id,
          job_id:job_idRef.current.value,
          location:locationRef.current.value,
          username:editItem?.username
          
        };
       
        
        console.log(data)
        fetch('https://web-production-1ee0.up.railway.app/Mizan/update_job', {
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
      history("/job_emp")
      
      
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
        ref={apply_linkRef} defaultValue={editItem?.apply_link}
        />
        <input className='login-input' type='text' placeholder='Enter company logo'
        ref={company_logoRef}   defaultValue={editItem?.company_logo}
        />
        <input className='login-input' type='text' placeholder='Enter company name'
        ref={company_nameRef}  defaultValue={editItem?.company_name} />
       
        <input className='login-input' type='text' placeholder='Enter company title'
        ref={company_titleRef}   defaultValue={editItem?.company_title}/>
        <input className='login-input' type='text' placeholder='Enter last date'
        ref={dateRef}  defaultValue={editItem?.date} />
        <input className='login-input' type='text' placeholder='Enter job id'
        ref={job_idRef}  defaultValue={editItem?.date} />
        
        <input className='login-input' type='text' placeholder='Enter job location'
        ref={locationRef} defaultValue={editItem?.location}
        />
        

       
       
        <button className='login-btn' type='submit'>Save</button>
        </form>
    </div>
</div>
  )
}

export default EditItemCard