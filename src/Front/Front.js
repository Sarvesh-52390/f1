// 
import React, { useState } from 'react';
import '../Front/Front.css';
import Services from './Features';
import Review from './Review';
// import Footer from '../Footer/Footer';

const Front = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Redirect to the relevant page based on the search term
    window.location.href = `your-relevant-page-url?search=${searchTerm}`;
  };

  return (
    <>
      <div className="full">
        <div className="text">
          <h1>
            Transforming how people <br /> spend together
          </h1>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="I'm Looking For...."
            className="search-bar"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch} >
            Search
          </button>
        
        </div>
      </div>
      <Services />
      <Review />
    </>
  );
};

export default Front;
