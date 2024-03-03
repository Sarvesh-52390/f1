import React from "react";
import Layout from "../Layout/Layout";
import { Box, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Facebook, Google, Instagram, X } from "@mui/icons-material";
import '../About us/About.css'
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <Layout>
      
           <div className="bdiv">
       
         <center><h1 className="ah1" style={{marginRight:'-20px'}}>Welcome To Expense Splitter</h1><br></br>
        </center>
        <p className="apara">
          <h1 style={{textAlign:'center'}}>Our Mission : </h1><br></br>
          At Expense Splitter, our mission is to simplify the way people manage shared expenses, fostering transparency, fairness, and convenience among friends, families, and colleagues. We believe that financial interactions should enhance relationships, not complicate them. With our intuitive platform, we empower users to effortlessly track, split, and settle expenses, ensuring everyone gets their fair share without the hassle.<br></br><br></br>
          <h1 style={{textAlign:'center'}}>Values : </h1><br></br>
          <h3>Simplicity:</h3><br></br> We believe in keeping things simple and intuitive. Our platform is designed to be user-friendly, allowing anyone to effortlessly manage shared expenses, regardless of their financial expertise.<br></br><br></br>

          <h3> Transparency: </h3><br></br>Transparency is the cornerstone of healthy financial relationships. We prioritize transparency in every aspect of our platform, ensuring that users have clear visibility into who owes what and why.<br></br><br></br>

<h3>Fairness:</h3><br></br> Fairness is non-negotiable. We are committed to providing fair and equitable solutions for splitting expenses, ensuring that everyone involved gets their fair share without any bias or favoritism.<br></br><br></br>

<h3>Collaboration:</h3><br></br> We recognize that managing shared expenses is a collaborative effort. Our platform encourages collaboration among users, making it easy for groups to work together towards financial harmony.<br></br><br></br>

<h3>Convenience:</h3><br></br> Convenience is key to a stress-free experience. We strive to make managing shared expenses as convenient as possible, offering features like automatic expense tracking, multiple payment options, and seamless integration with popular platforms.<br></br><br></br>

<h1 style={{textAlign:'center'}}>Our Vision : </h1><br></br>
Our vision is to become the go-to solution for anyone looking to simplify the process of managing shared expenses. We aim to empower millions of users worldwide to take control of their finances and strengthen their relationships through transparent, fair, and convenient expense management.
        </p><br></br>
       
        
    
      </div>
      <Footer/>
 
    </Layout>
  );
};

export default About;
