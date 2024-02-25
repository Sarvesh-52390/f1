import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import {usr,get} from 'react'

import "../Styled/SignInSlide.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState,data,nav } from 'react';
import {formData,setFormData} from 'react';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
}
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
 

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh',backgroundColor:'rgba(0, 0, 0, 0.671)',backgroundSize:'100%'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: 'url("../Image2/Primary-Image-best-bill-splitting-apps-4170968-412d800a14f74e88a712421fa83a2545.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginTop:'37px',height:'91vh'
          }}
          
        />
       
        <Grid item xs={8} sm={9} md={5} component={Paper} elevation={6} square sx={{border:'10px',borderRadius:'50px',borderColor:'orange',marginTop:'-60px',mx:-5.5,my:4}}>
          <Box
            sx={{
              my: 10,
              mx: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height:'70vh'
            }}
          >
            <img src='../Image2/Screenshot_2024-02-25_135716-removebg-preview.png' alt='gd' width="200px" style={{borderRadius:'10px',marginTop:'-50px'}}/>
          
             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar><br></br>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                
                
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
              Link href='/Home'
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 3 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/SignUp" variant="body2">
                    {"Don't have an account? "}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 2 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
