import * as React from 'react';
import Box from '@mui/material/Box';
import './Register.css'
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
export default function Register() {
  const [name,setName]=useState();
  const [pass,setpass]=useState();
  const handleSubmit = async (e) => {
    await axios.post('http://localhost:3001/users',{"name":name,"pass":pass});
    console.log("skdkdkdkkkdkd");
  }

  return (
    <body>
      <div className='REG'>
    <Box className='aa'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div className='icon'>
        <h1>SIGN IN</h1>
        </div>
      <div id="a">
        <TextField
        required
        id="outlined-required"
        label="Username"
        color="secondary"
        onChange={(e)=>{setName(e.target.value)}}
        />
        <br/>
        <TextField
        required
        id="outlined-required"
        label="Email Id"
        color="secondary"
        />
        <br/>
        <TextField
        required
        id="outlined-password-input"
        label="Password"
        color="secondary"
        onChange={(e)=>{setpass(e.target.value)}}
        type="password"
          autoComplete="current-password"
          />
          <br/>
        <TextField
        required
          id="outlined-password-input"
          label="Confirm Password"
          type="Confirm password"
          color="secondary"
          autoComplete="current-password"
          />
          <br/>
          <br/>
          
          {/* <Link to='/ho'> */}
            
          <Button onClick={handleSubmit} variant='contained' color='secondary' className='abc' align ='center'>Register</Button>
          {/* </Link> */}
          <br></br><br></br>
            <h4>Already have an Account  
            <Link to='/login'>Log In</Link>
            
            </h4>
       
      </div>
    </Box>
    </div>
          </body>
  );
}