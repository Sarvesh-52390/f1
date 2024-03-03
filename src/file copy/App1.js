import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SignUp from '../Sign up/SignUp'
import SignInSide from '../Styled/SignInSlide'
import About from '../About us/About'
import Contact from '../Contact/Contact'

import Layot from './Layot'
import Homepg from '../Home page/Homepg'
import Homepg2 from '../Home page2/Homepg2'

import FAQComponent from '../Blog/FAQComponenet'

import BillSplitter from '../BillSplitter/BillSplitter'
import ExpenseTracker from '../Tracker/ExpenseTracker'
import GetStarted from '../GetStarted/GetStarted'
import Feedback from '../Feedback/FeedBack'
import { Profile } from '../Profile/Profile'
import Front from '../Front/Front'



export class App1 extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
              
            <Route path='/' element={<GetStarted/>}/>  
            <Route path='/Profile' element={<Profile/>}/>  
            <Route path='/Service' element={<Front/>}/>  
            <Route path='/SignUp' element={<SignUp/>}/>  
            <Route path='/SignIn' element={<SignInSide/>}/>
            <Route path='/' element={<Layot/>}>
            <Route path='/FAQ' element={<FAQComponent/>}/>
            <Route path='/Tracker' element={<ExpenseTracker/>}/>
            <Route path='/Feedback' element={<Feedback/>}/>
            <Route path='/Splitter' element={<BillSplitter/>}/>
             <Route path='/Home' element={<Homepg/>}/>
             <Route path='/Home2' element={<Homepg2/>}/>
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