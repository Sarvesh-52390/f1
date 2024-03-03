import React from "react";
import Layout from "../Layout/Layout";
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import HomeStyles2 from "../Home page2/HomeStyles2.css"
import { useLocation } from "react-router-dom";
import { Avatar, Grid } from "@mui/material";
import { Facebook, Google, Instagram, X } from "@mui/icons-material";
import { useEffect } from "react";
import Footer from "../Footer/Footer";


const Homepg2 = () => {
    const loc=useLocation();
    const dat=loc.state;
    const [mail,setMail]=React.useState("")

    useEffect(() => {
      console.log("<<<<<<<<<<<<<<<<<<<first>>>>>>>>>>>>>>>>>>>",dat.nam)
      if(dat && dat.nam){
        setMail(dat.nam)
        console.log(dat.nam)
      }
    }, [dat]);
  return (
    <div>
    
    <Layout>
        <center>      <div className="home" >
        <div className="headerContainer">
            <div className="fcol">
          <p style={{color:"rgb(248, 238, 53)",fontSize:'80px'}}>Hello,{mail}<br></br>
          Welcome to<br></br>
           Expense Splitter</p></div><br></br><br></br><br></br>
          <p style={{color:"ButtonHighlight",textAlign:'left',marginTop:'-45px'}}>Replace your claculators with this...</p>
          
          <Button
              Link href='/Splitter'
                type="submit"
        
                variant="contained"
                sx={{width:'150px',height:'60px',backgroundColor:'transparent',border:'2px solid',borderColor:'skyblue'}}

                
              >
                Splitter
              </Button>
          <br></br><br></br>
          
          
          
         
          <div className="social-icons">
      <a href="URL_TO_GOOGLE" target="_blank" rel="noopener noreferrer"><Google /></a>
      <a href="URL_TO_INSTAGRAM" target="_blank" rel="noopener noreferrer"><Instagram /></a>
      <a href="URL_TO_FACEBOOK" target="_blank" rel="noopener noreferrer"><Facebook /></a>
      <a href="URL_TO_FACEBOOK" target="_blank" rel="noopener noreferrer"><X/></a>
      {/* Add other social media icons as needed */}
    </div><br></br><br></br><br></br>
  
        </div>
      </div>
     
      </center>
          
          

    </Layout>
      </div>
  );
};

export default Homepg2;
