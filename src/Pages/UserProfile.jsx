import React from 'react'
import UserHeader from './UserHeader'
import UserProfileCard from '../Components/UserProfileCard'
import Footer from './Footer'

const UserProfile = () => {
  return (
    <div>
        <UserHeader/>
        <UserProfileCard/>
        <Footer/>
    </div>
  )
}

export default UserProfile