import React from 'react';
import './Navbar.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
// import {Link} from 'React-router-dom';
const Navbar = () => {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
          };
        const handleClose = () => {
          setAnchorEl(null);
        };

    return (
    <div>
        <nav>
            <div className="nav-logo-container">
            <span>SPLITTER</span>
            </div>
            <div className="navbar-links-container">
            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <div class="meet">MENU</div>
      </Button> 
                <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>AddExpense</MenuItem>
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
        <MenuItem onClick={handleClose}>Services</MenuItem>
        <MenuItem onClick={handleClose}>BudgetLimit</MenuItem>
        <MenuItem onClick={handleClose}>Help</MenuItem>
        <MenuItem onClick={handleClose} Link href='/FAQ'>FAQ</MenuItem>
      </Menu>

                <a href="./Components/login">
                <button className="primary-button">Home</button></a> 
            </div>
        </nav>
    </div>
    );
}
export default Navbar;