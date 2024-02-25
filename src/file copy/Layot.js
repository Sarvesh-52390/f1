import React from 'react'
import {Link, Outlet} from "react-router-dom"
import './Layot.css'
import { Avatar } from '@mui/material'
const Layot = () => {
  return (
    <div className='layout'>
     
      <img src='./Image2/logo.jpg' alt="gjg" width="100px" style={{borderRadius:"3vh",marginLeft:'30px',marginTop:'10px'}}/>
        <nav className=''>
          <div className='list'>
            <div className='ab'>
          
          
        <Link to="/Home" className='ab2'>Home </Link>   
        <Link to="/Tracker" className='ab2'>Tracker </Link>   
      
              
               <Link to="/SignIn"  className='ab2'>Sign In</Link>
               
               <Link to="/Aboutus"  className='ab2'>About us</Link>
               
               <Link to="/Contactus"  className='ab2'>Contact us</Link>
               </div>
              
               </div>
              
               
            
        </nav>
        <Outlet/>
    </div>
  )
}

export default Layot