import React from 'react'
import {Link, Outlet} from "react-router-dom"
import './Layot.css'
import { Avatar } from '@mui/material'
const Layot = () => {
  return (
    <div className='lh'>
      <center>
      <img src='./Image2/logo.jpg' alt="gjg" width="150px" style={{borderRadius:"4vh"}}/></center>
        <nav className=''>
          <div className='list'>
            <div className='ab'>
          
          
        <Link to="/Home" className='ab'>Home </Link>   
      
              <Link to="/SignUp"  className='ab'>Sign Up</Link>
              
               <Link to="/SignIn"  className='ab'>Sign In</Link>
               
               <Link to="/Aboutus"  className='ab'>About us</Link>
               
               <Link to="/Contactus"  className='ab'>Contact us</Link>
               </div>
              
               </div>
              
               
            
        </nav>
        <Outlet/>
    </div>
  )
}

export default Layot