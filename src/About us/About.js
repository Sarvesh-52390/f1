import React from "react";
import Layout from "../Layout/Layout";
import { Box, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import '../About us/About.css'

const About = () => {
  return (
    <Layout>
           <div className="bdiv">
        <div className="aimg">
         </div>
         <center><h1 className="ah1">Welcome To Expense Splitter</h1>
        </center>
        <p className="apara">
        At Expense Splitter, we understand the challenges that come with managing shared expenses among friends, family, or colleagues. Whether it's splitting bills at a restaurant, sharing rent and utilities, or organizing group trips, coordinating expenses can be complicated and time-consuming. That's why we've created an intuitive and efficient solution to simplify the process.
        Our mission is to make splitting expenses hassle-free and fair for everyone involved. With our user-friendly platform, you can easily track, manage, and settle shared expenses within seconds. No more awkward conversations about who owes what or endless calculations on scraps of paper. Expense Splitter streamlines the entire process, so you can focus on enjoying your time together rather than worrying about money matters.
        </p>
        
        <p className="apara">
        Whether you're planning a weekend getaway with friends, managing household expenses with roommates, or organizing a team event at work, Expense Splitter is your go-to solution for seamless expense management.

Join the thousands of satisfied users who have made Expense Splitter their trusted companion for splitting expenses fairly and efficiently. Say goodbye to confusion and frustration – and hello to stress-free expense management!

Start simplifying your shared expenses today with Expense Splitter.
        </p>
      </div>
      
 
    </Layout>
  );
};

export default About;
