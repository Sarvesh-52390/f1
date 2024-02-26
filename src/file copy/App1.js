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
import GetStarted from '../Get Start/GetStart'
import BillSplitter from '../Splitter/Splitter'
import FAQComponent from '../Blog/FAQComponenet'
import ExpenseTracker from '../Tracker/Tracker'



export class App1 extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
              
            <Route path='/SignUp' element={<SignUp/>}/>  
            <Route path='/' element={<GetStarted/>}/>  
                <Route path='/SignIn' element={<SignInSide/>}/>
            <Route path='/' element={<Layot/>}>
            
            <Route path='/FAQ' element={<FAQComponent/>}/>
            
            <Route path='/Tracker' element={<ExpenseTracker/>}/>  
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