import React from 'react'
import { useRef } from 'react'
import { useRecoilState  } from 'recoil';
import { useNavigate } from 'react-router-dom';
import loginAtom from '../Recoil/loginAtom';
import applyJobDetailsAtom from '../Recoil/applyJobDetailsAtom';
const ApplyJobCard = () => {
  const [loginData,setLoginData]=useRecoilState(loginAtom);
  const [applyJobDetails,setApplyJobDetails]=useRecoilState(applyJobDetailsAtom)
 
  const history=useNavigate()
 
  const nameRef=useRef(null);
  const father_nameRef=useRef(null);
  const mother_nameRef=useRef(null);
  const DOBRef=useRef(null);
  const  emailRef=useRef(null);
  const addressRef=useRef(null);
  const hometownRef=useRef(null);
  const pinRef=useRef(null);
  const experienceRef=useRef(null);
  const resumeRef=useRef(null);
   const onSubmit =(e)=>{
    e.preventDefault()

    const data={
      username:loginData?.username,
      job_id:applyJobDetails?.id,
      name:nameRef.current.value,
      father_name:father_nameRef.current.value,
      mother_name:mother_nameRef.current.value,
      DOB:DOBRef.current.value,
      email:emailRef.current.value,
      address:addressRef.current.value,
      hometown:hometownRef.current.value,
      pin:pinRef.current.value,
      experience:experienceRef.current.value,
      resume:resumeRef.current.value
    }
   
    fetch('https://web-production-f7d9.up.railway.app/Mizan/apply_job', {
          method: "POST",
          headers: {
            'Content-Type': "application/json",
          },
          body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((Data) => {
          console.log(Data);
          alert(Data?.message)
          history('/applied_job_user')
          
          
          
        })
        .catch((error) => {
          console.log(error);
          alert('server error login and apply again')
        });
   
   }

   console.log(loginData?.username)
   console.log(applyJobDetails)
  return (
    <div className='apply-form-container'>
      
         <div className='form-card-apply'>

          <form action="" onSubmit={onSubmit}>
            <div className='form-element'>
              <h3 className='apply-input'> Name  : </h3>
              <input type="text" className='apply-input' required  ref={nameRef}/>
            </div>

            <div className='form-element'>
              <h3 className='apply-input'> Father's Name  : </h3>
              <input type="text"  className='apply-input'  ref={father_nameRef} />
            </div>

            <div className='form-element'>
              <h3 className='apply-input'> Mother's Name  : </h3>
              <input type="text"  className='apply-input' ref={mother_nameRef} />
            </div>

            <div className='form-element'>
              <h3 className='apply-input'> DOB  : </h3>
              <input type="date"  className='apply-input' required ref={DOBRef} />
            </div>

            <div className='form-element'>
              <h3 className='apply-input'> Email  : </h3>
              <input type="email"  className='apply-input' required  ref={emailRef}/>
            </div>

            <div className='form-element'>
              <h3 className='apply-input'> Address : </h3>
              <textarea  className='apply-input'   rows={4} ref={addressRef}/>
            </div>

            <div className='form-element'>
              <h3 className='apply-input'> Home Town  : </h3>
              <input type="text"  className='apply-input' ref={hometownRef}  />
            </div>

            <div className='form-element'>
              <h3 className='apply-input'> PIN : </h3>
              <input type="number"  className='apply-input' ref={pinRef}  />
            </div>

            <div className='form-element'>
              <h3 className='apply-input'> Experience : </h3>
              <textarea  className='apply-input'   rows={4} ref={experienceRef}/>
            </div>

            <div className='form-element'>
              <h3 className='apply-input'> Upload Resume : </h3>
              <input type="file"  className='apply-input' accept=".pdf, .docs,"  required ref={resumeRef}/>
            </div>

            <div className='form-element'>
             
              <button type="submit"  > Submit</button>
              <button type='reset' >reset</button>
            </div>

          

          </form>

         </div>
    </div> 
    
  )
}

export default ApplyJobCard