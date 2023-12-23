import React from 'react'

import { Link } from 'react-router-dom'
import HeaderCard from '../Components/HeaderCard'
import JobPage from './JobDetails'
import { useRecoilState } from 'recoil'
import searchInputAtom from '../Recoil/searchINputAtom'
import productAllAtom from '../Recoil/productAllAtom'

const EmployeeHeader = () => {

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
      
      
      <li class="nav-item">
        <div class="nav-link active" aria-current="page" ><Link to="/create_job" style={{ textDecoration: 'none' }}>Create Job</Link></div>
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

export default EmployeeHeader