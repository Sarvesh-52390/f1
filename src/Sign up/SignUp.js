import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import "../Sign up/SignUp.css"
import { useState } from 'react';
import {usr,get} from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);



export default function SignUp() {
  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [usernameError, setUsernameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [formValid, setFormValid] = useState(null);
  const [success, setSuccess] = useState(null);

  const nav=useNavigate();
  const [pass, setPass] = useState("");
  const [cpass,setCpass]=useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);


    const on=useNavigate();

    
    
    const handlePass = (e) => {
      setPass(e.target.value);
    };
  
    const handleCpass = (e) => {
      setCpass(e.target.value);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleSubmit = (e) => {
      e.preventDefault();
      if (pass === cpass) {
        
        console.log('Passwords match!');
        nav('/Signin',{state:usr})
       
      } else {
        
        console.log('Passwords do not match!');

        setPasswordsMatch(false);
      }};

      const handleUsername = () => {
        if (!usernameInput) {
          setUsernameError(true);
          return;
        }
        setUsernameError(false);
      };
    
      const handleEmail = () => {
        if (!isEmail(emailInput)) {
          setEmailError(true);
          return;
        }
        setEmailError(false);
      };
    
      const handlePassword = () => {
        if (!passwordInput || passwordInput.length < 5 || passwordInput.length > 20) {
          setPasswordError(true);
          return;
        }
        setPasswordError(false);
      };
    
      const handleSubmit1 = () => {
        setSuccess(null);
    
        if (usernameError || !usernameInput) {
          setFormValid("Username is set between 5 - 15 characters long. Please Re-Enter");
          return;
        }
    
        if (emailError || !emailInput) {
          setFormValid("Email is Invalid. Please Re-Enter");
          return;
        }
    
        if (passwordError || !passwordInput) {
          setFormValid("Password is set between 5 - 20 characters long. Please Re-Enter");
          return;
        }
        setFormValid(null);
    
        
    
        setSuccess("Form Submitted Successfully");
    
       
        nav('/Signin');
      };
      

  return (
    <ThemeProvider theme={defaultTheme}>
        <div style={{marginBottom:'0vh',height:'122.9vh',marginTop:"-180px"}} className='bimg2'>
       
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Grid>
          <img src='../Image2/Screenshot_2024-02-25_135716-removebg-preview.png' alt='jjf' width="340px" style={{marginTop:'350px',marginLeft:"-350px",borderRadius:'40px'}}/>
          
        </Grid>
        <center>
        <Grid 
          item sx={{
          }}/>
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor:' rgba(0, 0, 0, 0.471)',
            width:'80vh',
            marginLeft:'180px',
            marginbottom:'40px',
            mt:10,
            marginTop:'-420px',
            borderRadius:'40px',
            
            border:'2px solid black',
            
           
          }}
        >
            <div className='bimg'>
             
          
            <br></br>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 8 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={14} sm={6} sx={{color:'wheat'}}>
                <div sx={{color:'wheat'}}>
                <TextField
                  value={usernameInput}
                  required
                  fullWidth
                  id="Username"
                  label="UserName"
                  name="UserName"
                  onChange={(event) => {
                    setUsernameInput(event.target.value);
                  }}
                  onBlur={handleUsername}
                  
                /></div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  value={emailInput}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onBlur={handleEmail}
            onChange={(event) => {
              setEmailInput(event.target.value);
            }}
                 
                />
              </Grid>
              <Grid item xs={16}>
              <FormControl sx={{ m: 1, width: '52ch',marginLeft:'0px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          required
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={pass}
            onChange={handlePass}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onChange={(event) => {
                    setPasswordInput(event.target.value);
                  }}
                  
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
              </Grid>
              <Grid item xs={16}>
              <FormControl sx={{ m: 1, width: '52ch',marginLeft:'0px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={cpass}
            onChange={handleCpass}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label=" Confirm Password"
          />
        </FormControl>
              </Grid>
                 {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match!</p>}
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
           
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 2 }}
              onClick={handleSubmit1}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/SignIn" variant="body2">
                  Already have an account? 
                </Link>
              </Grid>
            </Grid>
          </Box>
            </div>
        </Box>
        </center>
      </Container>
      </div>
    </ThemeProvider>
  );
}