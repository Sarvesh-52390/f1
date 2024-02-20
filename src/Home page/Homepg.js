import React from "react";
import Layout from "../Layout/Layout";
import Link from '@mui/material/Link';

import HomeStyles from "../Home page/HomeStyles.css"


const Homepg = () => {
  return (
    <Layout>
        <center>      <div className="home" >
        <div className="headerContainer">
            <div className="fcol">
          <h1 style={{color:"rgb(248, 238, 53)"}}>Expense Splitter</h1></div>
          <p style={{color:"ButtonHighlight"}}>Replace your claculators with this...</p>
          <Link to="/menu">
            <button>Calculate here</button>
          </Link>
        </div>
      </div>
      </center>

    </Layout>
  );
};

export default Homepg;
