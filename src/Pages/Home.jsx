import React from 'react'

import { Routes,Route , BrowserRouter as Router,Navigate} from "react-router-dom";
import Homecontent from './Homecontent';
import Login from './Login';

import Header from './Header';
import JobPage from './JobPage';
import Register from './Register';
import Employee_register from './Employee_register';
import Employee_login from './Employee_login';
import JobEmployee from './JobEmployee'
import { useRecoilState } from 'recoil';
import loginEmpInfoAtom from '../Recoil/loginEmpInfoAtom'
import UserDashboard from './UserDashboard';
import loginAtom from '../Recoil/loginAtom';
import ApplyJob from './ApplyJob';
import EditItemPage from './EditItemPage';
import CreateJob from './CreateJob';
import UserProfile from './UserProfile';
import Forgot from './Forgot';
import AppliedJobUser from './AppliedJobUser';
import Response from './Response'
import applyJobDetailsAtom from '../Recoil/applyJobDetailsAtom';
const Home = () => {
  const [empLoginInfo,setEmpLoginInfo]=useRecoilState(loginEmpInfoAtom)
  const [loginData,setLoginData]=useRecoilState(loginAtom);
  const [applyJobDetails,setApplyJobDetails]=useRecoilState(applyJobDetailsAtom)
  return (
    <div>
        <Router basename="/Job_react_app">
            <Routes>
             
            <Route path="/*" element={<Homecontent/>}/>
            
            <Route path="/" element={<JobPage/>}/>
               
             
            <Route path="/login" element={loginData===null? <Login/>:<UserDashboard/>}/>
            <Route path="/job" element={<JobPage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/employee_reg" element={<Employee_register/>}/>
            <Route path="/employee_login" element={ empLoginInfo===false? <Employee_login/>:<JobEmployee/>}/>
            <Route path="/job_emp" element={<JobEmployee/>}/>
            <Route path="/dashboard" element={<UserDashboard/>}/>
            <Route path="/apply_job" element={ <ApplyJob/>}/>
            <Route path="/edit_item" element={<EditItemPage/>}/>
            <Route path="/create_job" element={<CreateJob/>}/>
            <Route path="/user_profile" element={<UserProfile/>}/>
            <Route path="/forgot_password" element={<Forgot/>}/>
            <Route path="/applied_job_user" element={<AppliedJobUser/>}/>
            <Route path="/response" element={<Response/>}/>







            
            
            </Routes>
        </Router>

    </div>
  )
}

export default Home
