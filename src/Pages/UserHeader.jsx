import React from 'react'
import { Link } from 'react-router-dom'
import HeaderCard from '../Components/HeaderCard'
import JobPage from './JobDetails'
import { useRecoilState } from 'recoil'
import searchInputAtom from '../Recoil/searchINputAtom'
import productAllAtom from '../Recoil/productAllAtom'
const UserHeader = () => {
    const [searchInput,setSearchInput]=useRecoilState(searchInputAtom)
    const [productDetails,setProductDetails]=useRecoilState(productAllAtom)
    
  
  
    console.log(searchInput)
  
    
    return (
      <div>
        {/* <HeaderCard/> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="navbar-brand" >Carrer</div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <div class="nav-link active" aria-current="page" ><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></div>
          </li>
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Filter
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><div class="dropdown-item" 
             >By Company Name
             <select  className='select-item' onChange={(e)=>{
              e.preventDefault();
                console.log(e.target.value)
               
                const filtreData={
                  company_name:e.target.value
                  
                }
                fetch('https://web-production-f7d9.up.railway.app/Mizan/get_job_comp',
                {
                  method:"POST",
                  headers:{
                    'Content-Type':"application/json",
                  },
                  body:JSON.stringify(filtreData),
                }
                ).then((Response)=>Response.json())
                .then((data)=>{
                     console.log(data?.Jobs)
                     setProductDetails(data?.Jobs)
                  
                }).catch((error)=>{
                  console.log(error)
                })
  
              }}>
                  <option value="All" selected>All</option>
                  <option value="LeadSimple, Inc.">LeadSimple, Inc.</option>
                  <option value="mailchimp">mailchimp</option>
                  <option value="Overmind">Overmind</option>
                  <option value="Bellawatt">Bellawatt</option>
                  <option value="HelloChakra LLC">HelloChakra LLC</option>
                  <option value="Openvolt">Openvolt</option>
                  <option value="Trifecta Retail Ventures">Trifecta Retail Ventures</option>
                  <option value="Narva Software">Narva Software</option>
                  <option value="Stone Press">Stone Press</option>
                  <option value="Cranky Concierge">Cranky Concierge</option>
                  <option value="Contra">Contra</option>
                  <option value="EstateSales.org LLC">EstateSales.org LLC</option>
                  <option value="Proxify AB">Proxify AB</option>
                  <option value="64 Robots">64 Robots</option>
                  <option value="A.Team">A.Team</option>
                  <option value="TextMagic">TextMagic</option>
                  
                </select>
             </div>
              
              
              </li>
              <li><div class="dropdown-item" >By Location</div>
              <select name="" id="" className='select-item' onChange={(e)=>{
               e.preventDefault();
               console.log(e.target.value)
              
               const filtreData={
                 location:e.target.value
                 
               }
               fetch('http://127.0.0.1:8000/Mizan/get_job_location',
               {
                 method:"POST",
                 headers:{
                   'Content-Type':"application/json",
                 },
                 body:JSON.stringify(filtreData),
               }
               ).then((Response)=>Response.json())
               .then((data)=>{
                    console.log(data?.jobs)
                    setProductDetails(data?.jobs)
                 
               }).catch((error)=>{
                 console.log(error)
               })
  
              }}>
                <option value="All" selected>Any Location</option>
                <option value="anywhere in the world">anywhere in the world</option>
                <option value="latin america only/europe only/emea only">latin america only/europe only/emea only</option>
                <option value="north america only">north america only</option>
                <option value="usa only">usa only</option>
                <option value="europe only">europe only</option>
              </select>
              
              </li>
              <li><hr class="dropdown-divider"/></li>
              
            </ul>
          </li>
         
          <li class="nav-item">
            <div class="nav-link active" aria-current="page" ><Link to="/login" style={{ textDecoration: 'none' }}>Log In</Link></div>
          </li>

          <li class="nav-item">
            <div class="nav-link active" aria-current="page" ><Link to="/user_profile" style={{ textDecoration: 'none' }}>Profile</Link></div>
          </li>

          <li class="nav-item">
            <div class="nav-link active" aria-current="page" ><Link to="/applied_job_user" style={{ textDecoration: 'none' }}>Applid Jobs</Link></div>
          </li>
         
        </ul>
        <form class="d-flex" >
          <input class="form-control me-2" type="search" placeholder="Search Job Title" aria-label="Search"
           value={searchInput} onChange={(e)=>{
            setSearchInput(e.target.value)
            
           }}/>
          <button class="btn btn-outline-success" type="submit"
          >Search </button>
        </form>
      </div>
    </div>
  </nav>
        
      </div>
    )
  }
  

export default UserHeader