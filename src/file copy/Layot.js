import React from 'react'
import {Link, Outlet} from "react-router-dom"
import './Layot.css'
import { Avatar } from '@mui/material'
const Layot = () => {
  return (
    <div className='layout'>
     
      <img src='../Image2/Screenshot_2024-02-25_135716-removebg-preview.png' alt="gjg" width="100px" style={{borderRadius:"3vh",marginLeft:'30px',marginTop:'10px'}}/>
        <nav>
          <div className='list'>
            <div className='ab'>
            <div className="navbar-links-container">
               <div className="navbar-links-container">
                <div className="dropdown">
                    <button className="dropbtn">MENU</button>
                    <div className="dropdown-content">
                        <a href="/Tracker">Add Expense</a>
                        <a href="/Home2">Home</a>
                        <a href="/Service">Services</a>
                        <a href="/FAQ">FAQ</a>
                        <a href="/Feedback">Feedback</a>
                        <a href="/Profile">Profile</a>
                        <a href="/Aboutus">About</a>
                        <a href="/Contactus">Contact</a>
                    </div>
                </div>
            </div>
               </div>
              <div>
            </div>   
            </div>
        </div>
        </nav>
        
        <Outlet/>
    </div>
  )
}

export default Layot