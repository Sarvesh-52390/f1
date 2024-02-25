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




// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();



export default function SignUp() {
    const on=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    on('/')
  };

  return (
    <ThemeProvider theme={defaultTheme}>
        <div style={{marginBottom:'0vh',height:'122.9vh',marginTop:"-180px"}} className='bimg2'>
       
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Grid>
          <img src='../Image2/Screenshot_2024-02-25_135716-removebg-preview.png' alt='jjf' width="350px" style={{marginTop:'350px',marginLeft:"-350px",borderRadius:'40px'}}/>
          
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
            marginTop:'-400px',
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
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  
                />
              </Grid>
              <Grid item xs={14} sm={6} sx={{color:'wheat'}}>
                <div sx={{color:'wheat'}}>
                <TextField

                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                /></div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={16}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
            Link href='/SignIn'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 11.5, mb: 2 }}
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