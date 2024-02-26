import React from "react";
import Layout from "../Layout/Layout";
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import HomeStyles from "../Home page/HomeStyles.css"
import { Avatar, Grid } from "@mui/material";
import { Facebook, Google, Instagram, X } from "@mui/icons-material";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

const Homepg = () => {
  const loc=useLocation();
  const dat=loc.state;
  const [mail,setMail]=React.useState("a")

  React.useEffect(() => {
      if(dat){
          setMail(dat.nam)
          console.log(dat.nam)
      }
  }, [dat])
  return (
      <Layout>
        <center>      <div className="home" >
        <div className="headerContainer">
            <div className="fcol">
          <p style={{color:"rgb(248, 238, 53)",fontSize:'80px'}}>Hello,<br></br>
          Welcome to<br></br>
           Expense Splitter</p></div>
          <p style={{color:"ButtonHighlight",textAlign:'left',marginTop:'-50px'}}>Replace your claculators with this...</p>
          
          <Button
              Link href='/SignUp'
                type="submit"
        
                variant="contained"
                sx={{width:'150px',height:'60px',backgroundColor:'transparent',border:'2px solid',borderColor:'skyblue'}}

                
              >
                Sign Up
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

  );
};

export default Homepg;
