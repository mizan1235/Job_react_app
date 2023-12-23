import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import editItemAtom from '../Recoil/editItemAtom';
const ResponseCard = () => {
    const [editItem,setEditItem]=useRecoilState(editItemAtom)
    const [applicationData,setApplicationData]=useState(null)
    useEffect(()=>{
        fetch('https://web-production-f7d9.up.railway.app/Mizan/get_applications', {
            method: "POST",
            headers: {
              'Content-Type': "application/json",
            },
            body: JSON.stringify(editItem),
          })
          .then((response) => response.json())
          .then((Data) => {
             console.log(Data);
            setApplicationData(Data?.applications)
            // console.log(applicationData)
            
            applicationData.map((data,index)=>{
              console.log(index,data)
            })
          })
          .catch((error) => {
            console.log(error);
          });
        // console.log(editItem)
    
    },[])
  return (
    <div>
     
           <div>
            <h2>Applications</h2>
           {
              applicationData?.map((data,index)=>{
                return(
                  <div className='apply-form-container'>

              <div className='form-card-apply'>

                 <h2>{index+1}</h2>
                <form action="" >
                  <div className='form-element'>
                    <h3 className='apply-input'> Name  : </h3>
                    <input type="text" className='apply-input' value={data?.name} />
                  </div>

                  <div className='form-element'>
                    <h3 className='apply-input'> Father's Name  : </h3>
                    <input type="text" className='apply-input' value={data?.father_name}  />
                  </div>

                  <div className='form-element'>
                    <h3 className='apply-input'> Mother's Name  : </h3>
                    <input type="text" className='apply-input'  value={data?.mother_name} />
                  </div>

                  <div className='form-element'>
                    <h3 className='apply-input'> DOB  : </h3>
                    <input type="date" className='apply-input'  value={data?.DOB} />
                  </div>

                  <div className='form-element'>
                    <h3 className='apply-input'> Email  : </h3>
                    <input type="email" className='apply-input'value={data?.email} />
                  </div>

                  <div className='form-element'>
                    <h3 className='apply-input'> Address : </h3>
                    <textarea className='apply-input' rows={4}  value={data?.address} />
                  </div>

                  <div className='form-element'>
                    <h3 className='apply-input'> Home Town  : </h3>
                    <input type="text" className='apply-input' value={data?.hometown} />
                  </div>

                  <div className='form-element'>
                    <h3 className='apply-input'> PIN : </h3>
                    <input type="number" className='apply-input' value={data?.pin}  />
                  </div>

                  <div className='form-element'>
                    <h3 className='apply-input'> Experience : </h3>
                    <textarea className='apply-input' rows={4} value={data?.experience}  />
                  </div>
                  
                  <div className='form-element'>
                    <h3 className='apply-input'> Resume : </h3>
                    <a href={"https://web-production-f7d9.up.railway.app/media/resume/"+data?.resume}>view</a>

                  </div>

                </form>
              </div>
            </div>
                )
              })
            }
           </div>
    </div>
  )
}

export default ResponseCard