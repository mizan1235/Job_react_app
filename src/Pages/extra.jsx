import React from 'react'
import "./Shoping.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import initialProductAtom from '../../Recoil/initialProductAtom'
// import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from 'react-router-dom'
import loginDetailsAtom from '../../Recoil/loginDetailsAtom'
import Address from "../Login/Address"

const Product = () => {
    const [ApiData,SetApiData]=useRecoilState(initialProductAtom);
  const[searchInput,setSearchInput]=useState("");
  const [LogedInUser,setLogedInUser]=useRecoilState(loginDetailsAtom)
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{console.log(json)
            SetApiData(json)
          console.log(LogedInUser?.email)
          })
            
  },[ ])
  // const AddCard=(e)=>{
  //   e.preventDefault()
  //   console.log(e)
  // }
  return (
    <div>
       
       <div className='container  '>
                
                <div className='Logo flex-item'><Link to="/">Shoppy</Link></div>
                <div className='flex-item search'>
                    <div className='search-item'>
                        <input type="text" placeholder='Search Here ... '
                        className='search-input'
                        value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}}
                        
                        />
                    </div>
                    
                </div>
                <div className='sign-in flex-item'>
                <Link to="/login">Sign In</Link>
                </div>
                <div className='flex-item sign-in'> 
                <span id='card' ><LocalMallOutlinedIcon/></span>
                <Link to="/card">Card</Link></div>

        </div>
     
      <div className='product-wrapper'>
        {ApiData?.filter((val)=>{
          
           if(searchInput===""){return val}
           else if(val?.title?.toLowerCase()?.includes(searchInput?.toLowerCase())){return val}
          // else  return val;
        })?.map((data,index)=>{
          return(
            <div key={data?.id} className='product-cart'>
              {/* {data?.id} */}
              {/* {data?.title} */}
              {<img className='image' src = {data?.image} alt={data?.title}/>}
           <div>
           <h3 className='product-name'>{data?.title}</h3>
             <div className='cat-price-wrapper'>
              <p className='product-category'>{data?.category}</p>
              <p className='product-price'>${data?.price}</p>
               
             </div>
           </div>
                <div className='buy'>
                 <button className='addCard-btn' onClick={()=>{
                  if(LogedInUser!==null){
                    const Card_data = {
                      email:LogedInUser?.email,
                      productId: data?.id,
                      title: data?.title,
                      desc:data?.description,
                      category:data?.category,
                      image:data?.image,
                      price:data?.price

                      
                    };
                    fetch('http://127.0.0.1:8000/Mizan/create_card', {
                      method: "POST",
                      headers: {
                        'Content-Type': "application/json",
                      },
                      body: JSON.stringify(Card_data),
                    })
                    .then((response) => response.json())
                    .then((Data) => {
                      console.log(Data);
                      alert("Added To Your Card Successfully")
                      
                    })
                    .catch((error) => {
                      console.log(error);
                    });

                    
                    
                  }
                  else{
                    alert("To add the product Login  first")
                  }
                    


                  console.log(data?.id)
                 }}> Add To card</button>
                 <br />
                 <button className='buy-btn' 
                 > <Link to="/address">Buy Now</Link></button>
                </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Product
