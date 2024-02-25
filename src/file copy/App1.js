import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SignUp from '../Sign up/SignUp'
import SignInSide from '../Styled/SignInSlide'
import About from '../About us/About'
import Contact from '../Contact/Contact'

import Layot from './Layot'
import Homepg from '../Home page/Homepg'
import Homepg2 from '../Home page2/Homepg2'
import Tracker from '../components/Tracker'



export class App1 extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
              
            <Route path='/SignUp' element={<SignUp/>}/>  
                <Route path='/SignIn' element={<SignInSide/>}/>
            <Route path='/' element={<Layot/>}>
            
            <Route path='/Tracker' element={<Tracker/>}/>  
            
             <Route path='/' element={<Homepg/>}/>
             <Route path='/Home' element={<Homepg2/>}/>
                <Route path='/Aboutus' element={<About/>}/>
                <Route path='/Contactus' element={<Contact/>}/>
              

                
            </Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App1