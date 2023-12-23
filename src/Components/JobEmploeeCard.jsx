import React from 'react'
import { useRecoilState } from 'recoil'
import jobEmployeeAtom from '../Recoil/jobEmployeeAtom'
import loginEmpAtom from '../Recoil/loginEmpAtom'
import { useEffect } from 'react'
import searchInputAtom from '../Recoil/searchINputAtom'
import editItemAtom from '../Recoil/editItemAtom'
import {  useNavigate } from 'react-router-dom';
const JobEmploeeCard = () => {
  const [JobEmp,setJobEmp]=useRecoilState(jobEmployeeAtom)
  const [empLoginData,setEmpLoginData]=useRecoilState(loginEmpAtom);
  const [searchInput,setSearchInput]=useRecoilState(searchInputAtom)
  const [editItem,setEditItem]=useRecoilState(editItemAtom)
  const history =  useNavigate();

  const userCredetial={
    username:empLoginData?.username
    
  }

  useEffect(()=>{
    fetch('https://web-production-f7d9.up.railway.app/Mizan/get_emp_job',
    {
      method:"POST",
      headers:{
        'Content-Type':"application/json",
      },
      body:JSON.stringify(userCredetial),
    }
    ).then((Response)=>Response.json())
    .then((data)=>{
         console.log(data?.Jobs)
      
       setJobEmp(data?.Jobs)
       console.log(JobEmp)
   
    }).catch((error)=>{
      console.log(error)
    })
    console.log(empLoginData?.username)

},[])
  return (
    <div className='container'>
        <div className='product-wrapper'>
        {JobEmp?.filter((val)=>{
          
          if(searchInput===""){return val}
          else if(val?.company_title?.toLowerCase()?.includes(searchInput?.toLowerCase())){return val}
         // else  return val;
       })?.map((data,index)=>{
          return(
            <div  className='product-cart'>
              {/* {data?.id} */}
              {/* {data?.title} */}
           
           <div className='item-details'>
           <div >
            {<img className='image' src = {data?.company_logo} alt={data?.company_name}/>}
            </div>
           <h3 className='item'>{data?.company_name}</h3>
            <h5 className='item'>Title  {data?.company_title}</h5>
             <div >
              <p >{data?.location}</p>
              <p className='item'>{data?.date}</p>
              {/* <p  className='item'>{data?.id}</p> */}
               
             </div>
              <div className='edit' onClick={(e)=>{
                e.preventDefault()
                setEditItem(data)
                // alert()

                console.log(editItem)
                
               
                history('/edit_item');

              }}>
                 Edit
               </div>
               <div className='edit' onClick={(e)=>{
                e.preventDefault()
                setEditItem(data)
                history('/response')
               }}> Responses</div>
           </div>
                
        
            </div>
          )
        })}
      </div>
       
    </div>
  )
}

export default JobEmploeeCard