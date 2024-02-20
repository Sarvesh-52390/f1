import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SignUp from '../Sign up/SignUp'
import SignInSide from '../Styled/SignInSlide'
import About from '../About us/About'
import Contact from '../Contact/Contact'

import Layot from './Layot'
import Homepg from '../Home page/Homepg'



export class App1 extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layot/>}>
              
            <Route path='/SignUp' element={<SignUp/>}/>  
            
             <Route path='/Home' element={<Homepg/>}/>
                <Route path='/SignIn' element={<SignInSide/>}/>
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