import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import productAllAtom from '../Recoil/productAllAtom';
import searchInputAtom from '../Recoil/searchINputAtom'
import loginAtom from '../Recoil/loginAtom';
import {  useNavigate } from 'react-router-dom';
import applyJobDetailsAtom from '../Recoil/applyJobDetailsAtom'
import './Home.css'

const JobDetails = () => {
   
    const [productDetails,setProductDetails]=useRecoilState(productAllAtom)
    const [searchInput,setSearchInput]=useRecoilState(searchInputAtom)
    const [loginData,setLoginData]=useRecoilState(loginAtom);
    const [applyJobDetails,setApplyJobDetails]=useRecoilState(applyJobDetailsAtom)
    const history =  useNavigate();
    useEffect(()=>{
          fetch('http://127.0.0.1:8000/Mizan/get_job', {
            method: "GET",
                    headers: {
                      'Content-Type': "application/json",
                    }
                    
          })
          .then((response) => response.json())
          .then((data) => {
            // setProductDetails(data?.items)
            console.log(data?.items);
             setProductDetails(data?.jobs)
            console.log(data);
           
            
          })
          .catch((error) => {
            console.log(error);
          });
      
      },[])
  return (
    <div className='container'>
 
        <div className='product-wrapper'>
        {productDetails?.filter((val)=>{
          
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
            {/* {<img className='image' src = "https://web-production-f7d9.up.railway.app/media/media/Pasbk.jpg" alt={data?.company_name}/>} */}
            </div>
           <h3 className='item'>{data?.company_name}</h3>
            <h5 className='item'>Title :  {data?.company_title}</h5>
             <div >
              <p >{data?.location}</p>
              <p className='item'>{data?.date}</p>
              {/* <p  className='item'>{data?.id}</p> */}
               <h2 className='item apply' onClick={(e)=>{
                e.preventDefault()
                if(loginData===null){
                  // alert()
                   // Redirect to the login page
                  history('/login');
                }
                else{
                  if(data?.apply_link!=="#"){
                    
                      window.location.href = data?.apply_link;
             
                  }
                  else{
                    setApplyJobDetails(data)
                    history('/apply_job')
                  }
                }
               

               }}> Apply Now</h2>
             </div>
           </div>
                
            </div>
          )
        })}
      </div>
    </div>
        
   
  )
}

export default JobDetails