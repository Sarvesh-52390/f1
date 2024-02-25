import React from "react";
import Layout from "../Layout/Layout";
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import HomeStyles2 from "../Home page2/HomeStyles2.css"
import { useLocation } from "react-router-dom";
import { Avatar, Grid } from "@mui/material";
import { Facebook, Google, Instagram, X } from "@mui/icons-material";


const Homepg = () => {
    const loc=useLocation();
    const dat=loc.state;
    const [mail,setMail]=React.useState()

    React.useEffect(() => {
        if(dat && dat.email){
            setMail(dat.email)
        }
    }, [dat]);
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
              Link href='/Tracker'
                type="submit"
        
                variant="contained"
                sx={{width:'150px',height:'60px',backgroundColor:'transparent',border:'2px solid',borderColor:'skyblue'}}

                
              >
                Tracker
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
