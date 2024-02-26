import React from "react";
import './Footer.css';
import { FaHome } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { PiAddressBookFill } from "react-icons/pi";
import { MdContactPage } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaGooglePlus } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer id="contact" className="F-container">
      <div className="text">
        <h2>EXPENSE SPLITTER</h2>
        <br></br><br></br>
       <h4> <p>No more arguing, let's split today.</p></h4>
        <ul className="Contact-links">
        <FaLinkedin style={{ fontSize: '24px' }}/>
        <SiGmail style={{ fontSize: '24px' }}/>
        <FaGithub style={{ fontSize: '24px' }}/>
        <FaGooglePlus style={{ fontSize: '24px' }}/>
        </ul>
      </div>
      <ul className="links">
        <li className="link">
        <FaHome  className="Gmail-icon" style={{ fontSize: '24px' }}/>
          <a href="/Home2">Home</a>
        </li>
        <li className="link">
          <FaNewspaper className="Linkedin-icon" style={{ fontSize: '24px' }}/>
          <a href="/Splitter">Splitter</a>
        </li>
        <li className="link">
            <PiAddressBookFill className="Github-icon" style={{fontSize: '24px'}}/>
          <a href="/Tracker">Tracker</a>
        </li>
        <li className="link">
            <MdContactPage className="Github-icon" style={{fontSize: '24px'}}/>
          <a href="/Aboutus">Aboutus</a>
        </li>
        <li className="link">
            <MdContactPage className="Github-icon" style={{fontSize: '24px'}}/>
          <a href="/Contactus">Contact Us</a>
        </li>
        <div className="bottomBlur" />
      </ul>
    </footer>
  );
};
export default Footer;